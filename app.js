console.log("text");
const productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

const addToCartsBtns = document.querySelectorAll(".btn-cart");
console.log(addToCartsBtns);


for (let i = 0; i < addToCartsBtns.length; i++) {
    addToCartsBtns[i].addEventListener("click", function () {
      console.log("clicked");
    });
  };

