var cost = document.querySelector(".sort_cost");
var type = document.querySelector(".sort_type");
var rate = document.querySelector(".sort_rate");
var down = document.querySelector(".down");
var up = document.querySelector(".up");

cost.addEventListener("click", function (evt) {
  evt.preventDefault();
  cost.classList.add("active_sort");
  type.classList.remove("active_sort");
  rate.classList.remove("active_sort");
})

type.addEventListener("click", function (evt) {
  evt.preventDefault();
  type.classList.add("active_sort");
  cost.classList.remove("active_sort");
  rate.classList.remove("active_sort");
})

rate.addEventListener("click", function (evt) {
  evt.preventDefault();
  rate.classList.add("active_sort");
  type.classList.remove("active_sort");
  cost.classList.remove("active_sort");
})

up.addEventListener("click", function (evt) {
  evt.preventDefault();
  up.classList.add("up-active");
  down.classList.remove("down-active");
})

down.addEventListener("click", function (evt) {
  evt.preventDefault();
  down.classList.add("down-active");
  up.classList.remove("up-active");
})
