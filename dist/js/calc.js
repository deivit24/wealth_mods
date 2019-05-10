// Time Horizon
let timeHorizonSlider = document.getElementById('timeHorizonSlider');

noUiSlider.create(timeHorizonSlider, {
  start: [30, 62],
  connect: true,
  behaviour: 'tap',
  step: 1,
  range: {
    'min': [0],

    'max': [100]
  },

  format: wNumb({
    decimals: 0,
    thousand: ',',
    suffix: ' Years'
  })
});


let age = document.getElementById('age');

let retireAge = document.getElementById('retireAge');

timeHorizonSlider.noUiSlider.on('update', function (values, handle) {
  let value = values[handle];


  if (handle) {
    retireAge.value = value;

  } else {
    age.value = value;
  }

});

age.addEventListener('change', function () {
  timeHorizonSlider.noUiSlider.set([this.value, null]);


});

retireAge.addEventListener('change', function () {
  timeHorizonSlider.noUiSlider.set([null, this.value]);

});


// End Time Horizon

// Beginnig Contribution Age Slider

let conSlider = document.getElementById('conSlider');

noUiSlider.create(conSlider, {
  start: 30,
  connect: [true, false],
  step: 1,
  range: {
    'min': [18],
    'max': [100]
  },
  ariaFormat: wNumb({
    decimals: 3
  }),
  format: wNumb({
    decimals: 0,
    thousand: ',',
    suffix: ' Years Old'
  })
});

let conAge = document.getElementById('conAge');

conSlider.noUiSlider.on('update', function (values, handle) {
  conAge.value = values[handle];

});

conAge.addEventListener('change', function () {
  conSlider.noUiSlider.set(this.value);
});

// End Contritbuion
// Begin Rate of Return
let returnSlider = document.getElementById('returnSlider');

noUiSlider.create(returnSlider, {
  start: [6.5],
  connect: [true, false],
  step: .01,
  range: {
    'min': [0.01],
    'max': [15]
  },
  ariaFormat: wNumb({
    decimals: 3
  }),
  format: wNumb({
    decimals: 3,

    suffix: '%'
  })
});

let returnRate = document.getElementById('return');

returnSlider.noUiSlider.on('update', function (values, handle) {
  returnRate.value = values[handle];

});

returnRate.addEventListener('change', function () {
  returnSlider.noUiSlider.set(this.value);
});
// End Rate of Return

// Beegin Annual Contritbution
let annualConSlider = document.getElementById('annualConSlider');

noUiSlider.create(annualConSlider, {
  start: [2500, 6000],
  connect: true,
  behaviour: 'tap',
  step: 10,
  range: {
    'min': [0],
    '75%': [10000, 10000],
    'max': [500000]
  },

  format: wNumb({
    decimals: 0,
    thousand: ',',
    prefix: '$'
  })
});

let minCon = document.getElementById("minCon");
let maxCon = document.getElementById("maxCon");

annualConSlider.noUiSlider.on('update', function (values, handle) {
  let value = values[handle];

  if (handle) {
    maxCon.value = value;
  } else {
    minCon.value = value;
  }

});

minCon.addEventListener('change', function () {
  annualConSlider.noUiSlider.set([this.value, null]);
});

maxCon.addEventListener('change', function () {
  annualConSlider.noUiSlider.set([null, this.value]);
});

// end Contribution

// Begin Current Plan

let currentValSlider = document.getElementById('currentValSlider');

noUiSlider.create(currentValSlider, {
  start: [20000],
  connect: [true, false],

  step: 100,
  range: {
    'min': [0],
    '50%': [100000, 5000],
    '75%': [500000, 10000],
    'max': [10000000]
  },
  format: wNumb({
    decimals: 0,
    thousand: ',',
    prefix: '$'
  })
});

let currentVal = document.getElementById('currentVal');

currentValSlider.noUiSlider.on('update', function (values, handle) {
  currentVal.value = values[handle];

});

currentVal.addEventListener('change', function () {
  currentValSlider.noUiSlider.set(this.value);
});


$("#resultButton").click(function () {
  $("#results").addClass("appear");
  $("#resultButton").addClass("disappear");

});



