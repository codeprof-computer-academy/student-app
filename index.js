// target all the DOM elements you want to interact with

// menu btn
let menu_btn = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
let main = document.querySelector('main');

menu_btn.addEventListener('click', (event)=>{
    event.preventDefault();
    navbar.classList.toggle('slide-in')
    main.classList.toggle('main-adjust')

})


