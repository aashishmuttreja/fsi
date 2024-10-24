
 // Data for the donut chart
 function CreateOnloadDonut(tab_type){

  var P = $('#loan-amount-'+tab_type).val();
  var R = $('#rate-of-interest-'+tab_type).val();
  var N = $('#loan-tenure-'+tab_type).val();
  
  if(tab_type=='FD'){
      // Calculate compound interest
      var compoundInterest = P * (Math.pow((1 + R / 400), 4*N/12) - 1);
      var total = Math.round(Number(P) + Number(compoundInterest));
      //var total_show = total.toLocaleString("en-in");
      
      var intperc = parseInt( (Number(compoundInterest) / Number(P)) * 100);
      var left = parseInt(100-intperc);
      var data = [
        {
          name: "Interest Amount",
          y: intperc,
          value: Math.round(compoundInterest).toLocaleString('en-IN', { useGrouping: true, minimumIntegerDigits: 2 }),
        },
        {
          name: "Principal Amount",
          y: left,
          value: Number(P).toLocaleString('en-IN', { useGrouping: true, minimumIntegerDigits: 2 }),
        }
      ]
     // console.log(tab_type);

      $('.amount-text-'+tab_type).html('₹'+ total.toLocaleString("en-in"));
      donutCal(data,tab_type);
      
  }else{
      var r = k(P, R, N) ;
      var intperc = parseInt( (r.interest / r.principal) * 100);
      var left = parseInt(100-intperc);
      var data = [
        {
          name: "Interest Amount",
          y: intperc,
          value: r.interest.toLocaleString('en-IN', { useGrouping: true, minimumIntegerDigits: 2 }),
        },
        {
          name: "Principal Amount",
          y: left,
          value: r.total.toLocaleString('en-IN', { useGrouping: true, minimumIntegerDigits: 2 }),
        }
      ]

      $('.amount-text-'+tab_type).html('₹'+ r.emi.toLocaleString("en-in") + '/<span class="month-year">month</span>');
      donutCal(data,tab_type);
  }
}

$(document).ready(function() {

  /* Start EMI calculator */
  $("#loan-amount-EMI").on("input", function() {
    CreateOnloadDonut("EMI");
  });

  $("#rate-of-interest-EMI").on("input", function() {
    CreateOnloadDonut("EMI");

  });

  $("#loan-tenure-EMI").on("input", function() {
    CreateOnloadDonut("EMI");
  });
  /* End EMI calculator */
  
/* Start Home calculator */
  $("#loan-amount-HOME").on("input", function() {
    CreateOnloadDonut("HOME");
  });

  $("#rate-of-interest-HOME").on("input", function() {
    CreateOnloadDonut("HOME");

  });

  $("#loan-tenure-HOME").on("input", function() {
    CreateOnloadDonut("HOME");
  });

  /* End Home calculator */


/* Start CAR calculator */
  $("#loan-amount-CAR").on("input", function() {
    CreateOnloadDonut("CAR");
  });

  $("#rate-of-interest-CAR").on("input", function() {
    CreateOnloadDonut("CAR");

  });

  $("#loan-tenure-CAR").on("input", function() {
    CreateOnloadDonut("CAR");
  });
  /* End CAR calculator */

 /* Start FD calculator */
 $("#loan-amount-FD").on("input", function() {
  CreateOnloadDonut("FD");
});

$("#rate-of-interest-FD").on("input", function() {
  CreateOnloadDonut("FD");

});

$("#loan-tenure-FD").on("input", function() {
  CreateOnloadDonut("FD");
});
/* End FD calculator */



});


function k(e, t, a) {
  var n = e,
      l = a,
      r = (c = t) / 100 / 12,
      o = Math.pow(1 + r, l),
      i = o / (o - 1),
      u = (Math.round(n * r * i), ((r * -n * Math.pow(1 + r, l)) / (1 - Math.pow(1 + r, l))).toFixed(4)),
      c = u * l - n,
      s = Number(n) + Number(c);
  if (!u || !c || !s) return { principal: Math.round(n), emi: 0, interest: 0, total: 0 };
  for (
      var m = Number(n),
          d = "",
          h = 0,
          g = 0,
          v = 0,
          p = 0,
          f = 0,
          b = 0,
          y = ((d = "<table><thead><tr><th>Year</th><th>Opening Balance</th><th>EMI*12</th><th>Interest paid yearly</th><th>Principal paid yearly</th><th>Closing Balance</th></thead><tbody>"), 1);
      y <= l / 12;
      y++
  ) {
      for (var A = "", I = 1; I <= 12; I++) {
          var N = Number(((t * m) / 1200).toFixed(4)),
              w = Number((u - N).toFixed(4));
          (m = Number((m - w).toFixed(4))), (A = Number((Number(A) + N).toFixed(4)));
      }
      var mt = (12 * u).toFixed(4),
          L = A,
          k = (mt - L).toFixed(4),
          S = (n - k).toFixed(4);
      (h = isNaN(n) ? 0 : Math.round(n).toLocaleString("en-IN")),
          (g = isNaN(mt) ? 0 : Math.round(mt).toLocaleString("en-IN")),
          (v = isNaN(L) ? 0 : Math.round(L).toLocaleString("en-IN")),
          (p = isNaN(k) ? 0 : Math.round(k).toLocaleString("en-IN")),
          (isNaN(S) || "-0" == (f = Math.round(S).toLocaleString("en-IN"))) && (f = 0),
          (b = parseInt(v) > 0 ? parseInt(b) + parseInt(v.replace(/,/g, "")) : parseInt(b) + 0),
          (d += "<tr><td>" + y + "</td><td>" + h + "</td><td>" + g + "</td><td>" + v + "</td><td>" + p + "</td><td>" + f + "</td></tr>"),
          (n = S);
  }
  return (d += "</tbody></table>"), { principal: Math.round(e), emi: Math.round(u), interest: Math.round(c), total: Math.round(s), detailDesc: d };
}

setTimeout(function () {
if ($("#donutChartContainer-EMI").length > 0) {
  CreateOnloadDonut("EMI");
}
if ($("#donutChartContainer-HOME").length > 0) {
  CreateOnloadDonut("HOME");
}
if ($("#donutChartContainer-CAR").length > 0) {
  CreateOnloadDonut("CAR");
}
if ($("#donutChartContainer-FD").length > 0) {
  CreateOnloadDonut("FD");
}
}, 1500);




// Create the donut chart
function donutCal(data , tab_type){
if ($("#donutChartContainer-"+tab_type).length > 0) {
  Highcharts.chart("donutChartContainer-"+tab_type, {
    chart: {
      type: "pie",
      width: 280,
      height: 280,
    },
    title: {
      text: "",
    },
    plotOptions: {
      pie: {
        innerSize: "60%", // This makes it a donut chart
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "",
        data: data,
        colors: ["#6FCF97", "#FFC555"],
        states: {
          hover: {
            colors: ["#6FCF97", "#FFC555"],
          },
        },
      },
    ],
    tooltip: {
      formatter: function () {
        //console.log(this.point.value);
        // Customize the tooltip content here
        return "<b>" + this.key + "</b><br/>&#8377;" + this.point.value;
      },
      backgroundColor: "rgb(255, 255, 255)",
      boxShadow: "0px 1.75px 14px 0px rgba(0, 0, 0, 0.10)",
      borderRadius: 4,
      style: {
        fontSize: "12px",
      },
    },
  });
}
}





 
  $(document).on('click' , '.lets_compare' ,function () {
  var checkedCheckboxes = $('.lets_compare:checked');
  var uncheckedCheckboxes = $('.lets_compare:not(:checked)');

  var count_checkbox = checkedCheckboxes.length;
  var htm = '';
    checkedCheckboxes.each(function() {
      var checkboxValue = $(this).val();
      var title = $(this).data("title");
      var data_id = $(this).data("id");
         htm += '<div class="filter-list-row d-none d-md-block jsFliterListRow" data-id="'+data_id+'"><div class="filter-list-col"><p class="compare-list-text">'+title+'</p><p><button class="filter-close jsFilterClose"><span class="icon-close"></span></button></p></div></div>';
    });

    var url = window.location.href;
    var btn_account_text = 'Add account to compare';
    var btn_compare_text = 'Add to compare';
    if(url.includes('/kn/')){
      btn_account_text = 'ಹೋಲಿಸಲು ಖಾತೆಯನ್ನು ಸೇರಿಸಿ';
      btn_compare_text = 'ಹೋಲಿಸಲು ಸೇರಿಸಿ';
    }else if(url.includes('/hi/')){
      btn_account_text = 'तुलना करने के लिए खाता जोड़ें';
      btn_compare_text = 'तुलना में जोड़ें';
    }

    htm += '<div class="filter-list-row addCompareShowRow">';
    htm += '<div class="custom-filter-wrap no-arrows">';
    htm += '<div class="dropdown">';
    htm += '<button id="addCompareShow" class="btn dropdown-toggle active show" type="button" data-bs-toggle="dropdown" aria-expanded="true">+ '+btn_account_text+'</button>';  
    htm += ' <div class="dropdown-menu">';
    htm += ' <div class="filter-inner">';
    htm += ' <div class="filter-row">';
    htm += '<h5 class="heading16 filter-heads">Savings Accounts</h5>';
    htm += '<div class="filter-content-wrap" id= "left-accounts" >';

    htm += '</div>';
    htm += '</div>';
    htm += '</div>';
    htm += '<div class="filter-btn-wrap">';
    htm += '<button type="button" id ="add_more" class="btn btn-primary">'+btn_compare_text+'</button>';
    htm += '</div>';
    htm += '</div>';
    htm += '</div>';
    htm += '</div>';
    htm += '</div>';

   $("#lets-compare-account").html(htm);
    if(count_checkbox> 1){
      $('.jsCompareAccounts').removeClass('d-none');
     
    }
  

})

