// hamburger menu
$(".menu").on("click", hamToggle);

$(".nav-list__link").on("click", hamToggle);

function hamToggle() {
	$(".menu").toggleClass("menu--open");
	$(".nav").toggleClass("nav--active");
}
