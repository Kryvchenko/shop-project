// product count 

const productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".btn-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent =
      +productsCountEl.textContent + +quantityInput[i].value;
    quantityInput[i].value = 1;
  });
}


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

function showModalByScroll() {
  if (window.pageYOffset >= document.body.scrollHeight / 2 ) {
    openModal ();
    window.removeEventListener("scroll" , showModalByScroll);
  }
}
window.addEventListener("scroll" , showModalByScroll);

// AOS
//AOS.init();

//product quantity - another way

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");

function Counter(
  incrementBtn, 
  decrementBtn, 
  inputField, 
  minCount = 1, 
  maxCount = 5
  ) {
   this.domRefs = {
     incrementBtn,
     decrementBtn,
     inputField,
    };

    this.toggleButtonState = function () {
      let count = this.domRefs.inputField.value;
      this.domRefs.decrementBtn.disabled = count <= minCount;
      this.domRefs.incrementBtn.disabled = count >= maxCount;
    }; 
  
   
    this.toggleButtonState();

    this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
    };
    this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
    };
     
    this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
    );
    this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
   );
  }
  let counter1;
  for (let i = 0; i < quantityInput.length; i++) {
    let counter1 = new Counter(
     incrementBtns[i],
     decrementBtns[i],
     quantityInput[i]
   );
  }
  console.log(counter1);

//product quantity
/*
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");
let minCount = 1;
let maxCount = 5;

for (let i = 0; i < quantityInput.length; i++) {
  let currentValue = +quantityInput[i].value;
  toggleButtonState(currentValue, incrementBtns[i], decrementBtns[i]);
}

function toggleButtonState(count, incrementBtn, decrementBtn) {
  decrementBtn.disabled = count <= minCount;
  incrementBtn.disabled = count >= maxCount;
}
for (let i = 0; i < incrementBtns.length; i++) {
  incrementBtns[i].addEventListener("click", function () {
    let currentValue = +quantityInput[i].value;
    let nextValue = currentValue + 1;
    quantityInput[i].value = nextValue;

    toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
  });
}
for (let i = 0; i < decrementBtns.length; i++) {
  decrementBtns[i].addEventListener("click", function () {
    let currentValue = +quantityInput[i].value;
    let nextValue = currentValue - 1;
    quantityInput[i].value = nextValue;

    toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
  });
}
*/

//half-page trigger modal(костиль)

/*let unBlock = true;
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
});*/

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








