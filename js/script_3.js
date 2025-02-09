const inputGrade = document.getElementById("inputGrade");
const checkButton = document.getElementById("checkButton");
const resultArea = document.getElementById("result");
let grade = 0;

inputGrade.addEventListener("change", function () {
  grade = parseInt(inputGrade.value);
});

checkButton.addEventListener("click", () => {
  switch (grade) {
    case 2:
      result.value = "Требуется пересдача";
      break;
    case 3:
      result.value = "Удовлетворительно";
      break;
    case 4:
      result.value = "Хорошо";
      break;
    case 5:
      result.value = "Отлично!";
      break;

    default:
      result.value = "Что-то пошло не так.";
      break;
  }
});
