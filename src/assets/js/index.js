const menu = [{
    img: 'assets/img/Espresso.jpg',
    name: 'Espresso',
    alt: 'Café expresso'
},
{
    img: 'assets/img/Mocha.jpg',
    name: 'Mocha',
    alt: 'Café mocha'
},
{
    img: 'assets/img/Espresso.jpg',
    name: 'flate white',
    alt: 'Flate white'
},
{
    img: 'assets/img/IceCoffe.jpg',
    name: 'Ice coffe',
    alt: 'Café gelado'
},
{
    img: 'assets/img/Machiato.jpg',
    name: 'Macchiato',
    alt: 'Café macchiato'
},
{
    img: 'assets/img/Espresso.jpg',
    name: 'Cappuccino',
    alt: 'Café cappuccino'
}
];

const container = document.querySelector('.container__menu-content');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
         <div class="menu-item">
            <img 
             src="${item.img}" 
             width="125"
             height="125" 
             alt="${item.alt}">
            <h2 class="title">${item.name}</h2>
          </div>
        `;
    });
    displayMenu = displayMenu.join("");
    container.innerHTML = displayMenu;
}
