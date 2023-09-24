import menu from './menu.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const container = document.querySelector('.product__container');

window.addEventListener('DOMContentLoaded', function () {
  const product = menu.find(function (item) {
    return item.id === parseInt(id);
  });
  displayProduct(product);
});

function displayProduct(product) {
  let displayProduct = `
    <div class="coffe__container">
      <div class="coffe__container-content">
        <a href="./index.html"><img src="assets/img/ArrowLeft.svg" alt=""></a>
      </div>
      <img src="${product.img}" 
           alt="${product.alt}">
      >
    </div>
    <div class="description__container">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
    </div>
    <div class="counter__container">
      <h2>Quantidade</h2>
      <div class="counter__container-btn">
        <button class="counter__container-btn--minus">-</button>
        <span id="value">0</span>
        <button class="counter__container-btn--plus">+</button>
      </div>
    </div>
    <div class="price__container">
      <div class="price__container-value">
        <h2>Preço total</h2>
        <p>R$ ${product.price.toFixed(2)}</p>
      </div>
      <div class="price__container-btn">
        <button class="price__container-btn--button">Pedir agora</button>
      </div>
    </div>
  `;
  container.innerHTML = displayProduct;
}