$(document).on('click' , '.compareBtn' ,function () {
    const params = [];
    $("#lets-compare-account .jsFliterListRow").each(function () {
        var id = $(this).data('id')
        if(id!=''){
          params.push(id);
        }
    })
  //  console.log(params);
  
    if(params.length){
      var trimmedArr = params.map(function(element) {
        if (typeof element === 'number') {
          // Convert to string, remove spaces, and convert back to number
          return parseFloat(element.toString().replace(/\s+/g, ''));
        }
        return element; // If it's not a number, leave it as is

      });
      

        var json_params = encodeURIComponent(trimmedArr);
       // console.log(json_params);
        //var query_params = +json_params; 

        //window.location.replace('lets-compare/'+json_params);
        var compare_url = $('.compare-card-wrap').data('url');
        if(compare_url){
          window.location.href = compare_url+json_params;
        }
    }
})


$(document).on('click' , '#addCompareShow' ,function () {
    $('.compareBtn').attr('disabled', true);
  var uncheckedCheckboxes = $('.lets_compare:not(:checked)');
  
     var uncheckedhtml = "";
    uncheckedCheckboxes.each(function() {
      var checkboxValue = $(this).val();
      var title = $(this).data("title");
      var data_id = $(this).data("id");

      uncheckedhtml += '<div class="filter-inner-col"><label class="custom-radiobox-label"><span class="custom-radio" data-value="'+title+'"  data-id="'+data_id+'"><input type="radio" name="savings-radio" class="radio_select_opt" value="" data-id="'+data_id+'"> <span class="radiobox-check"></span></span>'+title+'</label></div>';
      
    });
 
    $("#left-accounts").html(uncheckedhtml);

 
                                       

})








$(document).on('click' , '#add_more' ,function () {
 //var title = $('.custom-radio').attr('data-value');
 $('.compareBtn').attr('disabled', false);
 var dtid = $('.custom-radio').attr('data-id');
 var selectedRadioButton = $('input[name="savings-radio"]:checked');
 var sltValueId = selectedRadioButton.attr('data-id');
 var title = selectedRadioButton.parent('.custom-radio').attr('data-value');
 if(selectedRadioButton.length > 0){
 // console.log(sltValueId);
  $('#chk'+sltValueId).prop('checked', true);
  if($('.jsFliterListRow').length > 1){
      $('.addCompareShowRow').remove();
  }
  var htm ="";

  htm = '<div class="filter-list-row d-none d-md-block jsFliterListRow" data-id="'+sltValueId+'"><div class="filter-list-col"><p class="compare-list-text">'+title+'</p><p><button class="filter-close jsFilterClose"><span class="icon-close"></span></button></p></div></div>';
  
  if($('.addCompareShowRow').length>0){
      $("#lets-compare-account .addCompareShowRow").before(htm);
  }else{
      $("#lets-compare-account").append(htm);
 }

     var uncheckedCheckboxes = $('.lets_compare:not(:checked)');
     uncheckedCheckboxes.each(function() {
      var checkboxValue = $(this).val();
      var untitle = $(this).data("title");
      var data_id = $(this).data("id");

       //if(dtid==data_id){
       //}
    });

 }
   


})

$(document).on('click' , '.icon-close' ,function () {
  var checkedCheckboxes = $('.lets_compare:checked');
  var dataid = $(this).closest('.jsFliterListRow').data("id");
  $('#chk'+dataid).prop('checked', false);

  $(this).closest('.jsFliterListRow').remove();
  if(!($('#addCompareShow').length>0)){
      htm = '<div class="filter-list-row addCompareShowRow"><div class="custom-filter-wrap no-arrows"><div class="dropdown"><button id="addCompareShow" class="btn dropdown-toggle active show" type="button" data-bs-toggle="dropdown" aria-expanded="true">+ Add account to compare</button> <div class="dropdown-menu"> <div class="filter-inner"> <div class="filter-row"><h5 class="heading16 filter-heads">Savings Accounts</h5><div class="filter-content-wrap" id="left-accounts"></div></div></div><div class="filter-btn-wrap"><button type="button" id="add_more" class="btn btn-primary">Add to compare</button></div></div></div></div></div>';

      $("#lets-compare-account").append(htm);
  }
  if(($('.jsFliterListRow').length<2)){
      $('.compareBtn').attr('disabled', true);
  }

})


$(document).on('click' , '.jsClearBtn' ,function () {
  $('.lets_compare').prop('checked', false);

})



function callingslider(slider_class){

  const rewardSlider = {
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      ,
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

sliderFunc($(".jsRewardSlider"), rewardSlider);

}


$(document).on("click", '.filters-btns', function () {
  var active_class = $(this).data('class');
 // console.log('click');
  if(active_class=='__any__'){
      $('.reward-offer').removeClass('d-none');
      $('.reward-offer').addClass('s-show');
      $('.horizontal-nav-tabs').find('.active').removeClass('active');
      $(this).parent().addClass('active');
      //callingslider('jsRewardSlider');

  }else{
      $('.reward-offer').addClass('d-none');
     // $('.reward-offer').removeClass('banking-slider-row slick-slide slick-active');
      
      $('#btn__any__').parents('.jsFilterBtns').removeClass('active');

      $('.reward-offer').removeClass('s-show');
      $('.horizontal-nav-tabs .active').each(function (){
          var btn_class = $(this).find('button').data('class');
          //alert("btn_name="+btn_name);
          $('.'+btn_class).removeClass('d-none');
          //$('.'+btn_class).addClass('banking-slider-row slick-slide');
          $('.'+btn_class).addClass('s-show');
      })
      
    }
   

    $('.jsRewardSlider').slick('unslick');
     callingslider('jsRewardSlider');
    if(active_class !='__any__'){
     var countDots =  $('.s-show').length;
   //  console.log(countDots);
     var remainder = 1;
     if (!isNaN(countDots)) {
      // Get the remainder when dividing by 3
       remainder = countDots % 3;
   //  console.log('remainder-' + remainder);

     }

     if (countDots <= 3 ) {
     $('.slick-dots li:nth-last-child(-n+2)').css('display', 'none');  
     $(' .slick-dots').css('display', 'none');

     }else if(countDots <= 6 ){
     $(' .slick-dots li:last-child').css('display', 'none');

     }


    }
     
    //$('.jsRewardSlider').slick('setPosition');
    //$(".slick-slider").slick("refresh");
    //$('.reward-offer .d-none').remove();

      
})

$(document).ready(function() {
  $(".jsRequestCallBack").on("click", function() {
  $('.jsGetCallBackClose').addClass('GetCallbackSubmit');
  });

  $(".GetCallbackSubmit").on("click", function() {
       location.reload();
  });
});




$(document).on("click", '.bank-filter-closed', function () {
  var deactive_class = $(this).data('class');
  // $('.filters-btns[data-class="__any__"]').trigger('click');
  if(deactive_class=='__any__'){
      $('.reward-offer').addClass('d-none');
      $('.Dining').removeClass('d-none');
  }else{
      $('.'+deactive_class).addClass('d-none');
        // Check if any element with class 'jsFilterBtns' has an active class
        var anyActiveJsFilterBtns = $('.jsFilterBtns.active').length;
        if (anyActiveJsFilterBtns<1) {
            // Trigger the code when one element with 'jsFilterBtns' has an active class
            $('.filters-btns[data-class="__any__"]').trigger('click');
        }

        if(deactive_class !='__any__'){
          var countDots =  $('.s-show').length;
        //  console.log(countDots);
          var remainder = 1;
          if (!isNaN(countDots)) {
           // Get the remainder when dividing by 3
            remainder = countDots % 3;
         // console.log('remainder-' + remainder);
   
          }
   
          if (countDots <= 3 ) {
          $('.slick-dots li:nth-last-child(-n+2)').css('display', 'none');  
          $(' .slick-dots').css('display', 'none');
   
          }else if(countDots <= 6 ){
          $(' .slick-dots li:last-child').css('display', 'none');
   
          }
   
   
         }

  }
})
$('.jsTwoStepGoal').addClass('d-none');
 
$(document).ready(function() {
  $(".jsGetCallBackClose").on("click", function() {
      $('.form-floating .text-error').remove();
      $('.custom-select2 .text-error').remove();
      $('.form-floating').removeClass('textbox-error');
      $('.custom-select2').removeClass('textbox-error');
      $('.get_call_back_form_val').val('');
      

  });


});





$("form#views-exposed-form-business-banking-with-purpose-block-1").submit(function(e){
  e.preventDefault();
});

$("#edit-submit-business-banking-with-purpose").on("click", function (e) {
  var valueSelcted = $('#edit-field-business-i-am-target-id').val();
  var valueSelcted2 = $('#edit-field-business-i-need-target-id').val();
  if(valueSelcted == 'All' || valueSelcted == 'all' || valueSelcted2 == 'All'){

  }else{
    if ( $('.section-' + valueSelcted + valueSelcted2).length ) {
      $('.jsFirstSTepGoal').addClass('d-none');
      $('.jsTwoStepGoal').addClass('d-none');
      $('.section-' + valueSelcted + valueSelcted2).removeClass('d-none');    
      $(".slick-slider").slick("refresh");
    }
  }

});


 
$("form#views-exposed-form-banking-with-ease-view-block-3").submit(function(e){
  e.preventDefault();
});
 

$(document).ready(function() {
  // Use the .change() event handler to detect when the select element changes
  $("#edit-field-supercharge-category-target-id").change(function() {
    // Get the selected value using .val()
   
    var selectedValue = $(this).val();
      if(selectedValue == 'All' || selectedValue == 'all'){
         alert('please select any one');
  }else{
    if ( $('.section-' + selectedValue).length ) {
      $('.jsTwoStepGoal1').addClass('d-none');
      $('.section-' + selectedValue).removeClass('d-none');
       $(".no-record").remove();
      $(".slick-slider").slick("refresh");
    }else{
      $('.jsTwoStepGoal1').addClass('d-none');
      var htm = "<div style = 'text-align:center;' class = 'no-record'> No record Found</div>"; 
       $(".jsEaseSlider").append(htm);
       

      
    }
  }
    
   
  });
// Disable copy-paste
$('.no-copy-paste').on('copy paste', function(e) {
  e.preventDefault();
});

// Disable autocomplete
$('.no-autocomplete').attr('autocomplete', 'off');
//cookie accept/deny
function loadMauticScript() {
  (function (w, d, t, u, n, a, m) {
    w["MauticTrackingObject"] = n;
    (w[n] =
      w[n] ||
      function () {
        (w[n].q = w[n].q || []).push(arguments);
      }),
      (a = d.createElement(t)),
      (m = d.getElementsByTagName(t)[0]);
    a.async = 1;
    a.src = u;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://etms.ktkbank.in/marketing/mtc.js",
    "mt"
  );
  mt("send", "pageview");
}

var cookieAccepted = localStorage.getItem("cookieAccepted");


if(cookieAccepted){
  $('.cookies-box').css('display','none');
}
if (!cookieAccepted) {
  var cookieCompliance = $(".CookieAccept");
  if (cookieCompliance.length > 0) {
      cookieCompliance.on("click", function () {
      localStorage.setItem("cookieAccepted", "true");
      loadMauticScript();
      $('.cookies-box').css('display','none');
    });
  }
} 
else {
  var cookieDeny = $(".CookieDeny");
  if (cookieDeny.length > 0) {
      cookieDeny.on("click", function () {
      // loadMauticScript();
      $('.cookies-box').css('display','none');
    });
  }
}
});

var mauticDeviceId = localStorage.getItem("mautic_device_id");

if(mauticDeviceId){
var formdata = new FormData();
formdata.append("device_id", mauticDeviceId);

var requestOptions = {
method: 'POST',
body: formdata,
redirect: 'follow',
headers: {
  'Access-Control-Allow-Origin': '*',
},
};

fetch("https://etms.ktkbank.in/marketing/sendPageURL.php", requestOptions)
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.text();
})
.then(result => {
  // Display the API result in a popup
  //console.log("API Response:\n" + result);
})
.catch(error => {
  //console.log('Error:', error.message);
  // Display the error message in a popup
  // alert('Error: ' + error.message);
});
}
//   // Wait for the document to be ready
// $(document).ready(function () {
//   // Attach a submit handler to the Webform
//   $('#webform-submission-get-a-callback-node-3-add-form').submit(function () {
//       // Show the loader when the form is submitted
//       $('.page-loader').show();
//   });
// });



 
$(document).ready(function () {

     var currentURL = window.location.href;
     if (currentURL.indexOf("/search/node") !== -1) {
      // Remove <h2> tags
      $("h2").remove();
    }
    // Attach an input event handler to the search input
    $('.ui-autocomplete-input').on('input', function () {
      // Check if the input value is not empty
      if ($(this).val().trim() !== '') {
        // Hide the block
        $('.head-search-scroll').hide();
      } else {
        // Show the block if the input is empty
        $('.head-search-scroll').show();
      }
      $(document).click(function(event) {
        // Check if the click is outside the form or input fields
        /*if (!$(event.target).closest('#suggestion-block-form').length) {
            // Clear the values of input fields
            $('#edit-keys').val('');
        }*/
        if($('.header-bottom-right .search-field').hasClass('active') && !$(event.target).hasClass('ui-menu-item-wrapper')){
          $('#suggestion-block-form :input:not([type=hidden])').val('');
       }
    });


      
    });


      var iframe_id = '';
$(document).on(".IfRameIDButton", "click", function() {

        var iframe_id = $(this).data("id");
        var htmliframe = '<iframe src="https://www.youtube.com/embed/'+iframe_id+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' ;        
        $("#jsModalVideoUrl").html(htmliframe); 
 });

$('body').css('overflow', 'hidden');

$('.page-loader').show();

setTimeout(function () {
  $('.page-loader').hide();
  $('.main-content').show();

  $('body').css('overflow', 'auto');
}, 2000);

  });


 
  $('.JsPressRlesase input').addClass('btn btn-primary');
  $('.BranchLocation input').addClass('btn btn-primary jsShowBranchBtns');
