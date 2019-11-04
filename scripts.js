var searchBtn = document.querySelector('.search-btn > a');
var menuBtn = document.querySelector('.hamburger-menu a');
let scrollbarSwitch = false;

function activateWithClass(btn) {
	console.log(btn);
	var htmlTag = document.querySelector('html');
	htmlTag.classList.toggle(`j-${btn.dataset.actionType}`);
}
searchBtn.addEventListener('click',e => activateWithClass(e.target));
menuBtn.addEventListener('click',e => activateWithClass(e.target));
