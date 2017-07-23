var hamburger = document.getElementById("hamburger");
var sidebar = document.getElementById("sidebar");
var shade = document.getElementById("shade");
var close = document.getElementById("close");

hamburger.addEventListener("click", function() {
	sidebar.classList.add("show-menu");
}, false);

shade.addEventListener("click", function() {
	sidebar.classList.remove("show-menu");
}, false);

close.addEventListener("click", function() {
	sidebar.classList.remove("show-menu");
}, false);