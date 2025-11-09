// This will need to be made a dropdown if more languages are added. Right now,
// a toggle is better UX.

const button = document.getElementById("lang-toggle");

// detect current language (true = Spanish)
const isSpanish = window.location.pathname.startsWith("/es");

// set button label with fancy flags :)
button.textContent = isSpanish ? "🇺🇸 EN" : "🇪🇸 ES";

button.addEventListener("click", () => {
	const { pathname } = window.location;

	let newPath;
	if (isSpanish) {
		// remove "/es" prefix
		newPath = pathname.replace(/^\/es(\/|$)/, "/");
	} else {
		// add "/es" prefix
		newPath = pathname === "/" ? "/es/" : "/es" + pathname;
	}

	window.location.pathname = newPath;
});