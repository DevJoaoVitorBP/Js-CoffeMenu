import menu from '../js/menu.js';

const container = document.querySelector('.container__menu-content');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
         <div class="menu-item">
         <a href="./coffe.html?id=${item.id}">
            <img 
             src="${item.img}" 
             width="125"
             height="125" 
             alt="${item.alt}">
            <h2 class="title">${item.name}</h2>
          </a>
            </div>
        `;
    });
    displayMenu = displayMenu.join("");
    container.innerHTML = displayMenu;
}





