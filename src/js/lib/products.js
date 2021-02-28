import productList from './productList';
import createElem from './createElem';
import showModal from './modal';

function loadProducts(){
    const productsWrapper = document.getElementById("products__wrapper");
      productList.forEach(function(item){
          const productsItem = createElem('div', 'products__item');
          const productsCol = createElem('div', 'products__col');
          const productsHeading = createElem('h3', 'products__heading');
          productsHeading.textContent = item.description;
          const productsImg = createElem('img', 'products__img');
          productsImg.setAttribute('src', item.img);
          productsImg.setAttribute('alt', item.description);
  
          const priceWrapper = createElem('div', 'products__price_wrapper');
          const price = createElem('span', 'products__price');
          price.textContent = `$ ${item.price} USD`;
          const productsBtn = createElem('a', 'products__btn');
          productsBtn.setAttribute('href', '#');
          productsBtn.dataset.articul = item.articul;
          productsBtn.textContent = 'Read more';
  
          priceWrapper.appendChild(price);
          priceWrapper.appendChild(productsBtn);
          productsItem.appendChild(productsHeading);
          productsItem.appendChild(productsImg);
          productsItem.appendChild(priceWrapper);
          productsCol.appendChild(productsItem)
          productsWrapper.appendChild(productsCol);
          productsBtn.addEventListener('click', function(event){
            event.preventDefault();
            showModal(item);
          });
      }) 
  }

  export default loadProducts;
