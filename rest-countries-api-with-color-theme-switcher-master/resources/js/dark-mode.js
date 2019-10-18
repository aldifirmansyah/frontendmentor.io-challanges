let isDarkMode = false;
const moon = document.getElementById("moon");
const elements = document.getElementsByClassName("element");
const backgrounds = document.getElementsByClassName("background");
const texts = document.getElementsByClassName("text");
const inputs = document.getElementsByClassName("input");

const searchIcon = document.getElementById("search-icon");

if (localStorage.getItem("isDarkMode") === null || localStorage.getItem("isDarkMode") === "false") {
	setLightMode();
}
else {
	setDarkMode();
}

function toggleSearchIcon(mode) {
	if (searchIcon === null) {
		return;
	}
	searchIcon.src = mode === "dark" ? "resources/images/dark-search.svg" : "resources/images/light-search.svg";
}

function toggleClasses(nodeList, oldClass, newClass) {
	for(let i = 0; i < nodeList.length; i++) {
		let classes = nodeList[i].classList;
		classes.remove(oldClass);
		classes.add(newClass);
	}
}

function setDarkMode() {
	moon.src = "resources/images/moon-solid.svg";
	toggleClasses(elements, "light-element", "dark-element");
	toggleClasses(backgrounds, "light-background", "dark-background");
	toggleClasses(texts, "light-text", "dark-text");
	toggleClasses(inputs, "light-input", "dark-text");
	toggleSearchIcon("dark");
	isDarkMode = true;
	localStorage.setItem("isDarkMode", isDarkMode);
}

function setLightMode() {
	moon.src = "resources/images/moon-regular.svg";
	toggleClasses(elements, "dark-element", "light-element");
	toggleClasses(backgrounds, "dark-background", "light-background");
	toggleClasses(texts, "dark-text", "light-text");
	toggleClasses(inputs, "dark-text", "light-input");
	toggleSearchIcon("light");
	isDarkMode = false;
	localStorage.setItem("isDarkMode", isDarkMode);
}

function toggleTheme() {
	// set to light mode
	if (isDarkMode) {
		setLightMode();
	}

	// set to dark mode
	else {
		setDarkMode();
	}
}