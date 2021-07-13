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
  showQuestions(2);
};

let que_count = 0;

function showQuestions(index) {
  const que_title = document.querySelector(".section__question");
  const que_options = document.querySelector(".section__option");
  let que_tag = "<span>" + questions[index].question + "</span>";
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
}
