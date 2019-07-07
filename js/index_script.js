var button = document.querySelector(".hotel_search_button");
var mwindow = document.querySelector(".movement_window");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  mwindow.classList.toggle("mvindow_hiden");
})