Drupal.behaviors.myCustomBehavior = {
  attach: function (context, settings) {

 

    $('.jsPersonalAssistBtn').click(function () {
      $('.ajax-progress').addClass('d-none');
    });
    
    if(settings.ajaxTrustedUrl['/support/specialised-branches'] == true){
      // $('label[for="edit-field-branch-type-target-id"]').addClass('label-text');
      // $('select[name="field_branch_type_target_id"]').addClass('js-select');
      $('.custom-select2 label').addClass('label-text');


    }


    
$('#ui-id-1').appendTo('.JsListsuggestClass');
$('#ui-id-2').appendTo('#search-form .search-page-suggestion');


if(settings.ajaxTrustedUrl['/offer'] == true){
  $('.form-submit').addClass('btn btn-primary')
}

    var selectLength = $(".js-select").length;
    if (selectLength > 0) {
      $(".js-select").select2({
        placeholder: "Select",
        allowClear: false,
        minimumResultsForSearch: -1,
      });
    }
 

   $(context).ajaxStop(function () {
 

 
  });
  $('.webform-button--previous').addClass('d-none');
  $('.webform-button--next').addClass('btn btn-primary w-xs-100 Finacialstep');
  
  $(document).ready(function() {
    $(".Finacialstep").on("click", function() {
        $('.webform-button--previous').addClass('d-none');
    });
  
  
  });


  $(document).ready(function() {
    $(".jsContinueBtns").click(function() {
      var formData = $("#webform-submission-financial-detail-node-353-add-form").serialize();
     // console.log(formData);
      
      // You can send the serialized data to the server or process it as needed
    });
  });


  if ($("#edit-get-call-back-date").length > 0) {
    $('#edit-get-call-back-date').datetimepicker({
      dateFormat: 'yy-mm-dd',
    //   beforeShow:function(textbox, instance){
    //     $('.DivToAppendPicker').append($('#ui-datepicker-div'));
    // }
    });
  }  

  $('.JsCustomClass label').addClass('label-text');
  $('.JsCustomClass select').addClass('js-select');
  $('.career-job-location select').addClass('js-select');
  $('.career-job-location label').addClass('label-text');
  $('.career-job-depart select').addClass('js-select');
  $('.career-job-depart label').addClass('label-text');
  $('.career-submit-btn input').addClass('btn btn-primary');
  $('.career-job-role input').addClass('form-control');
  $('.captcha__description').addClass('d-none');
  $('.Customjsbtn input').addClass('btn btn-primary');
  $('.CustomjsClass input').addClass('form-control');
  $('.placeholder14 label').remove();
  $('.customsearchclass label').addClass('label-text');
  $('.customsearchclass select').addClass('js-select');
  $('.customsearchclass input').addClass('form-control');
  $('.customsearchbtn input').addClass('btn btn-primary');
// $('.view-empty').addClass('d-none');
  $('.customshare').addClass('d-none');
  $('.interviewResult').addClass('d-none');
  var label_job_role = '';
  if($('#views-exposed-form-explore-job-positions-block-1 .career-job-role label').length > 0){
      label_job_role = $('#views-exposed-form-explore-job-positions-block-1 .career-job-role label').text();
      $('#views-exposed-form-explore-job-positions-block-1 .career-job-role label').remove();
      $('#views-exposed-form-explore-job-positions-block-1 .career-job-role input').after('<label for="edit-title">'+label_job_role+'</label>');
  }

$('.custominterview input').addClass('form-control');
$('.custominterviewbtn input').addClass('btn btn-primary');
$('.newslettercustom input').addClass('btn btn-primary');
$('.datefieldclass input').attr('id', 'getDateTime');
//$('.datefieldclass input').addClass('hasDatepicker');
$('.career-submit-btn input').removeClass('form-control');
 $('.CustomPosition').append('<span class="icon-search search"></span>');
 $('.CustomPosition input').removeClass('form-autocomplete');

 


 $(document).ready(function() {
  $(".jsBackToSearchclass").on("click", function() {
      $('.customlocateusclass').addClass('d-none');
      $('.jsContactUsFiled').removeClass('d-none');
  });


  $(".mycustomjsclass").on("click", function() {
    $('.customyourclass').addClass('d-none');
    $('.jsFirstSTepGoal').removeClass('d-none');
});
  
});


if($('.view-explore-job-positions .banking-slider .banking-slider-row').length>0){
      $('.view-explore-job-positions .banking-slider .banking-slider-row').slice(6).hide();
  }
$('.customauction label').addClass('label-text');
$('.customnrisection label').addClass('label-text');
$('.customnrisection select').addClass('form-control');
$('.customauction select').addClass('js-select');

// $('.customapplycta select').addClass('js-select');
// //$('.select-wrapper--level-1 select').addClass('js-select');
// $('.customapplycta input').addClass('btn btn-primary');
 $('.customnrisection label').addClass('label-text');
//  $('.select2-container--default').addClass('d-none');
$('.customapplycta input').addClass('btn btn-primary');
$('.customlocatus input').addClass('btn btn-primary');
$('.customlocateusclass').addClass('d-none');

$(document).ready(function() {
  $(".jsShowFirstStep").click(function() {
  $('.customjsclass').removeClass('d-none');
  $('.jsTwoStepGoal').addClass('d-none');
  $('.jsFirstSTepGoal').removeClass('d-none');
  });

  var currentPageUrl = window.location.href;
  if (currentPageUrl.includes('/support/locate-us') ){
  $('.select-wrapper--level-0').prepend('<label class="label-text">State</label>');
  $('.select-wrapper--level-1').prepend('<label class="label-text">City</label>');
  $('.select-wrapper--level-0 , .select-wrapper--level-1').addClass('custom-ui-select');

  }else if (currentPageUrl.includes('/support/specialised-branches') ){
    $('.select-wrapper--level-0').prepend('<label class="label-text">State</label>');
    $('.select-wrapper--level-1').prepend('<label class="label-text">City</label>');
    $('.select-wrapper--level-0 , .select-wrapper--level-1').addClass('custom-ui-select');

    }
    
    else if (currentPageUrl.includes('/support/key-office') ){
      $('.select-wrapper--level-0').prepend('<label class="label-text">State</label>');
      $('.select-wrapper--level-1').prepend('<label class="label-text">City</label>');
      $('.select-wrapper--level-0 , .select-wrapper--level-1').addClass('custom-ui-select');
  
      }
      else{
  $('.select-wrapper--level-0').prepend('<label class="label-text">I am a</label>');
  $('.select-wrapper--level-1').prepend('<label class="label-text">I want to</label>');
  $('.select-wrapper--level-0 , .select-wrapper--level-1').addClass('custom-ui-select');
  
  }


});
$(document).ready(function() {
  $("#edit-field-finacial-date-value").change(function () {

    var selected_date = $("#edit-field-finacial-date-value option:selected").text();
    $('.shareholdingcustom').addClass('d-none');
    $('.custom-'+selected_date).removeClass('d-none');
   if(selected_date == '- Any -'){
    $('.shareholdingcustom').removeClass('d-none');
   }

  })
  
});



$(document).ready(function () {

//   $('#views-exposed-form-unclaimed-deposits-block-1 .form-submit').click(function (event) {
//     var title = $('#views-exposed-form-unclaimed-deposits-block-1 input[name="customer_name"]').val();
//     var captcha = $('#views-exposed-form-unclaimed-deposits-block-1 input[name="captcha_response"]').val();
//     var check_letter = /^[a-zA-Z ]*$/;
//     var form_validation = true;
//     event.preventDefault();
//     $('#views-exposed-form-unclaimed-deposits-block-1 .text-error').text('');
//     if(title==''){
//         $('.customer-title-error').text('Please enter customer name!');
//         return false;
//     }else if(!check_letter.test(title)){
//         $('.customer-title-error').text('Please enter valid customer name!');
//         return false;

//     }
    
//     if(captcha==''){
//         $('.captcha-error').text('Please enter captcha!');
//         return false;
//     }
    
//     // //console.log("clicked-here--");customer-title-error
//     // if(form_validation){
//     //     $("#views-exposed-form-unclaimed-deposits-block-1").submit();
//     // }
//     console.log(form_validation);
//     return form_validation;
// });



    //select first fy in dropdown on page load on IR pages
    if($("#edit-field-finacial-date-value").length>0){
        var default_fy = $("#edit-field-finacial-date-value option:eq(1)").text();
        var default_fy_val = $("#edit-field-finacial-date-value option:eq(1)").val();
        $('#edit-field-finacial-date-value').select2('val', default_fy_val);
        show_ir_posts(default_fy);
    }

    // Attach change event handler to the fy year dropdown on IR pages
    $("#edit-field-finacial-date-value").change(function () {
        var selected_date = $("#edit-field-finacial-date-value option:selected").text();
        show_ir_posts(selected_date);
        
    });
    
    function show_ir_posts(selected_date){
        $('.record-empty').remove();
        $('.mycustomcorprateclass').addClass('d-none');
        $('.mycustomclasscorprate').removeClass('d-none');
        if(selected_date=='- Any -'){
            $('.mycustomclasscorprate').removeClass('d-none');
            $('.mycustomcorprateclass').removeClass('d-none');
            return false;
        }

        $('.mycustomcorprateclass').each(function (){
           var pdf_date = $(this).data('year');
           if(selected_date==pdf_date){
                $(this).removeClass('d-none');
           }
        })
        
        var no_record = 0;
        $('.mycustomclasscorprate').each(function (){
            
              var show_accordian = false;
            $(this).find('.mycustomcorprateclass').each(function (){
              if ( !$(this).hasClass('d-none')){ 
                 show_accordian = true;
                 no_record++;

              } 
              
            })
            
            if(show_accordian){
              $(this).removeClass('d-none');
            }else{
                $(this).addClass('d-none');
            }

        });

        if(no_record===0){
            var no_record_html = `<div class="view-empty record-empty">
                        <div class="account-not-found">
                                <div class="not-found-inner">
                                  <h4 class="medium"><span class="icon-search-zoom"></span> No matching accounts found</h4>
                                  <p>Consider revisiting your filters. Sometimes, a slight tweak can make a big difference. If you need personalized assistance or have specific criteria in mind, feel free to Contact us</p>
                                </div>
                              </div>
                      </div>`;
            var currentUrl = window.location.href;
            if(currentUrl.includes('/investors/corporate-announcements')){
              $('.js-accordionTab').append(no_record_html);
            }
           
        }
    }
});
      //$("#childSelect option[value=41]").hide();
      $(document).on('change', '#parentSelect', function(){
        var parent_id = $(this).val();
        $('.card-row').hide();
        $("#childSelect").val($("#childSelect option:first").val());
        $("#childSelect > option").each(function() {
            var dataid = $(this).data('id');
            if(dataid && dataid!=''){
                if(parent_id==dataid){
                    $(this).show();
                }else{
                   $(this).hide(); 
                }
                
                
            }
        });
    })
    
    $(document).on('change', '#childSelect', function(){
        $('.card-row').hide();
        var child_id = $(this).val();
        var parent_id = $("#parentSelect").val();
        if($("#card-wrapp").find('[data-parent='+parent_id+']') && $("#card-wrapp").find('[data-child='+child_id+']')){
            $('.card-row[data-parent="' + parent_id + '"][data-child="'+child_id+'"]').show();
        }
    })




  $(document).ajaxComplete(function (event, xhr, settings) {
    // Check if the AJAX event is related to your form or button.
    if (settings.extraData && settings.extraData.form_id === 'views-exposed-form-products-view-block-1') {
      // Add the class to the button.
      
      $('#edit-submit-products-view ').addClass('btn btn-primary');
    }
     
      if (settings.extraData.view_name == 'media_center' && settings.extraData.view_display_id == 'block_4'   ){
        // $('#edit-submit-media-center').addClass('btn btn-primary');
        $('.JsPressRlesase input').addClass('btn btn-primary');
      }

      if (settings.extraData.view_name == 'media_center' && settings.extraData.view_display_id == 'block_5' ){
        // $('#edit-submit-media-center').addClass('btn btn-primary');
        $('.JsPressRlesase input').addClass('btn btn-primary');
      }

      if (settings.extraData.view_name == 'management_communique' && settings.extraData.view_display_id == 'block_1' ){
        // $('#edit-submit-media-center').addClass('btn btn-primary');
        $('.JsPressRlesase input').addClass('btn btn-primary');
      }

      if (settings.extraData.view_name == 'choose_your_accounty' && settings.extraData.view_display_id == 'block_1' ){
        // $('#edit-submit-media-center').addClass('btn btn-primary');
        $('.JsPressRlesase input').addClass('btn btn-primary');
      }
      if (settings.extraData.view_name == 'choose_your_accounty' && settings.extraData.view_display_id == 'block_2' ){
        // $('#edit-submit-media-center').addClass('btn btn-primary');
        $('.JsPressRlesase input').addClass('btn btn-primary');
      }
      if (settings.extraData.view_name == 'blog' && settings.extraData.view_display_id == 'block_3' ){
        // $('#edit-submit-media-center').addClass('btn btn-primary');
        $('.JsPressRlesase input').addClass('btn btn-primary'); 
        
      }

      if (settings.extraData.view_name == 'cards' && settings.extraData.view_display_id == 'block_3' ){
        // $('#edit-submit-media-center').addClass('btn btn-primary');
        $('.JsPressRlesase input').addClass('btn btn-primary');
      }

      if (settings.extraData.view_name == 'banking_with_ease_view' && settings.extraData.view_display_id == 'block_3' ){
         
        $('.agribankingjsclass select').addClass('js-select');
        var selectLength = $(".js-select").length;
        if (selectLength > 0) {
          $(".js-select").select2({
            placeholder: "Select",
            allowClear: false,
            minimumResultsForSearch: -1,
          });
      }

      $('.jsEaseSlider').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
          ,
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });
      }


      if (settings.extraData.view_name == 'interview_call_form' && settings.extraData.view_display_id == 'block_1' ){
         $('.custominterview input').addClass('form-control');
         $('.custominterviewbtn input').addClass('btn btn-primary');
         if ($("#getDateTime").length > 0) {
          // $('#getDateTime').datepicker({}); 
          $( function() {
            $( "#getDateTime" ).datepicker();
          } );   
        }  
         $('.datefieldclass input').attr('id', 'getDateTime');
        // $('.datefieldclass input').addClass('hasDatepicker');
         $('.customclass').removeClass('d-none');
         var sourceHtml = $('.view-content').html();
          
         $('.interview-result').html(sourceHtml);
          

         
      }

      

      if (settings.extraData.view_name == 'annual_reports_view' && settings.extraData.view_display_id == 'block_2' ){
        // $('#edit-submit-media-center').addClass('btn btn-primary');
        $('.JsCustomClass select').addClass('js-select');
        var selectLength = $(".js-select").length;
        if (selectLength > 0) {
          $(".js-select").select2({
            placeholder: "Select",
            allowClear: false,
            minimumResultsForSearch: -1,
          });
      }
    }

    if ((settings.extraData.view_name == 'auction_notices_view') && (settings.extraData.view_display_id == 'block_1' || settings.extraData.view_display_id == 'block_3' )){
      $('.customauction label').addClass('label-text');
      $('.customauction select').addClass('js-select');
      var selectLength = $(".js-select").length;
      if (selectLength > 0) {
        $(".js-select").select2({
          placeholder: "Select",
          allowClear: false,
          minimumResultsForSearch: -1,
        });
    }
  }


    if (settings.extraData.view_name == 'corporate_announcements' && settings.extraData.view_display_id == 'block_1' ){
      // $('#edit-submit-media-center').addClass('btn btn-primary');
      $('.JsCustomClass select').addClass('js-select');
      //$('.accordiancustom')
      //$(".accordiancustom").css("display", "block");
      var selectLength = $(".js-select").length;
      if (selectLength > 0) {
        $(".js-select").select2({
          placeholder: "Select",
          allowClear: false,
          minimumResultsForSearch: -1,
        });
    }


            /*custom acoordian scroll top*/
      var accordion = (function () {

        var $accordion = $('.js-accordion');
        var $accordion_header = $accordion.find('.js-accordion-headers');
        var $accordion_item = $('.js-accordion-item');

        // default settings 
        var settings = {
          // animation speed
          speed: 400,

          // close all other accordion items if true
          oneOpen: false
        };

        if ($(window).width() > 991) {
          var HeaderHeights = 72;
        } else {
          var HeaderHeights = 58;
        }

        return {
          // pass configurable object literal
          init: function ($settings) {
            $accordion_header.on('click', function () {
              accordion.toggle($(this));

              setTimeout(() => {
                $('body, html').animate({
                  scrollTop: $(this).offset().top - (HeaderHeights + 15)
                }, 100)
              }, 400)
            });

            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
              $('.js-accordion-item.active:not(:first)').removeClass('active');
            }

            // reveal the active accordion bodies
            $('.js-accordion-item.active').find('> .js-accordion-bodies').show();
          },
          toggle: function ($this) {

            if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-headers')[0]) {
              $this.closest('.js-accordion').find('> .js-accordion-item').removeClass('active').find('.js-accordion-bodies').slideUp()
            }

            // show/hide the clicked accordion item
            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
          }
        }
      })();

      /*custom acoordian scroll top*/
      var accordionTab = (function () {

        var $accordion = $('.js-accordionTab');
        var $accordion_header = $accordion.find('.js-accordionTab-headers');
        var $accordion_item = $('.js-accordionTab-item');

        // default settings 
        var settings = {
          // animation speed
          speed: 400,

          // close all other accordion items if true
          oneOpen: false
        };

        if ($(window).width() > 991) {
          var HeaderHeights = 72;
        } else {
          var HeaderHeights = 120;
        }

        return {
          // pass configurable object literal
          init: function ($settings) {
            $accordion_header.on('click', function () {
              accordionTab.toggle($(this));

              setTimeout(() => {
                $('body, html').animate({
                  scrollTop: $(this).offset().top - (HeaderHeights + 15)
                }, 100)
              }, 400)
            });

            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.js-accordionTab-item.active').length > 1) {
              $('.js-accordionTab-item.active:not(:first)').removeClass('active');
            }

            // reveal the active accordion bodies
            $('.js-accordionTab-item.active').find('> .js-accordionTab-bodies').show();
          },
          toggle: function ($this) {

            if (settings.oneOpen && $this[0] != $this.closest('.js-accordionTab').find('> .js-accordionTab-item.active > .js-accordionTab-headers')[0]) {
              $this.closest('.js-accordionTab').find('> .js-accordionTab-item').removeClass('active').find('.js-accordionTab-bodies').slideUp()
            }

            // show/hide the clicked accordion item
            $this.closest('.js-accordionTab-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
          }
        }
      })();

      $(document).ready(function () {
        accordion.init({ speed: 300, oneOpen: true });
        accordionTab.init({ speed: 300, oneOpen: true });
        $('.js-accordion>.js-accordion-item>.js-accordion-headers').click(function () {
          $(this).siblings('.js-accordion-bodies').find('.js-accordion-item').removeClass('active');
        })
        $('.js-accordionTab>.js-accordionTab-item>.js-accordionTab-headers').click(function () {
          $(this).siblings('.js-accordionTab-bodies').find('.js-accordionTab-item').removeClass('active');
        })
      });

  }

    if (settings.extraData.view_name == 'quarterly_results_view' && settings.extraData.view_display_id == 'block_2' ){
      // $('#edit-submit-media-center').addClass('btn btn-primary');
      $('.JsCustomClass select').addClass('js-select');
      var selectLength = $(".js-select").length;
      if (selectLength > 0) {
        $(".js-select").select2({
          placeholder: "Select",
          allowClear: false,
          minimumResultsForSearch: -1,
        });
    }
  }


  if (settings.extraData.view_name == 'regulatory_disclosures' && settings.extraData.view_display_id == 'block_1' ){
    // $('#edit-submit-media-center').addClass('btn btn-primary');
    $('.JsCustomClass select').addClass('js-select');
    var selectLength = $(".js-select").length;
    if (selectLength > 0) {
      $(".js-select").select2({
        placeholder: "Select",
        allowClear: false,
        minimumResultsForSearch: -1,
      });
  }

  /*custom acoordian scroll top*/
var accordion = (function () {

var $accordion = $('.js-accordion');
var $accordion_header = $accordion.find('.js-accordion-headers');
var $accordion_item = $('.js-accordion-item');

// default settings 
var settings = {
  // animation speed
  speed: 400,

  // close all other accordion items if true
  oneOpen: false
};

if ($(window).width() > 991) {
  var HeaderHeights = 72;
} else {
  var HeaderHeights = 58;
}

return {
  // pass configurable object literal
  init: function ($settings) {
    $accordion_header.on('click', function () {
      accordion.toggle($(this));

      setTimeout(() => {
        $('body, html').animate({
          scrollTop: $(this).offset().top - (HeaderHeights + 15)
        }, 100)
      }, 400)
    });

    $.extend(settings, $settings);

    // ensure only one accordion is active if oneOpen is true
    if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
      $('.js-accordion-item.active:not(:first)').removeClass('active');
    }

    // reveal the active accordion bodies
    $('.js-accordion-item.active').find('> .js-accordion-bodies').show();
  },
  toggle: function ($this) {

    if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-headers')[0]) {
      $this.closest('.js-accordion').find('> .js-accordion-item').removeClass('active').find('.js-accordion-bodies').slideUp()
    }

    // show/hide the clicked accordion item
    $this.closest('.js-accordion-item').toggleClass('active');
    $this.next().stop().slideToggle(settings.speed);
  }
}
})();

