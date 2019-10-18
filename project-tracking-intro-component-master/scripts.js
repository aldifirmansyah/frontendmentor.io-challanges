const burger = document.getElementById("burger");
const nav = document.getElementsByTagName("nav")[0];

function burgerClicked() {
	if (burger.classList.contains("open")) {
		burger.classList.remove("open");
		nav.classList.add("close");
	}
	else {
		burger.classList.add("open");
		nav.classList.remove("close");
	}
}