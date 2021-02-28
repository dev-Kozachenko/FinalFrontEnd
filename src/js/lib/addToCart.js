import cart from './cart';

function addToCart(product) {
  const articul = product.articul
  if (cart[articul] !== undefined) {
    cart[articul]++
  } else {
    cart[articul] = 1
  }
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default addToCart;