/*custom acoordian scroll top*/
var accordionTab = (function () {

var $accordion = $('.js-accordionTab');
var $accordion_header = $accordion.find('.js-accordionTab-headers');
var $accordion_item = $('.js-accordionTab-item');

// default settings 
var settings = {
  // animation speed
  speed: 400,

  // close all other accordion items if true
  oneOpen: false
};

if ($(window).width() > 991) {
  var HeaderHeights = 72;
} else {
  var HeaderHeights = 120;
}

return {
  // pass configurable object literal
  init: function ($settings) {
    $accordion_header.on('click', function () {
      accordionTab.toggle($(this));

      setTimeout(() => {
        $('body, html').animate({
          scrollTop: $(this).offset().top - (HeaderHeights + 15)
        }, 100)
      }, 400)
    });

    $.extend(settings, $settings);

    // ensure only one accordion is active if oneOpen is true
    if (settings.oneOpen && $('.js-accordionTab-item.active').length > 1) {
      $('.js-accordionTab-item.active:not(:first)').removeClass('active');
    }

    // reveal the active accordion bodies
    $('.js-accordionTab-item.active').find('> .js-accordionTab-bodies').show();
  },
  toggle: function ($this) {

    if (settings.oneOpen && $this[0] != $this.closest('.js-accordionTab').find('> .js-accordionTab-item.active > .js-accordionTab-headers')[0]) {
      $this.closest('.js-accordionTab').find('> .js-accordionTab-item').removeClass('active').find('.js-accordionTab-bodies').slideUp()
    }

    // show/hide the clicked accordion item
    $this.closest('.js-accordionTab-item').toggleClass('active');
    $this.next().stop().slideToggle(settings.speed);
  }
}
})();

