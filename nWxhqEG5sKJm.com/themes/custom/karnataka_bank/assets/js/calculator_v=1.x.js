$(document).ready(function () {
  $(".js-range-slider").ionRangeSlider({
    skin: "round",
  });

  // Range slider start
  if ($(".js-calculatorRangeSlider").is(":visible")) {
    $(".js-calculatorRangeSlider").ionRangeSlider({
      skin: "round",
      postfix: "%",
      prettify_enabled: true,
      prettify_separator: ",",
      onStart: rangeSliderSet,
      onChange: rangeSliderSet,
    });
    function rangeSliderSet(data) {
      commaSeparatedValue = data.from.toLocaleString("en-IN");
      data.input
        .parents(".calculator-rows")
        .find(".js-showCalulatorRangeValue")
        .val(commaSeparatedValue);
    }
  }
  // Range slider end

  $(".price-with-comma").keyup(function () {
    if ($(this).val() != "") {
      var rupeeValue = parseFloat($(this).val().replace(/,/g, ""));
      commaSeparatedValue = rupeeValue.toLocaleString("en-IN");
      $(this).val(commaSeparatedValue);
    }
  });

  // Data for the donut chart
  var data = [
    {
      name: "Interest Amount",
      y: 25,
      value: "21,000",
    },
    {
      name: "Large cap equity fund",
      y: 75,
      value: "30,000",
    },
  ];

  // Create the donut chart
  // if ($(".chat-donut").length > 0) {
  //   Highcharts.chart("donutChartContainer", {
  //     chart: {
  //       type: "pie",
  //       width: 280,
  //       height: 280,
  //     },
  //     title: {
  //       text: "",
  //     },
  //     plotOptions: {
  //       pie: {
  //         innerSize: "60%", // This makes it a donut chart
  //         dataLabels: {
  //           enabled: false,
  //         },
  //       },
  //     },
  //     series: [
  //       {
  //         name: "",
  //         data: data,
  //         colors: ["#6FCF97", "#FFC555"],
  //         states: {
  //           hover: {
  //             colors: ["#6FCF97", "#FFC555"],
  //           },
  //         },
  //       },
  //     ],
  //     tooltip: {
  //       formatter: function () {
  //         console.log(this.point.value);
  //         // Customize the tooltip content here
  //         return "<b>" + this.key + "</b><br/>&#8377;" + this.point.value;
  //       },
  //       backgroundColor: "rgb(255, 255, 255)",
  //       boxShadow: "0px 1.75px 14px 0px rgba(0, 0, 0, 0.10)",
  //       borderRadius: 4,
  //       style: {
  //         fontSize: "16px",
  //       },
  //     },
  //   });
  // }
  // if ($(".chat-donut2").length > 0) {
  //   Highcharts.chart("donutChartContainer2", {
  //     chart: {
  //       type: "pie",
  //       width: 280,
  //       height: 280,
  //     },
  //     title: {
  //       text: "",
  //     },
  //     plotOptions: {
  //       pie: {
  //         innerSize: "60%", // This makes it a donut chart
  //         dataLabels: {
  //           enabled: false,
  //         },
  //       },
  //     },
  //     series: [
  //       {
  //         name: "",
  //         data: data,
  //         colors: ["#6FCF97", "#FFC555"],
  //         states: {
  //           hover: {
  //             colors: ["#6FCF97", "#FFC555"],
  //           },
  //         },
  //       },
  //     ],
  //     tooltip: {
  //       formatter: function () {
  //         console.log(this.point.value);
  //         // Customize the tooltip content here
  //         return "<b>" + this.key + "</b><br/>&#8377;" + this.point.value;
  //       },
  //       backgroundColor: "rgb(255, 255, 255)",
  //       boxShadow: "0px 1.75px 14px 0px rgba(0, 0, 0, 0.10)",
  //       borderRadius: 4,
  //       style: {
  //         fontSize: "16px",
  //       },
  //     },
  //   });
  // }
  // if ($(".chat-donut3").length > 0) {
  //   Highcharts.chart("donutChartContainer3", {
  //     chart: {
  //       type: "pie",
  //       width: 280,
  //       height: 280,
  //     },
  //     title: {
  //       text: "",
  //     },
  //     plotOptions: {
  //       pie: {
  //         innerSize: "60%", // This makes it a donut chart
  //         dataLabels: {
  //           enabled: false,
  //         },
  //       },
  //     },
  //     series: [
  //       {
  //         name: "",
  //         data: data,
  //         colors: ["#6FCF97", "#FFC555"],
  //         states: {
  //           hover: {
  //             colors: ["#6FCF97", "#FFC555"],
  //           },
  //         },
  //       },
  //     ],
  //     tooltip: {
  //       formatter: function () {
  //         console.log(this.point.value);
  //         // Customize the tooltip content here
  //         return "<b>" + this.key + "</b><br/>&#8377;" + this.point.value;
  //       },
  //       backgroundColor: "rgb(255, 255, 255)",
  //       boxShadow: "0px 1.75px 14px 0px rgba(0, 0, 0, 0.10)",
  //       borderRadius: 4,
  //       style: {
  //         fontSize: "16px",
  //       },
  //     },
  //   });
  // }
  // if ($(".chat-donut4").length > 0) {
  //   Highcharts.chart("donutChartContainer4", {
  //     chart: {
  //       type: "pie",
  //       width: 280,
  //       height: 280,
  //     },
  //     title: {
  //       text: "",
  //     },
  //     plotOptions: {
  //       pie: {
  //         innerSize: "60%", // This makes it a donut chart
  //         dataLabels: {
  //           enabled: false,
  //         },
  //       },
  //     },
  //     series: [
  //       {
  //         name: "",
  //         data: data,
  //         colors: ["#6FCF97", "#FFC555"],
  //         states: {
  //           hover: {
  //             colors: ["#6FCF97", "#FFC555"],
  //           },
  //         },
  //       },
  //     ],
  //     tooltip: {
  //       formatter: function () {
  //         console.log(this.point.value);
  //         // Customize the tooltip content here
  //         return "<b>" + this.key + "</b><br/>&#8377;" + this.point.value;
  //       },
  //       backgroundColor: "rgb(255, 255, 255)",
  //       boxShadow: "0px 1.75px 14px 0px rgba(0, 0, 0, 0.10)",
  //       borderRadius: 4,
  //       style: {
  //         fontSize: "16px",
  //       },
  //     },
  //   });
  // }

  $(document).on("click", function (event) {
    var $trigger = $(".close-on-outside");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $(".jsCalculatorNav").addClass("d-none");
      $(".jsEmiMobCalculator").removeClass("active");
    }
  });

  if ($(window).width() < 991) {
    $(".jsEmiMobCalculator").click(function () {
      $(this).toggleClass("active");
      $(".jsCalculatorNav").toggleClass("d-none");
    });

    $('.jsCalculatorNav [data-bs-toggle="tab"]').click(function () {
      var activeText = $(this)
        .closest(".nav-item")
        .find(".tab-bottom-text")
        .text();
      $(".jsEmiMobCalculator").text(activeText);
      $(".jsEmiMobCalculator").removeClass("active");
      $(".jsCalculatorNav").addClass("d-none");
    });
  }
});

// Calulator Input change start
// $(".js-showCalulatorRangeValue").keyup(function (event) {
//   var keycode = (event.keyCode ? event.keyCode : event.which);
//   if(keycode == '13'){
//       $(this).trigger('change');
//   }
// });
// $(".js-showCalulatorRangeValue").on("change", function () {
//   $this = $(this);
//   var parents = $(this).parents(".calculator-rows");
//   var slider = parents.find(".custom-range-slider-wrap input");
//   var my_range = slider.data("ionRangeSlider");

//   var x = $this.val();
//   x = x.replace(/,/g, "");
//   var maxVal = slider.data('max');
//   var minVal = slider.data('min');
//   if(x >= maxVal){
//       $this.val(maxVal.toLocaleString('INR'));
//   }
//   if(x <= minVal){
//       $this.val(minVal.toLocaleString('INR'));
//   }
//   setTimeout(function () {
//       my_range.update({
//           from: x,
//           extra_classes: "no-transition",
//       });
//   }, 100);
// });
// Calulator Input change end
