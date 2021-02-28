import addHidden from './addHidden';
import addToCart from './addToCart';

function showModal(item){
    const modal = document.querySelector('.products__modal_wrapper');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    const productsModalHeading = modal.querySelector('.products__modal_heading');
    const productsModalImg = modal.querySelector('.products__modal_img');
    const productsModalAbout = modal.querySelector('.products__modal_text');
    const productsModalPrice = modal.querySelector('.products__price');
    const productsModalBtn = modal.querySelector('.products__btn');
    productsModalHeading.textContent = item.description;
    productsModalImg.setAttribute('src', item.img);
    productsModalAbout.textContent = item.about;
    productsModalPrice.textContent = `$ ${item.price} USD`;
  
    const closeModal = modal.querySelector('.products__modal_close');
    closeModal.addEventListener('click', function(){
      modal.style.display = 'none';
      document.body.style.overflow = 'visible';
    });
    
    productsModalBtn.addEventListener('click', function(event){
      event.preventDefault();
      addToCart(item);
      modal.style.display = 'none';
      document.body.style.overflow = 'visible';
    });
    modal.dataset.articul = item.articul;
    modal.addEventListener('click', addHidden);
  }

  export default showModal;
