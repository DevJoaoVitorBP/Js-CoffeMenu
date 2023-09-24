import menu from './menu.js';

// Get the id from the url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const container = document.querySelector('.product__container');
let count = 1; // Intial value of the counter


window.addEventListener('DOMContentLoaded', function () {
  const product = menu.find(function (item) {
    return item.id === parseInt(id);
  });
  displayProduct(product);

  // add event listener to minus button and plus button
  const minusButton = document.querySelector('.counter__container-btn--minus');
  const plusButton = document.querySelector('.counter__container-btn--plus');

  // add event listener to minus button
  minusButton.addEventListener('click', function () {
    if (count > 1) {
      count--;
      updatePrice(product.price);
    }
  });

  // add event listener to plus button
  plusButton.addEventListener('click', function () {
    count++;
    updatePrice(product.price);
  });

  // add event listener to order button
  const orderButton = document.querySelector('.price__container-btn');
  orderButton.addEventListener('click', function () {
    alert(`Você pediu ${count} ${product.name}(s)`);
  });
});

// Display the product
function displayProduct(product) {
  let displayProduct = `
    <div class="coffe__container">
      <div class="coffe__container-content">
        <a href="./index.html"><img src="assets/img/ArrowLeft.svg" alt=""></a>
      </div>
      <img src="${product.img}" 
           alt="${product.alt}">
    </div>
    <div class="description__container">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
    </div>
    <div class="counter__container">
      <h2>Quantidade</h2>
      <div class="counter__container-btn">
        <button class="counter__container-btn--minus">-</button>
        <span id="value">${count}</span>
        <button class="counter__container-btn--plus">+</button>
      </div>
    </div>
    <div class="price__container">
      <div class="price__container-value">
        <h2>Preço total</h2>
        <p id="totalPrice">R$ ${product.price.toFixed(2)}</p>
      </div>
      <div class="price__container-btn">
        <button class="price__container-btn--button">Pedir agora</button>
      </div>
    </div>
  `;
  container.innerHTML = displayProduct;
}

// function to update the price
function updatePrice(basePrice) {
  const totalPriceElement = document.getElementById('totalPrice');
  const valueElement = document.getElementById('value');

  const totalPrice = (basePrice * count).toFixed(2);

  totalPriceElement.textContent = `R$ ${totalPrice}`;
  valueElement.textContent = count;
}