$(document).ready(function () {
accordion.init({ speed: 300, oneOpen: true });
accordionTab.init({ speed: 300, oneOpen: true });
$('.js-accordion>.js-accordion-item>.js-accordion-headers').click(function () {
  $(this).siblings('.js-accordion-bodies').find('.js-accordion-item').removeClass('active');
})
$('.js-accordionTab>.js-accordionTab-item>.js-accordionTab-headers').click(function () {
  $(this).siblings('.js-accordionTab-bodies').find('.js-accordionTab-item').removeClass('active');
})
});

}

if (settings.extraData.view_name == 'submission_under_regulation' && settings.extraData.view_display_id == 'block_1' ){
  // $('#edit-submit-media-center').addClass('btn btn-primary');
    $('.js-accordionTab-bodies').removeAttr('style');
    $('.view-submission-under-regulation').addClass('ajax-enabled');
    $('.view-submission-under-regulation .js-accordionTab-bodies').css('display','block');
    $('.view-submission-under-regulation .js-accordionTab-item').addClass('active');
  $('.JsCustomClass select').addClass('js-select');
  var selectLength = $(".js-select").length;
  if (selectLength > 0) {
    $(".js-select").select2({
      placeholder: "Select",
      allowClear: false,
      minimumResultsForSearch: -1,
    });
}
/*custom acoordian scroll top*/
var accordion = (function () {

var $accordion = $('.js-accordion');
var $accordion_header = $accordion.find('.js-accordion-headers');
var $accordion_item = $('.js-accordion-item');

// default settings 
var settings = {
  // animation speed
  speed: 400,

  // close all other accordion items if true
  oneOpen: false
};

if ($(window).width() > 991) {
  var HeaderHeights = 72;
} else {
  var HeaderHeights = 58;
}

return {
  // pass configurable object literal
  init: function ($settings) {
    $accordion_header.on('click', function () {
      accordion.toggle($(this));

      setTimeout(() => {
        $('body, html').animate({
          scrollTop: $(this).offset().top - (HeaderHeights + 15)
        }, 100)
      }, 400)
    });

    $.extend(settings, $settings);

    // ensure only one accordion is active if oneOpen is true
    if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
      $('.js-accordion-item.active:not(:first)').removeClass('active');
    }

    // reveal the active accordion bodies
    $('.js-accordion-item.active').find('> .js-accordion-bodies').show();
  },
  toggle: function ($this) {

    if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-headers')[0]) {
      $this.closest('.js-accordion').find('> .js-accordion-item').removeClass('active').find('.js-accordion-bodies').slideUp()
    }

    // show/hide the clicked accordion item
    $this.closest('.js-accordion-item').toggleClass('active');
    $this.next().stop().slideToggle(settings.speed);
  }
}
})();

