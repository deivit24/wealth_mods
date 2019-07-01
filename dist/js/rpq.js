var inputs = document.getElementsByTagName('input');

// progress bar
var inputProgress = document.querySelector('#input-progress');

var progress = document.querySelector('#progress-bar');
// start button quiz

var currentQuestion = 2;

function startQuiz() {
  document.getElementById('question-1').className = 'question';
  var startBtn = document.getElementById('startQuizBtn');
  startBtn.parentNode.removeChild(startBtn);
  inputProgress.style.width = 10 + '%';
  setTimeout(deleteSecOne, 1000);
  var riskContact = document.getElementById('risk-contact');
  riskContact.parentNode.removeChild(riskContact);
  var phone = document.getElementById('inputPhone');
  phone.parentNode.removeChild(phone);
}

function startQuizGuest() {
  var formcon = document.getElementById('form-con');
  formcon.classList.remove('faded');
  document.getElementById('question-1').className = 'question';
  var startBtn = document.getElementById('startQuizBtn');
  startBtn.parentNode.removeChild(startBtn);
  inputProgress.style.width = 10 + '%';
  setTimeout(deleteSecOne, 1000);
  var ClientRiskContact = document.getElementById('client-risk-contact');
  ClientRiskContact.parentNode.removeChild(ClientRiskContact);
  var account = document.getElementById('inputAccountType');
  account.parentNode.removeChild(account);
}

// delete section 1
function deleteSecOne() {
  var secOne = document.getElementById('sec1');
  secOne.parentNode.removeChild(secOne);
}

// get the number of questions
function getNumberOfQuestions() {
  //QuerySelectorAll has better browser support in exchange for being slightly slower than gEBCN.
  var totalQuestions = document.querySelectorAll('.question').length;

  return totalQuestions;
}

// next question
function nextQuestion() {
  hideQuestion(currentQuestion);
  hideAnswerButton();

  showQuestion(currentQuestion);
  currentQuestion++;
}

function setAnswerButton() {
  //yes, that's correct. this is my lazy way of input validation without annoyning users
  //(e.g. transition on-click events) on the radio buttons...
  document.getElementById('confirm_answer').className = '';
  document.getElementById('reset').className = '';
}

function hideAnswerButton() {
  document.getElementById('confirm_answer').className = 'faded-r';
  document.getElementById('reset').className = 'faded';
}

function hideQuestion(id) {
  var totalQuestions = getNumberOfQuestions();
  for (var i = 1; i <= totalQuestions; i++) {
    if (i !== id) {
      document.getElementById('question-' + i).className = 'question invisible';
    }
  }
}

function showQuestion(id) {
  var totalQuestions = getNumberOfQuestions();
  if (id <= totalQuestions) {
    document.getElementById('question-' + id).className = 'question';
    inputProgress.style.width = (currentQuestion / totalQuestions) * 100 + '%';
  }
  if (id == totalQuestions - 1) {
    hideAnswerButton(); //begins the end screen process if id is above total question
    inputProgress.className = 'invisible';
    progress.className = 'invisible';
  }
}

// listen for submit
document.getElementById('quiz').addEventListener('submit', function(e) {
  // hide results
  document.getElementById('answer').style.display = 'none';
  // hide calc button
  document.getElementById('calc').style.display = 'none';
  // show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// function to calculate the result of the survey
// initialize variables for each choice's score
// If you add more choices and outcomes, you must add another variable here.
function calculateResults() {
  document.getElementById('answer').style.display = 'block';

  document.getElementById('loading').style.display = 'none';

  document.getElementById('calc').style.display = 'none';

  inputProgress.style.display = 'none';
  progress.style.display = 'none';
  var showTable = document.getElementById('table');
  showTable.classList.remove('invisible');

  caclRiskProfile();
}

// program the reset button
function resetAnswer() {
  var ele = document.getElementById('riskProfile');
  window.scrollTo(ele.offsetLeft, ele.offsetTop);
  window.location.reload();
}

// Scroll Magic Scroll Spy

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '#startQuizBtn',
  duration: 500
}).addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function(newpos) {
  TweenMax.to(window, 0.5, {
    scrollTo: {
      y: newpos
    }
  });
});

