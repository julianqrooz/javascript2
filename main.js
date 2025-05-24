let tabs = document.querySelectorAll(".tabs li");
let tabsarray = Array.from(tabs);
// console.log(tabsarray);
let divs = document.querySelectorAll(".content > div");
let divsarray = Array.from(divs);
// console.log(divsarray);

tabsarray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsarray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsarray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
