const start_btn = document.querySelector(".start__btn");
const info_box = document.querySelector(".info__box");
const exit_btn = info_box.querySelector(".quit__btn");
const continue_btn = info_box.querySelector(".restart__btn");

start_btn.onclick = () => {
  info_box.style.display = "block";
};

exit_btn.onclick = () => {
  info_box.style.display = "none";
};

continue_btn.onclick = () => {
  const quiz_box = document.querySelector(".quiz__box");
  quiz_box.style.display = "block";
  info_box.style.display = "none";
  showQuestions(0);
  queCounter(1);
};

let que_count = 0;
let que_numb = 1;

const next_btn = document.querySelector(".next__btn");
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
  } else {
    console.log("Questions completed");
  }
};

function showQuestions(index) {
  const que_title = document.querySelector(".section__question");
  const que_options = document.querySelector(".section__options-list");
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
  let userAnswer = answer.textContent;
  let correctAnswer = questions[que_count].answer;
  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    console.log("Answer is correct");
  } else {
    answer.classList.add("wrong");
    console.log("Wrong Answer");
  }
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