//  bind scroll to anchor links
$(document).on('click', "[href^='#']", function(e) {
  var id = $(this).attr('href');
  if ($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // if supported by the browser we can even update the URL.
  }
});

function caclRiskProfile() {
  let rc1score = 0;
  let rc2score = 0;
  let rc3score = 0;
  let rc4score = 0;
  let rc5score = 0;

  // get a list of the radio inputs on the page
  let rcchoices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i = 0; i <= 25; i++) {
    // if the radio is checked..
    if (rcchoices[i].checked) {
      // add 1 to that choice's score
      if (rcchoices[i].value == 'c1') {
        rc1score = rc1score + 0;
      }
      if (rcchoices[i].value == 'c2') {
        rc2score = rc2score + 3;
      }
      if (rcchoices[i].value == 'c3') {
        rc3score = rc3score + 5;
      }
      if (rcchoices[i].value == 'c4') {
        rc4score = rc4score + 8;
      }
      if (rcchoices[i].value == 'c5') {
        rc5score = rc5score + 10;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }

  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the letiable here.
  let maxrcscore = rc1score + rc2score + rc3score + rc4score + rc5score;

  if (maxrcscore <= 10) {
    // If user chooses the first choice the most, this outcome will be displayed.
    let riskCvc = document.getElementById('risk-capacity');
    riskCvc.innerHTML = `
    <h2>Risk Capacity</h2>
    <img src="../dist/img/veryConservative.png" alt="">
    `;
  }
  if (maxrcscore > 10 && maxrcscore <= 20) {
    // If user chooses the second choice the most, this outcome will be displayed.
    let riskCc = document.getElementById('risk-capacity');
    riskCc.innerHTML = `
    <h2>Risk Capacity</h2>
    <img src="../dist/img/conservative.png" alt="">
    `;
  }
  if (maxrcscore > 20 && maxrcscore <= 30) {
    // If user chooses the third choice the most, this outcome will be displayed.
    let riskCm = document.getElementById('risk-capacity');
    riskCm.innerHTML = `
    <h2> Your Risk Capacity</h2>
    <img src="../dist/img/moderare.png" alt="">
    `;
  }
  if (maxrcscore > 30 && maxrcscore <= 40) {
    // If user chooses the fourth choice the most, this outcome will be displayed.
    let riskCma = document.getElementById('risk-capacity');
    riskCma.innerHTML = `
    <h2> Your Risk Capacity</h2>
    <img src="../dist/img/moderatelyA.png" alt="">
    `;
  }

  if (maxrcscore > 40) {
    // If user chooses the Fifth choice the most, this outcome will be displayed.
    let riskCa = document.getElementById('risk-capacity');
    riskCa.innerHTML = `
    <h2> Your Risk Capacity</h2>
    <img src="../dist/img/aggressive.png" alt="">
    `;
  }

  // time to calculate the risk tolerance of the risk profile!!

  let rt1score = 0;
  let rt2score = 0;
  let rt3score = 0;
  let rt4score = 0;
  let rt5score = 0;

  // get a list of the radio inputs on the page
  let rtchoices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i = 26; i < rtchoices.length; i++) {
    // if the radio is checked..
    if (rtchoices[i].checked) {
      // add 1 to that choice's score
      if (rtchoices[i].value == 'c1') {
        rt1score = rt1score + 0;
      }
      if (rtchoices[i].value == 'c2') {
        rt2score = rt2score + 3;
      }
      if (rtchoices[i].value == 'c3') {
        rt3score = rt3score + 5;
      }
      if (rtchoices[i].value == 'c4') {
        rt4score = rt4score + 8;
      }
      if (rtchoices[i].value == 'c5') {
        rt5score = rt5score + 10;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }

  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the letiable here.
  let maxrtscore = rt1score + rt2score + rt3score + rt4score + rt5score;

  if (maxrtscore <= 10) {
    // If user chooses the first choice the most, this outcome will be displayed.
    let riskTvc = document.getElementById('risk-tolerance');
    riskTvc.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <img src="../dist/img/veryConservative.png" alt="">
    `;
  }
  if (maxrtscore > 10 && maxrtscore <= 20) {
    // If user chooses the second choice the most, this outcome will be displayed.
    let riskTc = document.getElementById('risk-tolerance');
    riskTc.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <img src="../dist/img/conservative.png" alt="">
    `;
  }
  if (maxrtscore > 20 && maxrtscore <= 30) {
    // If user chooses the third choice the most, this outcome will be displayed.
    let riskTm = document.getElementById('risk-tolerance');
    riskTm.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <img src="../dist/img/moderare.png" alt="">
    `;
  }
  if (maxrtscore > 30 && maxrtscore <= 40) {
    // If user chooses the fourth choice the most, this outcome will be displayed.
    let riskTma = document.getElementById('risk-tolerance');
    riskTma.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <img src="../dist/img/moderatelyA.png" alt="">
    `;
  }

  if (maxrtscore > 40) {
    // If user chooses the Fifth choice the most, this outcome will be displayed.
    let riskTa = document.getElementById('risk-tolerance');
    riskTa.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <img src="../dist/img/aggressive.png" alt="">
    `;
  }

  let totalScore = maxrcscore + maxrtscore;

  if (totalScore <= 20) {
    let riskPvc = document.getElementById('risk-profile');
    riskPvc.innerHTML = `
    <h1>Your Risk Profile</h1>
    <img src="../dist/img/veryConservative.png" alt="">
    `;
  }

  if (totalScore > 20 && totalScore <= 40) {
    let riskPc = document.getElementById('risk-profile');
    riskPc.innerHTML = `
    <h1>Your Risk Profile</h1>
    <img src="../dist/img/conservative.png" alt="">
    `;
  }
  if (totalScore > 40 && totalScore <= 60) {
    let riskPm = document.getElementById('risk-profile');
    riskPm.innerHTML = `
    <h1>Your Risk Profile</h1>
    <img src="../dist/img/moderare.png" alt="">
    `;
  }
  if (totalScore > 60 && totalScore <= 80) {
    let riskPma = document.getElementById('risk-profile');
    riskPma.innerHTML = `
    <h1>Your Risk Profile</h1>
    <img src="../dist/img/moderatelyA.png" alt="">
    `;
  }
  if (totalScore > 80) {
    let riskPa = document.getElementById('risk-profile');
    riskPa.innerHTML = `
    <h1>Your Risk Profile</h1>
    <img src="../dist/img/aggressive.png" alt="">
    `;
  }

  // New Form Calculations

  let rcTScore = document.getElementById('rcTotalScore');
  rcTScore.innerHTML = maxrcscore;
  if (maxrcscore > 40) {
    rcTScore.classList = 'veryAg';
  }
  if (maxrcscore > 30 && maxrcscore <= 40) {
    rcTScore.classList = 'aggressive';
  }
  if (maxrcscore > 20 && maxrcscore <= 30) {
    rcTScore.classList = 'moderate';
  }
  if (maxrcscore > 10 && maxrcscore <= 20) {
    rcTScore.classList = 'conservative';
  }
  if (maxrcscore <= 10) {
    rcTScore.classList = 'veryCon';
  }
  // Risk Tolerance Score Begins
  let rtTScore = document.getElementById('rtTotalScore');
  rtTScore.innerHTML = maxrtscore;

  if (maxrtscore > 40) {
    rtTScore.classList = 'veryAg';
  }
  if (maxrtscore > 30 && maxrtscore <= 40) {
    rtTScore.classList = 'aggressive';
  }
  if (maxrtscore > 20 && maxrtscore <= 30) {
    rtTScore.classList = 'moderate';
  }
  if (maxrtscore > 10 && maxrtscore <= 20) {
    rtTScore.classList = 'conservative';
  }
  if (maxrtscore <= 10) {
    rtTScore.classList = 'veryCon';
  }

  // Full Risk Profile Score

  let rpTScore = document.getElementById('rpTotalScore');
  rpTScore.innerHTML = totalScore;
  if (totalScore > 80) {
    rpTScore.classList = 'veryAg';
  }
  if (totalScore > 60 && totalScore <= 80) {
    rpTScore.classList = 'aggressive';
  }
  if (totalScore > 40 && totalScore <= 60) {
    rpTScore.classList = 'moderate';
  }
  if (totalScore > 20 && totalScore <= 40) {
    rpTScore.classList = 'conservative';
  }
  if (totalScore <= 20) {
    rpTScore.classList = 'veryCon';
  }
}

// side swipe panels