/*custom acoordian scroll top*/
var accordionTab = (function () {

var $accordion = $('.js-accordionTab');
var $accordion_header = $accordion.find('.js-accordionTab-headers');
var $accordion_item = $('.js-accordionTab-item');

// default settings 
var settings = {
  // animation speed
  speed: 400,

  // close all other accordion items if true
  oneOpen: false
};

if ($(window).width() > 991) {
  var HeaderHeights = 72;
} else {
  var HeaderHeights = 120;
}

return {
  // pass configurable object literal
  init: function ($settings) {
    $accordion_header.on('click', function () {
      accordionTab.toggle($(this));

      setTimeout(() => {
        $('body, html').animate({
          scrollTop: $(this).offset().top - (HeaderHeights + 15)
        }, 100)
      }, 400)
    });

    $.extend(settings, $settings);

    // ensure only one accordion is active if oneOpen is true
    if (settings.oneOpen && $('.js-accordionTab-item.active').length > 1) {
      $('.js-accordionTab-item.active:not(:first)').removeClass('active');
    }

    // reveal the active accordion bodies
    $('.js-accordionTab-item.active').find('> .js-accordionTab-bodies').show();
  },
  toggle: function ($this) {

    if (settings.oneOpen && $this[0] != $this.closest('.js-accordionTab').find('> .js-accordionTab-item.active > .js-accordionTab-headers')[0]) {
      $this.closest('.js-accordionTab').find('> .js-accordionTab-item').removeClass('active').find('.js-accordionTab-bodies').slideUp()
    }

    // show/hide the clicked accordion item
    $this.closest('.js-accordionTab-item').toggleClass('active');
    $this.next().stop().slideToggle(settings.speed);
  }
}
})();

$(document).ready(function () {
accordion.init({ speed: 300, oneOpen: true });
accordionTab.init({ speed: 300, oneOpen: true });
$('.js-accordion>.js-accordion-item>.js-accordion-headers').click(function () {
  $(this).siblings('.js-accordion-bodies').find('.js-accordion-item').removeClass('active');
})
$('.js-accordionTab>.js-accordionTab-item>.js-accordionTab-headers').click(function () {
  $(this).siblings('.js-accordionTab-bodies').find('.js-accordionTab-item').removeClass('active');
})
});

}

if (settings.extraData.view_name == 'unclaimed_deposits' && settings.extraData.view_display_id == 'block_1' ){


 
$('.placeholder14 label').remove();
$('.view-content').addClass('d-none');
$('.captcha__description').addClass('d-none');
$('.Customjsbtn input').addClass('btn btn-primary');
 $('.placeholder14 input').addClass('form-control');
 $('.customclass').removeClass('d-none');
 var sourceHtml = $('.view-content').html();
  
 $('.unclaimed-result').html(sourceHtml);
  
  // if (settings.data == null){
  //   $('.unclaimed-result').html('<p class="text-center">No record Found</p>')
  // }
  
}


if (settings.extraData.view_name == 'share_search_view' && settings.extraData.view_display_id == 'block_1' ){

var selectLength = $(".js-select").length;
if (selectLength > 0) {
  $(".js-select").select2({
    placeholder: "Select",
    allowClear: false,
    minimumResultsForSearch: -1,
  });
}
/*custom acoordian scroll top*/



$('.customsearchclass label').addClass('label-text');
$('.customsearchclass select').addClass('js-select');
$('.customauction select').addClass('js-select');
$('.customsearchclass input').addClass('form-control');
$('.CustomjsClass label').remove();
$('.customsearchbtn input').addClass('btn btn-primary');

$('.view-content').addClass('d-none');
$('.view-empty').removeClass('d-none');

var sourceHtml = $('.view-content').html();
var empty = $('.view-emptyt').html();
  $('.unpaircustomClass').removeClass('d-none');
$('.share-search').html(sourceHtml);
// $('.share-search').html(empty);
// $('.dividend-refund-search').html(empty);
  

}

if (settings.extraData.view_name == 'unpaid_unclaimed_form' && settings.extraData.view_display_id == 'block_1' ){



var selectLength = $(".js-select").length;
if (selectLength > 0) {
  $(".js-select").select2({
    placeholder: "Select",
    allowClear: false,
    minimumResultsForSearch: -1,
  });
}
$('.customsearchclass label').addClass('label-text');
$('.customsearchclass select').addClass('js-select');
$('.customsearchclass input').addClass('form-control');
$('.CustomjsClass label').remove();
$('.customsearchbtn input').addClass('btn btn-primary');
$('.view-content').addClass('d-none');
//$('.view-empty').addClass('d-none');

var sourceHtml = $('.view-content').html();
var empty = $('.view-emptyt').html();
  $('.unpaircustomClass').removeClass('d-none');
$('.dividend-refund-search').html(sourceHtml);
// $('.dividend-refund-search').html(empty);
  

}


if (settings.extraData.view_name == 'half_yearly_statements' && settings.extraData.view_display_id == 'block_1' ){
// $('#edit-submit-media-center').addClass('btn btn-primary');
$('.js-accordionTab-bodies').removeAttr('style');
$('.view-half-yearly-statements').addClass('ajax-enabled');
$('.view-half-yearly-statements .js-accordionTab-bodies').css('display','block');
$('.view-half-yearly-statements .js-accordionTab-item').addClass('active');

$('.JsCustomClass select').addClass('js-select');
var selectLength = $(".js-select").length;
if (selectLength > 0) {
  $(".js-select").select2({
    placeholder: "Select",
    allowClear: false,
    minimumResultsForSearch: -1,
  });
}


$(document).ready(function () {
accordion.init({ speed: 300, oneOpen: true });
accordionTab.init({ speed: 300, oneOpen: true });
$('.js-accordion>.js-accordion-item>.js-accordion-headers').click(function () {
  $(this).siblings('.js-accordion-bodies').find('.js-accordion-item').removeClass('active');
})
$('.js-accordionTab>.js-accordionTab-item>.js-accordionTab-headers').click(function () {
  $(this).siblings('.js-accordionTab-bodies').find('.js-accordionTab-item').removeClass('active');
})
});

}


if (settings.extraData.view_name == 'your_goals_our_priority_view' && settings.extraData.view_display_id == 'block_1' ){
// $('#edit-submit-media-center').addClass('btn btn-primary');
$('.custom-ui-select select').addClass('form-control'); 
$('.custom-ui-select select').removeClass('form-select'); 
$('.purpose-left input').addClass('btn btn-primary');
$('.jsFirstSTepGoal').addClass('d-none');
$('.jsTwoStepGoal').removeClass('d-none');
$('.jsEaseSlider3').slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
});
var selectLength = $(".js-select").length;
if (selectLength > 0) {
  $(".js-select").select2({
    placeholder: "Select",
    allowClear: false,
    minimumResultsForSearch: -1,
  });
}
}

if (settings.extraData.view_name == 'manage_your_money' && settings.extraData.view_display_id == 'block_1' ){
// $('#edit-submit-media-center').addClass('btn btn-primary');
 $('.customapplycta input').addClass('btn btn-primary');
 $('.customjsclass').addClass('d-none');
 $('.jsTwoStepGoal').removeClass('d-none');

 $('.jsEaseSlider3').slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
});
// $(".slick-slider").slick("refresh");    




 
}

if (settings.extraData.view_name == 'business_banking_with_purpose' && settings.extraData.view_display_id == 'block_2' ){
// $('#edit-submit-media-center').addClass('btn btn-primary');
 $('.customapplycta input').addClass('btn btn-primary');
 $('.customjsclass').addClass('d-none');
 $('.jsTwoStepGoal').removeClass('d-none');

 $('.jsEaseSlider3').slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    ,
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
});
// $(".slick-slider").slick("refresh");    




 
}

if (settings.extraData.view_name == 'bills_and_recharge_view' && settings.extraData.view_display_id == 'block_1' ){
  $('.jsBillKindsSlider').slick({
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: "50px"
          },
        },
        {
          breakpoint: 576,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: "50px"
          },
        },
        {
          breakpoint: 359,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: "26px"
          },
        },
      ],
    });

 
}



