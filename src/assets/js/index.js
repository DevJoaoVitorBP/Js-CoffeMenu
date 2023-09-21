const menu = [{
    img : 'assets/img/expresso.jpg',
    name: 'Expresso',
    alt: 'Café expresso'
},
{
    img: 'assets/img/mocha.jpg',
    name: 'Mocha',
    alt: 'Café mocha'
},
{
    img: 'assets/img/Latte Machito.jpg',
    name: 'Latte machito',
    alt: 'Café latte machito'
},
{
    img: 'assets/img/Ice coffe.jpg',
    name: 'Ice coffe',
    alt: 'Café gelado'
},
{
    img: 'assets/img/Macchiato.jpg',
    name: 'Macchiato',
    alt: 'Café macchiato'
},
{
    img: 'assets/img/Cappuccino.jpg',
    name: 'Cappuccino',
    alt: 'Café cappuccino'    
}
];

const container = document.querySelector('.container__menu-content');

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        return `
         <div class="container__menu-content">
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

