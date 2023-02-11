const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');


const data = [{
    image: './img/drink.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/food.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/tired.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/hurt.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/happy.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/angry.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/sad.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/scared.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/outside.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/home.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/school.jpg',
    text: "I'm Thirsty"
},
{
    image: './img/grandma.jpg',
    text: "I'm Thirsty"
},

];

data.forEach(createBox);

function createBox(item) {
 const box = document.createElement('div');

 const { image , text} = item;

 box.classList.add('box');
 box.innerHTML = `
   <img src="${image}" alt="${text}" />
   <p class="info">${text}</p>
 `;

 main.appendChild(box);
}