if (settings.extraData.view_name == 'explore_job_positions' && settings.extraData.view_display_id == 'block_1' ){
    // $('#edit-submit-media-center').addClass('btn btn-primary');
    $('.career-job-location select').addClass('js-select');
    $('.career-job-location label').addClass('label-text');
    $('.career-job-depart select').addClass('js-select');
    $('.career-job-depart label').addClass('label-text');
    $('.career-submit-btn input').addClass('btn btn-primary');
    $('.career-submit-btn input').removeClass('form-control');
    $('.career-job-role input').addClass('form-control');
    $('.career-submit-btn input').removeClass('form-control');
    $('.CustomPosition').append('<span class="icon-search search"></span>');
    $('.CustomPosition input').removeClass('form-autocomplete');
    $('.view-id-explore_job_positions .view-empty').show();
    $('#views-exposed-form-explore-job-positions-block-1 .career-job-role label').remove();
    $('#views-exposed-form-explore-job-positions-block-1 .career-job-role input').after('<label for="edit-title">'+label_job_role+'</label>');
    var selectLength = $(".js-select").length;
    if (selectLength > 0) {
      $(".js-select").select2({
        placeholder: "Select",
        allowClear: false,
        minimumResultsForSearch: -1,
      });
    }
    if($('.view-explore-job-positions .banking-slider .banking-slider-row').length>0){
          $('.view-explore-job-positions .banking-slider .banking-slider-row').slice(6).hide();
      }
}
if (settings.extraData.view_name == 'explore_job_positions' && settings.extraData.view_display_id == 'block_2' ){
  // $('#edit-submit-media-center').addClass('btn btn-primary');
  $('.career-job-location select').addClass('js-select');
  $('.career-job-location label').addClass('label-text');
  $('.career-job-depart select').addClass('js-select');
  $('.career-job-depart label').addClass('label-text');
  $('.career-submit-btn input').addClass('btn btn-primary');
  $('.career-submit-btn input').removeClass('form-control');
  $('.career-job-role input').addClass('form-control');
  $('.career-submit-btn input').removeClass('form-control');
  $('.CustomPosition').append('<span class="icon-search search"></span>');
  $('.CustomPosition input').removeClass('form-autocomplete');
  $('.view-id-explore_job_positions .view-empty').show();
  //$('#ui-id-3').appendTo('.search-result-job-position');
  var selectLength = $(".js-select").length;
  if (selectLength > 0) {
    $(".js-select").select2({
      placeholder: "Select",
      allowClear: false,
      minimumResultsForSearch: -1,
    });
}
}


      if (settings.extraData.view_name == 'branch_locations' && settings.extraData.view_display_id == 'block_1' ){
         
        $('.ForSelect select').addClass('js-select');
        $('.ForSelect label').addClass('label-text');

        var selectLength = $(".js-select").length;
        if (selectLength > 0) {
          $(".js-select").select2({
            placeholder: "Select",
            allowClear: false,
            minimumResultsForSearch: -1,
          });
        }
        $('.BranchLocation input').addClass('btn btn-primary jsShowBranchBtns');
        $('.jsContactUsFiled').addClass('d-none');
        $('.jsSearchResult').removeClass('d-none');
        $('.customlocateusclass').removeClass('d-none');
        
        $('.jsBackToSearch').click(function(){
          $('.jsContactUsFiled').removeClass('d-none');
          $('.jsSearchResult').addClass('d-none');

     
        })
      }


      if (settings.extraData.view_name == 'locate_us' && settings.extraData.view_display_id == 'block_1' ){
         


        //$('.BranchLocation input').addClass('btn btn-primary jsShowBranchBtns');
        $('.jsContactUsFiled').addClass('d-none');
        $('.jsSearchResult').removeClass('d-none');
        $('.customlocateusclass').removeClass('d-none');
        
        $('.jsBackToSearch').click(function(){
          $('.jsContactUsFiled').removeClass('d-none');
          $('.jsSearchResult').addClass('d-none');

     
        })
      }

      if (settings.extraData.view_name == 'branch_locations' && settings.extraData.view_display_id == 'block_2' ){
         
        $('.ForSelect select').addClass('js-select');
        $('.ForSelect label').addClass('label-text');
        $('.customlocateusclass').removeClass('d-none');


        var selectLength = $(".js-select").length;
        if (selectLength > 0) {
          $(".js-select").select2({
            placeholder: "Select",
            allowClear: false,
            minimumResultsForSearch: -1,
          });
        }
        $('.BranchLocation input').addClass('btn btn-primary jsShowBranchBtns');
        $('.jsContactUsFiled').addClass('d-none');
        $('.jsSearchResult').removeClass('d-none');
        
        $('.jsBackToSearch').click(function(){
          $('.jsContactUsFiled').removeClass('d-none');
          $('.jsSearchResult').addClass('d-none');

     
        })
      }
 
      if (settings.extraData._triggering_element_value == 'Continue'){
        $('#edit-actions-wizard-next').addClass('btn btn-primary w-xs-100 Finacialstep');

        $(document).ready(function() {
          $(".Finacialstep").on("click", function() {
              $('.webform-button--previous').addClass('d-none');
          });
        
        
        });

      }
      
      
   
  });
     
  }
};
 
 



$("form#webform-submission-financial-detail-node-353-add-form").submit(function(e){
  e.preventDefault();
});


$('#edit-actions-wizard-next').addClass('btn btn-primary w-xs-100 Finacialstep');


$('.customername input').addClass('form-control');

