let menuHamIcone = document.querySelector(".menu-ham-icone"),
  menuHum = document.querySelector(".menu-ham"),
  navItem = document.querySelectorAll(".nav-item a");
  header = document.querySelector("header");

/* header part */
window.addEventListener("scroll", function () {
  if (this.scrollY > 590) {
    header.classList.add("forHeader");
    let i;
    for (i = 0; i < navItem.length; i++) {
      navItem[i].classList.add("nav-item-add");
      console.log(navItem[i]);
    }
  } else {
    header.classList.remove("forHeader");
    for (i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove("nav-item-add");
      console.log(navItem[i]);
    }
  }
});

/* menu icon controll */
let help = false;
menuHamIcone.addEventListener("click", function () {
  if (help == false) {
    menuHamIcone.innerHTML = '<i class="ri-close-large-line"></i>';
    menuHum.classList.add("show");
    help = true;
  } else if (help == true) {
    menuHamIcone.innerHTML = ' <i class="ri-menu-line"></i>';
    menuHum.classList.remove("show");
    help = false;
  }
});
addEventListener("resize", () => {
  if (window.innerWidth >= 1150) {
    menuHamIcone.innerHTML = ' <i class="ri-menu-line"></i>';
    menuHum.classList.remove("show");
    help = false;
  }
});

/* shop now */
let threeProducts = document.querySelectorAll(".three-products li img"),
  bigProductImg = document.getElementById("big-img"),
  productName = document.querySelector(".product-name");

threeProducts.forEach((a) =>
  a.addEventListener("click", function () {
    productName.innerHTML = a.name;
    bigProductImg.src = a.src;
  })
);
