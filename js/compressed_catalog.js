var cost=document.querySelector(".sort_cost"),type=document.querySelector(".sort_type"),rate=document.querySelector(".sort_rate"),down=document.querySelector(".down"),up=document.querySelector(".up");cost.addEventListener("click",function(e){e.preventDefault(),cost.classList.add("active_sort"),type.classList.remove("active_sort"),rate.classList.remove("active_sort")}),type.addEventListener("click",function(e){e.preventDefault(),type.classList.add("active_sort"),cost.classList.remove("active_sort"),rate.classList.remove("active_sort")}),rate.addEventListener("click",function(e){e.preventDefault(),rate.classList.add("active_sort"),type.classList.remove("active_sort"),cost.classList.remove("active_sort")}),up.addEventListener("click",function(e){e.preventDefault(),up.classList.add("up-active"),down.classList.remove("down-active")}),down.addEventListener("click",function(e){e.preventDefault(),down.classList.add("down-active"),up.classList.remove("up-active")});