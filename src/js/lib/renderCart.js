import cart from './cart';
import productList from './productList';
import createElem from './createElem';

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

function renderCart() {

    function removeCartItem() {
        this.closest('.cart__item').remove()
        delete cart[this.articul]
        console.log(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const cartWrapper = document.getElementById('cart__wrapper');
    const carts = cartWrapper.querySelector('.cart');
    const cartCount = document.getElementById('cart__count');
    const totalSum = cartWrapper.querySelector('.cart__totalSum');

    let sumCount = 0;
    let sumPrice = 0;
    for (let key in cart) {
        let item = productList.find(function (item) {
            return item.articul === +key
        })

        const cartNav = createElem('div', 'cart__nav');
        const cartRemove = createElem('button', 'cart__nav_btn');
        cartRemove.textContent = 'x';
        cartRemove.addEventListener('click', function () {
            this.closest('.cart__item').remove()
            delete cart[item.articul]
            localStorage.setItem('cart', JSON.stringify(cart))
        });
        const cartPlus = createElem('button', 'cart__nav_btn');
        cartPlus.textContent = '+';
        cartPlus.addEventListener('click', function () {
            cart[item.articul]++
            localStorage.setItem('cart', JSON.stringify(cart));
            cartCount.textContent = `${cart[key]} items`;
        });

        const cartMinus = createElem('button', 'cart__nav_btn');
        cartMinus.textContent = '-';
        cartMinus.addEventListener('click', function () {
            if (cart[item.articul] > 1) {
                cart[item.articul]--
                localStorage.setItem('cart', JSON.stringify(cart));
                cartCount.textContent = `${cart[key]} items`;
            } else {
                this.closest('.cart__item').remove()
                delete cart[item.articul]
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        });

        cartNav.appendChild(cartRemove);
        cartNav.appendChild(cartPlus);
        cartNav.appendChild(cartMinus);

        const cartItem = createElem('div', 'cart__item');
        const cartImg = createElem('img', 'cart__img')
        cartImg.setAttribute('src', item.img);
        const cartHeading = createElem('h3', 'cart__heading');
        cartHeading.textContent = item.name;
        const cartCount = createElem('span', 'cart__count');
        cartCount.textContent = `${cart[key]} items`;

        const cartPrice = createElem('p', 'cart__price');
        cartPrice.textContent = `$ ${item.price} USD`;

        cartItem.appendChild(cartNav);
        cartItem.appendChild(cartImg);
        cartItem.appendChild(cartHeading);
        cartItem.appendChild(cartPrice);
        cartItem.appendChild(cartCount);

        carts.appendChild(cartItem);
        sumPrice += cart[key] * item.price;
        sumCount += cart[key];
    }

    
    if (isEmpty(cart)) {
        totalSum.textContent = 'Cart is empty';
        cartCount.textContent = '';
    } else {
        totalSum.textContent = `Total value of goods $ ${sumPrice.toFixed(2)} USD`;
        cartCount.textContent = `(${sumCount})`;
    }

}

export default renderCart
