let cart = {};
checkCart();

function checkCart() {
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
  }

  export default cart
