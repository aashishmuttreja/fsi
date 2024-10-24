DAVE_SETTINGS.INTERACTION_USER_ID = "user_id";
djQ( "#dave-settings" ).on('load', function() {
    $( this ).attr("data-cb-minLockHeight", "0px");
});
djQ(document).on("click", ".dave-homeBtn", function(){
    botchat_data({"query_type": "click"});
})
DAVE_SETTINGS.register_custom_callback('after_minimize_custom', function() {
    djQ( ".dave-chatbox-open" ).css("height", "118px");
}); 

DAVE_SETTINGS.register_custom_callback("before_user_loader", function() {
    return false
});

DAVE_SETTINGS.register_custom_callback("before_customer_signup", function(data) {
    data["conversation_id"] = DAVE_SETTINGS.CONVERSATION_ID
});

DAVE_SETTINGS.register_custom_callback("after_click_predicted_option", function(a, b) {
    djQ( "#dave-cb-usersend" ).click();
});

DAVE_SETTINGS.register_custom_callback("after_options_response", function(opt, dat, resp) {
    let t = djQ(".dave-option-list").last();
    let ht = '75px';
    let ovf = 'hidden';
    if ( resp.name.indexOf('sr_nu') >= 0 && (!resp.customer_state || (resp.customer_state.indexOf('unknown') < 0 && resp.customer_state.indexOf('unsure') < 0 ) ) ) {
        if ( resp.customer_state.indexOf('nu_faq_nudge') >= 0 ) {
            ht = '177px';
            djQ( t ).children('ul.dave-option-list li').css('width', '100%')
            djQ( t ).css('margin', 'auto 20px')
            ovf = 'auto'
        }
        if ( djQ( t ).height() <=  1 || djQ( t ).height() > 78 ) {
            djQ( t ).css('height', ht);
            djQ( t ).css('overflow', ovf);
            djQ( t ).prepend('<span class="more-options">&nbsp;</span><span class="less-options">&nbsp;</span>');
            djQ( ".more-options" ).on("click", function() {
                let p = djQ( this ).parent();
                djQ( p ).find(' .less-options' ).show();
                djQ( p ).find(' .more-options' ).hide();
                djQ( p ).css("height", "");
                djQ( p ).css("overflow", 'auto');
                if ( djQ( p ).parents('.dave-botchat').is(':last-child') ) {
                    DAVE_SETTINGS.scrollChatarea();
                }
                if ( p.height() < 78 ) {
                    djQ( p ).find(' .less-options' ).hide();
                }
            });
            djQ( ".less-options" ).on("click", function() {
                let p = djQ( this ).parent();
                djQ( p ).find(' .less-options' ).hide();
                djQ( p ).find(' .more-options' ).show();
                djQ( p ).css("height", ht);
                djQ( p ).css("overflow", ovf);
                if ( djQ( p ).parents('.dave-botchat').is(':last-child') ) {
                    DAVE_SETTINGS.scrollChatarea();
                }
            });
        }
    }
});

DAVE_SETTINGS.register_custom_callback("on_click_dislike", function() {
    botchat_data({ 
        'customer_state': "cs_need_assistance", "customer_response": "This answer was un-satisfactory", "query_type": "auto",
        "temporary_data": {
            "user_dislike": true
        },
    },'open', 'max');
});

