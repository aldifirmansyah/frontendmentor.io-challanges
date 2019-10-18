const burgerChildren = document.getElementById("burger").children;
const burgerClose = burgerChildren[0];
console.log(burgerClose);
const burgerOpen = burgerChildren[1];
const nav = document.getElementsByTagName("nav")[0];

function burgerClicked() {
	if (burgerClose.classList.contains("hidden")) {
		burgerClose.classList.remove("hidden");
		burgerOpen.classList.add("hidden");
		nav.classList.add("close");
	}
	else {
		burgerClose.classList.add("hidden");
		burgerOpen.classList.remove("hidden");
		nav.classList.remove("close");
	}
}