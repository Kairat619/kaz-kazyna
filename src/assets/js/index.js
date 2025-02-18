__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_animate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/animate.css */ "./src/css/animate.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _alpinejs_intersect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alpinejs/intersect */ "./node_modules/@alpinejs/intersect/dist/module.esm.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wowjs */ "./node_modules/wowjs/dist/wow.js");
/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wowjs__WEBPACK_IMPORTED_MODULE_5__);






alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].plugin(_alpinejs_intersect__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].start();
window.wow = new (wowjs__WEBPACK_IMPORTED_MODULE_5___default().WOW)({
  live: false
});
window.wow.init({
  offset: 50
}); // ==== Token Chart

var charts = document.querySelectorAll('#chart');

if (charts.length) {
  var options = {
    series: [73, 55, 38, 20],
    chart: {
      type: "donut",
      width: 400
    },
    colors: ["#2347B9", "#3363FF", "#8BA6FF", "#8696CA"],
    legend: {
      show: false
    },
    stroke: {
      show: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: "bottom"
        }
      }
    }]
  };
  var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_4___default())(document.querySelector("#chart"), options);
  chart.render();
} // ==== darkToggler


var darkTogglerCheckbox = document.querySelector('#darkToggler');
var html = document.querySelector('html');

var darkModeToggler = function darkModeToggler() {
  darkTogglerCheckbox.checked ? html.classList.remove('vk') : html.classList.add('vk');
};

darkModeToggler();
darkTogglerCheckbox.addEventListener('click', darkModeToggler); // ====== scroll top js

function scrollTo(element) {
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var start = element.scrollTop;
  var change = to - start;
  var increment = 20;
  var currentTime = 0;

  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

document.querySelector('.back-to-top').onclick = function () {
  scrollTo(document.documentElement);
};

//# sourceURL=webpack://Crypto_Tailwind/./src/js/index.js?