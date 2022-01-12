//console.log("text");
const productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".btn-cart");
console.log(addToCartBtns);


for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
      productsCountEl.textContent = `${event.detail}`;
    });
  };


 const productsLike = document.getElementById("heart");
 console.log(productsLike);

 const heartLikeBtns = document.querySelectorAll(".like.small-btn");
 console.log(heartLikeBtns);
 
 heartLikeBtns.addEventListener("click", function () {
  console.log("clicked");
  document.getElementById("heart").style.backgroundColor = "#2c71b8";

});
