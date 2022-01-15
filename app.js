
const productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".btn-cart");
console.log(addToCartBtns);


for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
      productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
  };


// change like state
const likeBtns = document.querySelectorAll(".like");
likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

$(".slider").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

//modal 
const modal = document.querySelector(".modal");
const moreDetailsBtns = document.querySelectorAll(".btn-details");
const btnClose = document.querySelector(".btn-close");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);


//half-page trigger modal(костиль)
let unBlock = true;
window.addEventListener("scroll", () => {
  const modal = document.querySelector(".modal");
  const btnClose = document.querySelector(".btn-close");
  
  if (document.documentElement.scrollTop > 900 && unBlock == true) {
    modal.classList.add("show");
    unBlock = false;
  } else {
    modal.classList.remove("hide");
  }

  function closeModal() {
    modal.classList.remove("show");
  }
  btnClose.addEventListener("click", closeModal);
});

//trigger on the bottom 

/*window.addEventListener("scroll", () => {
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  console.log(scrollable);

  const scrolled = window.scrollY;
 
  const modal = document.querySelector(".modal");
  const btnClose = document.querySelector(".btn-close");
  
  if (scrolled === scrollable)  {
    modal.classList.add("show");
  } 

  function closeModal() {
    modal.classList.remove("show");
  }
  btnClose.addEventListener("click", closeModal);
});*/




//scloll modal bottom
/*window.addEventListener("scroll", () => {
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  console.log(scrollable);

  const scrolled = window.scrollY;
 
  const modal = document.querySelector(".modal");
  const btnClose = document.querySelector(".btn-close");
  
  if (scrolled === scrollable)  {
    modal.classList.add("show");
  } 

  function closeModal() {
    modal.classList.remove("show");
  }
  btnClose.addEventListener("click", closeModal);
});*/



/*const detailsBtns = document.querySelectorAll(".btn-details");
console.log(detailsBtns);
detailsBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("show");
  });
});*/

//let prevProductCount = +productsCountEl.textContent;
//productsCountEl.textContent = prevProductCount + 1;

/*const likeBtns = document.querySelectorAll(".like");
likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    if(item.classList.contains("liked")) {
      item.classList.remove("liked"); 
    } else {
      item.classList.add("liked"); 
    }
    console.log("liked");
  });
});*/