DAVE_SETTINGS.register_custom_callback('on_chat_start', function(x, params) {
    if ( params.query_type != 'auto' ) {
        DAVE_SETTINGS.maximize();
    }
    if (!DAVE_SETTINGS.getCookie("dave_authentication") || !DAVE_SETTINGS.getCookie('dave_user_id')) {
        setTimeout( function() {
            if (!DAVE_SETTINGS.getCookie("dave_authentication") || !DAVE_SETTINGS.getCookie('dave_user_id')) {
                djQ( ".dave-cb-chatarea").empty();
                window.dave_chatRes_loader('bot');
                DAVE_SETTINGS.did_interact = false;
                if (!DAVE_SETTINGS.getCookie('dave_started_signup') ) {
                    DAVE_SETTINGS.load_dave(function(){
                        djQ('.dave-cb-stickBottom').css('display', 'block');
                        djQ( ".dave-cb-chatarea").empty();
                        if (!DAVE_SETTINGS.did_init) {
                            window.botchat_data({'query_type': 'auto'});
                        }
                    });
                }
            } else {
                DAVE_SETTINGS.did_init = true;
            }
        }, 2500);
    } else {
        DAVE_SETTINGS.did_init = true;
    }
    if (!params.temporary_data) {
        params['temporary_data'] = {}
    }
    if (STATE_PAGE_MAP) {
        let js = STATE_PAGE_MAP[window.location.pathname.split('/').slice(-1)[0].replace("-", "_")];
        if ( typeof(js) == "object" ) {
            js = js["options"][djQ( js['identifier'] ).text()];
        }
        params.temporary_data['journey_stage'] = js;
    }
    params.temporary_data['origin'] = window.location.origin;
    params.temporary_data['path'] = window.location.href;
    params.temporary_data['pathname'] = window.location.pathname;
    let up = DAVE_SETTINGS.get_url_params();
    for ( k of ["utm_source", "utm_medium", "utm_campaign", "utm_term"] ) {
        if ( up[k] ) {
            params[k] = up[k];
        }
    }
});
DAVE_SETTINGS.register_custom_callback("on_close_custom", function(a, b) {
    DAVE_SETTINGS.dave_eng_id_status = true;
    DAVE_SETTINGS.did_init = false;
    DAVE_SETTINGS.start_load_dave = false;
    stopTimmer();
    return true;
});
DAVE_SETTINGS.register_custom_callback("on_maximize_custom", function() {
    djQ('.dave-cb-stickBottom').css('display', 'block');
});
DAVE_SETTINGS.register_custom_callback("on_minimize_custom", function() {
    djQ('.dave-cb-stickBottom').css('display', 'block');
});
djQ( window ).on('beforeunload', function() {
    DAVE_SETTINGS.clearCookies();
});
DAVE_SETTINGS.register_custom_callback('before_user_text_bubble', function(d) {
    d['text'] = d['text'].replace(/[+]{0,1}[0]{0,2}[1-9][0-9]{9,12}/g, '**********');
    return d['text'];
});
DAVE_SETTINGS.MANUAL_LOAD = true;
let STATE_PAGE_MAP = {};
djQ(document).ready(function () {
  djQ(".dave-chatbox-cont").on("mouseleave", function () {
    djQ(this).css("z-index", "999");
  });
  djQ(".dave-chatbox-cont").on("mouseenter", function () {
    djQ(this).css("z-index", "99999");
  });
});
DAVE_SETTINGS.register_custom_callback("after_load_chatbot", function () {
  djQ(".dave-cb-icon").on("click", function () {
    window.dave_chatRes_loader("bot");
    DAVE_SETTINGS.load_dave(function () {
      if (DAVE_SETTINGS.loaded_dave) {
        djQ(".dave-cb-stickBottom").css("display", "block");
        if (!DAVE_SETTINGS.did_init) {
          window.botchat_data({ query_type: "auto" });
          DAVE_SETTINGS.did_init = true;
        }
      }
    });
    // DAVE_SETTINGS.register_passive_nudge(60000, "cs_need_assistance", "Can you help me?", 'closed', 'max', null, null, null, {'user_idle': true});
  });
});
DAVE_SETTINGS.DEFAULT_SYSTEM_RESPONSE = {
  data: {
    options: [
      ["cs_account_services", "Account Services"],
      ["cs_product_category", "Investments"],
      ["cs_product_category", "Loans"],
      ["cs_cards", "Cards"],
      ["cs_product_category", "NRI Banking"],
      ["cs_product_category", "Insurance"],
      ["cs_product_category", "Digital Banking"],
      ["cs_self_services", "Self Services"],
      ["cs_contact_us", "Contact Us"],
      ["cs_online_account_opening", "Online Account Opening"],
      ["cs_product_category", "WhatsApp Banking"],
    ],
    _follow_ups: [],
    response_type: "options",
  },
  name: "sr_init",
  wait: 2000,
  title: "Init",
  placeholder:
    "Hi! I am K@rya, your digital assistant to help you with products and services of Karnataka Bank. <br><br> You can select from the options below or can type your question in the space provided.<br>",
  show_feedback: false,
  state_options: {},
  show_in_history: true,
  to_state_function: { function: "_function_find_customer_state" },
  maintain_whiteboard: false,
  overwrite_whiteboard: false,
  placeholder_aliases: {},
  whiteboard: null,
  whiteboard_title: "Init",
  options: null,
  customer_state: "__init__",
};
DAVE_SETTINGS.UNKNOWN_STATE = {
  data: {
    options: [
      ["cs_account_services", "Account Services"],
      ["cs_product_category", "Investments"],
      ["cs_product_category", "Loans"],
      ["cs_cards", "Cards"],
      ["cs_product_category", "NRI Banking"],
      ["cs_product_category", "Insurance"],
      ["cs_product_category", "Digital Banking"],
      ["cs_self_services", "Self Services"],
      ["cs_contact_us", "Contact Us"],
      ["cs_online_account_opening", "Online Account Opening"],
      ["cs_product_category", "WhatsApp Banking"],
    ],
    _follow_ups: [],
    response_type: "options",
  },
  customer_state: "unknown_customer_state",
  placeholder_aliases: {},
  show_feedback: true,
  to_state_function: {
    function: "_function_find_customer_state",
  },
  maintain_whiteboard: false,
  show_in_history: true,
  overwrite_whiteboard: false,
  name: "sr_ask_options",
  title: "Ask Options",
  response_channels: {},
  placeholder:
    "I am still Learning. We might not have any information on this, You can reach us on : <br> 1800 425 1444 ( Toll Free ) <br> 1800 572 8031 ( Toll Free ) <br>  080 - 2202 1500 <br> or contact the nearest branch. <br> <a href='https://kb.realigner.com/' target='_blank'> Click here  </a> to locate a nearest branch.",
  state_options: {},
  whiteboard_title: "Ask Options",
  wait: 1000,
};
DAVE_SETTINGS.register_custom_callback("after_close_custom", function () {
  DAVE_SETTINGS.clearCookies();
  djQ(".dave-cb-chatarea").empty();
  DAVE_SETTINGS.did_interact = false;
  djQ("body").css("overflow", "visible");
});
setTimeout(function () {
  let ap =
    "//J4PdJj6wstmU.com/karnataka_bank";
  if (window.location.origin.indexOf("ktkbank") >= 0) {
    ap = "/dhira/plugin";
  } else if (window.location.origin.indexOf("localhost") >= 0) {
    ap = "";
  }
  helps = [
    "may_i_help_you",
    "need_some_help",
    "here_to_serve",
    "can_i_assist",
    "ask_dhira",
    "need_a_helping_hand",
  ];
  let ext = ".webp";
  let ind = 0;
  function add_help() {
    djQ("#may-i-help").remove();
    djQ(".dave-cb-icon").append(
      `
            <img src="${ap}/${helps[ind]}${ext}" id="may-i-help" style="width:auto;height:32px;top:-18.4px;left:-79.6px;display:none;">
            `
    );
    ind++;
    ind = ind % helps.length;
  }
  function do_help() {
    if (!DAVE_SCENE.opened) {
      djQ("#may-i-help").fadeIn("slow", "swing");
      clearTimeout(DAVE_SCENE.help_timer);
      DAVE_SCENE.help_timer = setTimeout(function () {
        djQ("#may-i-help").fadeOut("slow", "linear", function () {
          add_help();
        });
      }, 5000);
    }
  }
  add_help();
  do_help();
  DAVE_SCENE.help_interval = setInterval(do_help, 18000);
  djQ(".dave-cb-icon").hover(
    function () {
      djQ("#may-i-help").fadeIn("fast", "swing");
      clearInterval(DAVE_SCENE.help_interval);
      clearTimeout(DAVE_SCENE.help_timer);
    },
    function () {
      djQ("#may-i-help").fadeOut("fast", "swing");
      clearTimeout(DAVE_SCENE.help_timer);
      DAVE_SCENE.help_timer = setTimeout(function () {
        add_help();
        do_help();
        DAVE_SCENE.help_interval = setInterval(do_help, 15000);
      }, 10000);
    }
  );
}, 10000);

DAVE_SETTINGS.register_custom_callback("on_minimize_custom", function () {
  setTimeout(function () {
    djQ("body").css("overflow", "visible");
  }, 1000);
});

DAVE_SETTINGS.register_custom_callback(
  "on_chat_start",
  function (inp, params, callbackFunc, errorFunc, unknownFunc) {
    if (params.customer_state) {
      return;
    }
    if (!params.customer_response || params.customer_response.length < 6) {
      return;
    }
  }
);

DAVE_SETTINGS.register_custom_callback(
  "on_response",
  function (a, customer_state, resp, params) {
    DAVE_SETTINGS.create_event("got_response");
    clearTimeout(DAVE_SETTINGS._received_sent_response);
    delete DAVE_SETTINGS._received_sent_response;
  }
);
