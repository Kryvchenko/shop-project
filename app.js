console.log("text");
const productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

const addToCardsBtns = document.querySelectorAll(".btn-card");
console.log(addToCardsBtns);


for (let i = 0; i < addToCardsBtns.length; i++) {
    addToCardsBtns[i].addEventListener("click", function () {
      console.log("clicked");
    });
  };

