burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
right=document.querySelector('.right-navbar');
nav=document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
	nav.classList.toggle('v-class-resp');
	right.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');
})