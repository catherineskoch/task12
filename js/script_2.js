const inputAge = document.getElementById("inputAge");
const checkButton = document.getElementById("checkButton");
const resultArea = document.getElementById("result");

checkButton.addEventListener("click", () => {
  if (!isNaN(inputAge.value)) {
    resultArea.value =
      inputAge.value >= 18 ? "Доступ разрешен" : "Доступ запрещен";
  } else {
    result.value = "Введите возраст ЧИСЛОМ";
  }
});
