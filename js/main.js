const start_btn = document.querySelector(".start__btn");
const info_box = document.querySelector(".info__box");
const quiz_box = document.querySelector(".quiz__box");
const exit_btn = info_box.querySelector(".quit__btn");
const continue_btn = info_box.querySelector(".continue__btn");
const que_options = document.querySelector(".section__options-list");
const timeCount = document.querySelector(".time__text");
const next_btn = document.querySelector(".next__btn");
const result_box = document.querySelector(".result__box");
const quit_btn = result_box.querySelector(".quit__btn");

start_btn.addEventListener("click", () => {
  info_box.style.display = "block";
});

exit_btn.addEventListener("click", () => {
  info_box.style.display = "none";
});

quit_btn.addEventListener("click", () => {
  window.location.reload();
});

continue_btn.addEventListener("click", () => {
  quiz_box.style.display = "block";
  info_box.style.display = "none";
  showQuestions(0);
  queCounter(1);
  startTimer(10);
});

next_btn.addEventListener("click", () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    next_btn.style.display = "none";
    console.log("Udało się!");
    console.log(que_count);
    console.log(questions.length);
  } else {
    clearInterval(counter);
    showResultBox();
    console.log("Nie udało się!");
    console.log(que_count);
    console.log(questions.length);
  }
});

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 10;
let userScore = 0;

function showQuestions(index) {
  const que_title = document.querySelector(".section__question");
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="section__option">' +
    questions[index].options[0] +
    '<span class="section__answer"></span></div>' +
    '<div class="section__option">' +
    questions[index].options[1] +
    '<span class="section__answer"></span></div>' +
    '<div class="section__option">' +
    questions[index].options[2] +
    '<span class="section__answer"></span></div>' +
    '<div class="section__option">' +
    questions[index].options[3] +
    '<span class="section__answer"></span></div>';
  que_title.innerHTML = que_tag;
  que_options.innerHTML = option_tag;
  const option = que_options.querySelectorAll(".section__option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  clearInterval(counter);
  let userAnswer = answer.textContent;
  let correctAnswer = questions[que_count].answer;
  let allOptions = que_options.children.length;
  if (userAnswer == correctAnswer) {
    userScore += 1;
    answer.classList.add("correct");
  } else {
    answer.classList.add("wrong");
  }
  for (let i = 0; i < allOptions; i++) {
    if (que_options.children[i].textContent == correctAnswer) {
      que_options.children[i].setAttribute("class", "section__option correct");
    }
  }
  for (let i = 0; i < allOptions; i++) {
    que_options.children[i].classList.add("disabled");
  }
  next_btn.style.display = "block";
}

function queCounter(index) {
  const bottom_que = document.querySelector(".total__que");
  let totalQueCountTag =
    '<p><span class="total__que-color">' +
    index +
    '</span> of <span class="total__que-color">' +
    questions.length +
    "</span> Questions</p>";
  bottom_que.innerHTML = totalQueCountTag;
}

function showResultBox() {
  quiz_box.style.display = "none";
  info_box.style.display = "none";
  result_box.style.display = "flex";
  const scoreText = result_box.querySelector(".complete__score");
  if (userScore > 5) {
    let scoreTag =
      'Congratulation! You got <span class="complete__score-color">' +
      userScore +
      '</span> out of <span class="complete__score-color">' +
      questions.length +
      "</span> points.";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 8) {
    let scoreTag =
      'Awesome!, You got <span class="complete__score-color">' +
      userScore +
      '</span> out of <span class="complete__score-color">' +
      questions.length +
      "</span> points.";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      'Unfortunate, You got <span class="complete__score-color">' +
      userScore +
      '</span> out of <span class="complete__score-color">' +
      questions.length +
      "</span> points. Try again and good luck.";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "Time's up";
      next_btn.style.display = "block";
    }
  }
}