function something() {
  let moneyFormat = wNumb({
    mark: '.',
    decimals: 2,
    thousand: ',',
    prefix: '$ ',

  });

  let = rateFormat = wNumb({
    mark: '.',
    decimals: 5,

    prefix: '% 1 ',

  });
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let minValue = document.getElementById("minValue");
  let maxValue = document.getElementById("maxValue");
  let conYears1 = document.querySelector(".conYears1");
  let conYears2 = document.querySelector(".conYears2");
  let returnRateValue1 = document.querySelector(".returnRateValue1");
  let returnRateValue2 = document.querySelector(".returnRateValue2");
  let timeHor1 = document.querySelector(".timeHorizon1");
  let timeHor2 = document.querySelector(".timeHorizon2");

  let ageVal = parseInt(age.value);
  let retireAgeVal = parseInt(retireAge.value);
  let conAgeVal = parseInt(conAge.value);
  let returnRateVal = parseFloat(returnRate.value) / 100;
  let Y = retireAgeVal - conAgeVal;
  let timeHorizon = retireAgeVal - ageVal;
  let minConVal = parseInt(minCon.value.replace(/[^0-9\.]+/g, ""));
  let maxConVal = parseInt(maxCon.value.replace(/[^0-9\.]+/g, ""));
  let currentValVal = parseInt(currentVal.value.replace(/[^0-9\.]+/g, ""));
  let finalMinVal = currentValVal * Math.pow((1 + returnRateVal), Y) + (minConVal * [(Math.pow((1 + returnRateVal), Y) - 1) / returnRateVal]);
  let finalMaxVal = currentValVal * Math.pow((1 + returnRateVal), Y) + (maxConVal * [(Math.pow((1 + returnRateVal), Y) - 1) / returnRateVal]);
  let todayMinValue = currentValVal * Math.pow((1 + returnRateVal), timeHorizon) + (minConVal * [(Math.pow((1 + returnRateVal), timeHorizon) - 1) / returnRateVal]);
  let todayMaxValue = currentValVal * Math.pow((1 + returnRateVal), timeHorizon) + (maxConVal * [(Math.pow((1 + returnRateVal), timeHorizon) - 1) / returnRateVal]);
  let maxPotential = document.getElementById('maxPotentialRetirementAmount');
  let deferredMaximums = document.getElementById('deferredMaximums');

  min.innerHTML = moneyFormat.to(minConVal);
  max.innerHTML = moneyFormat.to(maxConVal);
  timeHor1.innerHTML = timeHorizon;
  timeHor2.innerHTML = timeHorizon;

  returnRateValue1.innerHTML = returnRateVal * 100 + "%";
  returnRateValue2.innerHTML = returnRateVal * 100 + "%";
  conYears1.innerHTML = retireAgeVal - conAgeVal;
  conYears2.innerHTML = retireAgeVal - conAgeVal;

  if (conAgeVal <= retireAgeVal) {
    minValue.innerHTML = moneyFormat.to(finalMinVal);
    $("#conSlider").addClass("safe");
    $("#conSlider").removeClass("errorSlider");
  }
  if (conAgeVal > retireAgeVal) {
    minValue.innerHTML = `
    <span class="error"> Contribution age can't be higher than Retirement Age</span>
    `;
    $("#conSlider").addClass("errorSlider");
    $("#conSlider").removeClass("safe");


  }

  if (conAgeVal <= retireAgeVal) {
    maxValue.innerHTML = moneyFormat.to(finalMaxVal);
    $("#conSlider").addClass("safe");
    $("#conSlider").removeClass("errorSlider");
  }

  if (conAgeVal > retireAgeVal) {
    maxValue.innerHTML = `
    <span class="error"> Contribution age can't be higher than Retirement Age</span>
    `;
    $("#conSlider").addClass("errorSlider");
    $("#conSlider").removeClass("safe");
  }

  maxPotential.innerHTML = moneyFormat.to(finalMaxVal);
  document.getElementById('maximumValueAtRetirement').innerHTML = moneyFormat.to(finalMaxVal);
  deferredMaximums.innerHTML = moneyFormat.to(finalMinVal);
  document.getElementById('deferredMaximum').innerHTML = ".";

  $('#deferredMaximum').attr('style', 'width:' + (finalMinVal * 100) / finalMaxVal + '%');
}
something();

$("input").on("blur", function () {
  something();

});

$("input").on("keyup", function () {
  something();

});
$("input").on("click", function () {
  something();

});
$("input").on("focusin", function () {
  something();

});

$("[data-slider-type='slider']").on("mousemove", function () {
  something();

})
$("[data-slider-type='slider']").on("mousedown", function () {
  something();

})
$("[data-slider-type='slider']").on("mouseleave", function () {
  something();

});