$(document).ready(function() {
  /*ajax accordian handling for page- investors/bonds-related*/
    $(document).on('click' , '.js-accordionTab-headers' ,function () {
        var currentPageUrl = window.location.href;
        if (currentPageUrl.includes('investors/bonds-related') ){
            if($(this).parent().parent().hasClass('ajax-enabled')){
                if($(this).parent('.js-accordionTab-item').hasClass('active')){
                    $(this).parent('.js-accordionTab-item').removeClass('active');
                    $(this).parent('.js-accordionTab-item').find('.js-accordionTab-bodies').removeAttr('style');
                    $(this).parent('.js-accordionTab-item').find('.js-accordionTab-bodies').css('display','none');
                }else{
                    $(this).parent('.js-accordionTab-item').addClass('active');
                    $(this).parent('.js-accordionTab-item').find('.js-accordionTab-bodies').css('display','block');

                }

            }else{
                $('.js-accordionTab-item').removeClass('active');
                $('.js-accordionTab-bodies').css('display','none');
                $(this).parent('.js-accordionTab-item').addClass('active');
                $(this).parent('.js-accordionTab-item').find('.js-accordionTab-bodies').css('display','block');
            }
        }
    });
  /*document required for second accordian - change accordian id in attr  */
  if($('#rates #accordionExampleTwo').length > 0){
      $('#rates #accordionExampleTwo').find('.accordion-collapse').attr('data-bs-parent', '#accordionExampleTwo');
  }
  
  /*multiple faq paragraph used on same page so change accordian attr as per parent id  */
    if($('#Exportservices #accordionExample1').length > 0){
        $('#Exportservices #accordionExample1').find('.accordion-collapse').attr('data-bs-parent', '#accordionExample1');
    }
    if($('#Importservices #accordionExample2').length > 0){
        $('#Importservices #accordionExample2').find('.accordion-collapse').attr('data-bs-parent', '#accordionExample2');
    }
    if($('#FXRetail #accordionExample3').length > 0){
        $('#FXRetail #accordionExample3').find('.accordion-collapse').attr('data-bs-parent', '#accordionExample3');
    }
  
  /*copy to clipboard*/
  $(".code-letters").on("click", function() {
      var copyText = $(this).find('.swift-code').text();
      var copycode = copyText.trim();
      if(copycode!=='' || copycode!=='undefined'){
          navigator.clipboard.writeText(copycode);
      }
  });
  $(".copy-coupon").on("click", function() {
      var copyText = $(this).parent('.offer-peroid-cols').find('.coupon-code').text();
      var copycode = copyText.trim();
      if(copycode!=='' || copycode!=='undefined'){
          navigator.clipboard.writeText(copycode);
      }
  });

$('.chooseyouraccounty').addClass('d-none');


function validatefirstform() {
  var mobile_number = $('#edit-enter-your-mobile-number').val();
  var age = $('#edit-age').val();
  var existing_life = $('#edit-existing-life-if-any').val(); 
  var mobileRegex = /^[0-9]{10}$/;
  //var ageRegex = /^[1-9]?[0-9]{1}$|^100$/;
  var validation = true;
    if(mobile_number == ''){
       $('.insurancenumber').addClass('textbox-error');
      $('.insurancenumbererror').html('Please enter Your Number');
      validation = false;
       
    }
    else if(!mobileRegex.test(mobile_number)) {
      $('.insurancenumber').addClass('textbox-error');
      $('.insurancenumbererror').html('Please enter Valid Number');
      validation = false;
    } 
    else{
      $('.insurancenumbererror').html('');
      $('.insurancenumber').removeClass('textbox-error');
     }
    if(age==''){
      $('.insuranceage').addClass('textbox-error');
      $('.insuranceageerror').html('Please enter Your Age');
      validation = false;
    }else if(isNaN(age) || age <= 0 || age > 100 || age.indexOf(".") >= 0) {
      $('.insuranceage').addClass('textbox-error');
      $('.insuranceageerror').html('Please enter Valid Age');
      validation = false;
    }else{
      $('.insuranceageerror').html('');
      $('.insuranceage').removeClass('textbox-error');

    }
    if(existing_life==''){
      $('.insurancexisting_life_if_any').addClass('textbox-error');
      $('.insurancexisting_life_if_anyerror').html('Existing life if any field is required');
      validation = false;
    }else if (!$.isNumeric(existing_life)) {
      $('.insurancexisting_life_if_any').addClass('textbox-error');
      $('.insurancexisting_life_if_anyerror').html('Invalid existing life amount');
      validation = false;
    }else{
      $('.insurancexisting_life_if_anyerror').html('');
      $('.insurancexisting_life_if_any').removeClass('textbox-error');
    }
   
    return validation;
   
}

function validatesecondform() {

  var anual_income = $('#edit-your-annual-income').val();
  var current_saving = $('#edit-your-current-saving').val();
  var outstanding_loan = $('#edit-outstanding-loans').val();
  var validation = true;

  if(anual_income ==''){
    $('.insuranceannualincome').addClass('textbox-error');
    $('.insuranceannualincomeerror').html('Please Enter Annual Income');
    validation = false;

  }else if(!$.isNumeric(anual_income)){
    $('.insuranceannualincome').addClass('textbox-error');
    $('.insuranceannualincomeerror').html('Please Enter Valid Annual Income');
    validation = false;

  }else{
    $('.insuranceannualincomeerror').html('');
    $('.insuranceannualincome').removeClass('textbox-error');
  }
  if(current_saving==''){
    $('.insurancesaving').addClass('textbox-error');
    $('.insurancesavingerror').html('Please Enter Your Current Saving');
    validation = false;
  } else if(!$.isNumeric(current_saving)){
    $('.insurancesaving').addClass('textbox-error');
    $('.insurancesavingerror').html('Please Enter Valid Amount');
    validation = false;
  }else{
    $('.insurancesavingerror').html('');
    $('.insurancesaving').removeClass('textbox-error');
  }
  if(outstanding_loan==''){
    $('.insuranceloan').addClass('textbox-error');
    $('.insuranceloanerror').html('Please Enter Your Outstanding loan');
    validation = false;
  } else if(!$.isNumeric(outstanding_loan)){
    $('.insuranceloan').addClass('textbox-error');
    $('.insuranceloanerror').html('Please Enter Valid Amount');
    validation = false;
  }else{
    $('.insuranceloanerror').html('');
    $('.insuranceloan').removeClass('textbox-error');
  }
  return validation;

}





$(".recalculate").click(function() {
  
  location.reload();

});



 var mobile_number = [];
 var age = [];
 var existing_life = '';
 var anual_income = '';
 var current_saving = '';
 var outstanding_loan = '';
$(".finacialstep1").on("click", function() {
 if (validatefirstform()){
     $('#myTab .step-two').trigger("click");
 }
 
});
$(".jsContinuecta").on("click", function() {
  if (!validatefirstform()){
      $('#myTab .step-one').trigger("click");
      return false;
  }
  if (validatesecondform()){
      var age = $('#edit-age').val();
      var existing_life = $('#edit-existing-life-if-any').val(); 
      var anual_income = $('#edit-your-annual-income').val();
      var current_saving = $('#edit-your-current-saving').val();
      var outstanding_loan = $('#edit-outstanding-loans').val(); 
      $('.FormSecond').addClass('d-none');
      $('.jsPlanStep').addClass('d-none');
      $('.jsPlanRecalculate').removeClass('d-none');
   
     
      if(age >= 18 && age <= 49){
        totalValue = +anual_income*15;
       var total_ammount = parseFloat(totalValue) + parseFloat(outstanding_loan);
       var minusamount =  parseFloat(existing_life) + parseFloat(current_saving);
       var final = parseFloat(total_ammount)-parseFloat(minusamount);


       var val = currencyFormat(final);
       var cs = currencyFormat(current_saving);
       var el = currencyFormat(existing_life);


         $('.insurancecoverage').html(val);
         $('.insuranceexistingsavings').html(cs);
         $('.insurancexistingliabilities').html(el);

      }
      else if(age >= 50 && age <= 55){
        totalValue = +anual_income*10;
        var total_ammount = parseFloat(totalValue) + parseFloat(outstanding_loan);
        var minusamount =  parseFloat(existing_life) + parseFloat(current_saving);
        var final = parseFloat(total_ammount)-parseFloat(minusamount);

        var val = currencyFormat(final);
        var cs = currencyFormat(current_saving);
        var el = currencyFormat(existing_life);


          $('.insurancecoverage').html(val);
          $('.insuranceexistingsavings').html(cs);
          $('.insurancexistingliabilities').html(el);


      }
      else if(age >= 56 && age <= 65){
        totalValue = +anual_income*5;
        var total_ammount = parseFloat(totalValue) + parseFloat(outstanding_loan);
        var minusamount =  parseFloat(existing_life) + parseFloat(current_saving);
        var final = parseFloat(total_ammount)-parseFloat(minusamount);


        var val = currencyFormat(final);
        var cs = currencyFormat(current_saving);
        var el = currencyFormat(existing_life);


          $('.insurancecoverage').html(val);
          $('.insuranceexistingsavings').html(cs);
          $('.insurancexistingliabilities').html(el);
      }

  }

});


function currencyFormat(currentValue){
  if (currentValue  >= 1000 && currentValue < 99999){
    if(Number.isInteger(currentValue/1000)){
      currentValue = (currentValue/1000).toFixed()+' '+'K'
    }
    else{
      currentValue = (currentValue/1000).toFixed(2)+' '+'K'
    }
    return formatedValue = currentValue;
  }
  else if(currentValue  >= 100000 && currentValue < 9999999){
    if(Number.isInteger(currentValue/100000)){
      currentValue = (currentValue/100000).toFixed()+' '+'lakhs'
    }
    else{
      currentValue = (currentValue/100000).toFixed(2)+' '+'lakhs'
    }
    return formatedValue = currentValue;
  }
  else if(currentValue  >= 10000000 && currentValue <= 100000000){
    if(Number.isInteger(currentValue/10000000)){
      currentValue = (currentValue/10000000).toFixed()+' '+'crore'
    }
    else{
      currentValue = (currentValue/10000000).toFixed(2)+' '+'crore'
    }
    return formatedValue = currentValue;
  }
  else {
      return formatedValue = commaSeprated(currentValue);
      // return currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function commaSeprated(ammount){
  ammount=ammount.toString();
  let lastThree = ammount.substring(ammount.length-3);
  let otherNumbers = ammount.substring(0,ammount.length-3);
  if(otherNumbers != '')
    lastThree = ',' + lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

}


});




// (function ($) {
//   // Attach a function to the Drupal behavior when the document is ready
//   Drupal.behaviors.customWebformProgressBar = {
//     attach: function (context, settings) {
//       // Override the Webform AJAX progress bar behavior
//       $(document).ajaxSend(function (event, xhr, options) {


//       $('.ajax-progress').removeClass('ajax-progress-throbber');
//       $('.ajax-progress').html('<img src="/sites/default/files/inline-images/page-loader.gif" data-entity-uuid="8c9b59f8-945a-465d-8654-d325c14efc32" data-entity-type="file" width="64" height="64" loading="lazy">');
//     });

//     }
//   };
// })(jQuery);

document.addEventListener('DOMContentLoaded', function () {
  // Get the referring URL.
  var referrerUrl = document.referrer;

  // Set the value of the hidden field to the referring URL.
  var referrerInput = document.querySelector('input[name="referrer_url"]');
  if (referrerInput) {
    referrerInput.value = referrerUrl;
  }
});

(function ($, Drupal, drupalSettings) {

  // Ensure the DOM is ready before attaching the behavior.
  $(document).ready(function () {

    // Attach behavior to the form.
    Drupal.behaviors.customFormValidation = {
      attach: function (context, settings) {

        // Check if the form exists on the current page.
        if ($('#views-exposed-form-unclaimed-deposits-block-1').length) {

          // Add a submit handler to the form only if not already added.
          var $form = $('#views-exposed-form-unclaimed-deposits-block-1');
          if (!$form.data('customFormValidationAttached')) {
            $form.data('customFormValidationAttached', true);

            // Add a submit handler to the form.
            $form.on('submit', function (e) {
              // Prevent the form from submitting by default.
              e.preventDefault();

              // Your custom validation logic here.
              if (!customValidation()) {
                // If validation fails, show an error message or perform other actions.
                alert('Validation failed!');
              } else {
                // If validation passes, trigger the AJAX submission.
                Drupal.ajax({url: '/your-ajax-path'}).execute();
              }
            });
          }
        }
      }
    };

    // Custom validation function.
    function customValidation() {
      // Implement your custom validation logic here.
      // Return true if validation passes, false otherwise.
      // For example, check if a certain condition is met.
      return true;
    }


  var jsonInput = $('input[data-drupal-selector="edit-selected-value"]').val();
  var referralUrl = $('input[data-drupal-selector="edit-referrer-url"]').val();
  
  // Parse the JSON input.
  var data = JSON.parse(jsonInput);
  
  // Initialize variable to store the name.
  var nameFound = null;

  // Function to search for the URL in the JSON data.
  function searchUrl(url, data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        if (typeof data[key] === 'string' && data[key] === url) {
          return key;
        } else if (Array.isArray(data[key]) && data[key].includes(url)) {
          return key;
        }
      }
    }
    return null;
  }

  function getBaseUrl() {
    var protocol = window.location.protocol;
    var host = window.location.host;
    var path = window.location.pathname;
    var baseUrl = protocol + "//" + host;

    return baseUrl;
}

  var baseUrl = getBaseUrl();
  // Search for the referral URL in the JSON data.
  nameFound = searchUrl(referralUrl.replace(baseUrl, ""), data);
  // Output the result.
  if (nameFound) {

    // Set the value of Select2 dropdown
    $('#edit-interested-product-service').val(nameFound).trigger('change');
    $('#edit-interested-product-service option').each(function() {
      if ($(this).val() !== nameFound) {
          $(this).prop('disabled', true);
      } else {
          $(this).prop('disabled', false);
      }
  });
      // Manually trigger validation check if needed
    $('#edit-interested-product-service').trigger('blur');
     // Disable all options (optional)
    
  } 




  });
  var path = window.location.pathname;
  if (path.includes('business')) {
    // Remove 'active' class from all header links
    $('.header-links a').removeClass('active');
    // Add 'active' class to the BUSINESS tab
    $('.header-links a:contains("Business & MSME")').addClass('active');
    $('.header-links a:contains("ಬಿಜಿನೆಸ್ ಮತ್ತು ಎಂಎಸ್ಎಂಇ")').addClass('active');

  }

  if (path.includes('personal')) {
    // Remove 'active' class from all header links
    $('.header-links a').removeClass('active');
    // Add 'active' class to the BUSINESS tab
    $('.header-links a:contains("Personal")').addClass('active');
    $('.header-links a:contains("ಪರ್ಸನಲ್")').addClass('active');
  }

  if (path.includes('nri-priority-banking')) {
    // Remove 'active' class from all header links
    $('.header-links a').removeClass('active');
    // Add 'active' class to the BUSINESS tab
    $('.header-links a:contains("NRI Priority Banking")').addClass('active');
    $('.header-links a:contains("ಎನ್ಆರ್ಐ ಪ್ರಾಯಾಗತ್ಯ ಬ್ಯಾಂಕಿಂಗ್")').addClass('active');

  }

  if (path.includes('agri-rural')) {
    // Remove 'active' class from all header links
    $('.header-links a').removeClass('active');
    // Add 'active' class to the BUSINESS tab
    $('.header-links a:contains("Agribanking")').addClass('active');
    $('.header-links a:contains("ಆಗ್ರಿಬ್ಯಾಂಕಿಂಗ್")').addClass('active');

  }
 
  $('.subdropdown-outer').find('[hreflang="hi"]').addClass('d-none');



 

  $('.Dormant_Account_Activation a').click(function(e) {
    // Prevent the default behavior of the Next button (stopping the wizard).
    e.preventDefault();
    $('.page-loader').show();
    //$('#your-modal-id .modal-body').html(formData);
     
    // console.log(registered_mobile_number);
    var url = '/dormant-account-activation';
    // Send AJAX POST request.
    $.ajax({
      url: url,
      data: {type: 'dormant'},
      method: 'POST',
      success: function(response) {
        window.location = response;
      }
    });
  });

  $('.sb_vcip a').click(function(e) {
    // Prevent the default behavior of the Next button (stopping the wizard).
    e.preventDefault();
    $('.page-loader').show();
    //$('#your-modal-id .modal-body').html(formData);
     
    // console.log(registered_mobile_number);
    var url = '/dormant-account-activation';
    // Send AJAX POST request.
    $.ajax({
      url: url,
      data: {type: 'SB VCIP'},
      method: 'POST',
      success: function(response) {
        window.location = response;
      }
    });
  });


})(jQuery, Drupal, drupalSettings);

 


