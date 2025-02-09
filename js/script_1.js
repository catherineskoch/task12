const fridgeClosed = document.getElementById("fridgeClosed"); // закрытый холодильник
const openButton = document.getElementById("openButton"); //кнопка открыть
const fridgeOpenEmpty = document.getElementById("fridgeOpenEmpty"); //открытый пустой
const fridgeOpenFull = document.getElementById("fridgeOpenFull"); // открытый полный
const closeEmptyButton = document.getElementById("closeEmptyButton"); // кнопка закрыть для пустого
const closeFullButton = document.getElementById("closeFullButton"); // кнопка закрыть для полного

openButton.addEventListener("click", () => {
  const randomResult = Math.floor(Math.random() * 2); // (0 или 1)
  if (randomResult > 0) {
    fridgeClosed.classList.add("hidden");
    fridgeOpenFull.classList.remove("hidden");
  } else {
    fridgeClosed.classList.add("hidden");
    fridgeOpenEmpty.classList.remove("hidden");
  }
});

closeEmptyButton.addEventListener("click", () => {
  fridgeOpenEmpty.classList.add("hidden");
  fridgeClosed.classList.remove("hidden");
});

closeFullButton.addEventListener("click", () => {
  fridgeOpenFull.classList.add("hidden");
  fridgeClosed.classList.remove("hidden");
});
