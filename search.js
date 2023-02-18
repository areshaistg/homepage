const input = document.getElementById("searchbar");
const linkAlert = document.getElementById("link-alert");

function isValidHttpUrl(string) {
	let url;
	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}
	return url.protocol === "http:" || url.protocol === "https:";
}

function looksLikeALink(str) {
	let match = str.match(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/gm);
	if (match) {
		return match[0] === str;
	}
	return false;
}

function search() {
	const query = input.value;
	// input = input.toLowerCase(); // might remove later
	if (query !== "") {
		let url = isValidHttpUrl(query);
		if (url === false) {
			if (looksLikeALink(query)) {
				window.location.href = "https://" + query;
			} else {
				let modif = query.replace(/\s+/g, '+');
				window.location.href = "https://google.com/search?q=" + modif;
			}
		} else {
			window.location.href = query;
		}
	}
}

const defaultLinkAlertDisplay = linkAlert.style.display;

input.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		search();
	} else {
		if (looksLikeALink(input.value)) {
			linkAlert.classList.add("active");
		} else {
			linkAlert.classList.remove("active");
		}
	}
})

input.focus();
