import myTabs from './lib/navTabs';
myTabs()

import navAccord from './lib/navAccord';
navAccord();

import reviewsSlider from './lib/reviewsSlider';
reviewsSlider();

import loadProducts from './lib/products';
loadProducts();

import renderCart from './lib/renderCart'
renderCart();

//открыть корзины
const cartBtn = document.getElementById('cart__btn');
const cartWrapper = document.getElementById('cart__wrapper');
cartBtn.addEventListener('click', function () {
  cartWrapper.classList.toggle('u-display-none');
})

//закрыть корзину
const cartClose = document.getElementById('cart__close');
cartClose.addEventListener('click', function () {
  cartWrapper.classList.toggle('u-display-none');
})

// плавный скролл
const anchors = document.querySelectorAll('a[href*="#scroll"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const moveUp = document.getElementById('moveUp');
  window.addEventListener('scroll', function() {
    moveUp.hidden = (pageYOffset < document.documentElement.clientHeight);
  });

  function showElement(element){
    element.style.display = 'flex';
  }

  //search
  const searchInput = document.querySelector('.search_input');
  const seachBtn = document.querySelector('.search_btn');

  seachBtn.addEventListener('click', function(){
    console.log(searchInput.value)
   if (getComputedStyle(searchInput).width === '10px') {
    searchInput.style.width = '100%';
    searchInput.style.opacity = '1';
    } else if (searchInput.value === '') {
      searchInput.style.width = '0';
      searchInput.style.opacity = '0';
   } 
  })

