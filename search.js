let input = document.getElementById("searchbar");

function isValidHttpUrl(string) {
	let url;
	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}

	return url.protocol === "http:" || url.protocol === "https:";
}


function search() {
	let query = input.value;
	// input = input.toLowerCase(); // might remove later
	if (query !== "") {
		let url = isValidHttpUrl(query);
		if (url === false) {
			let edited = "https://" + query;
			if (isValidHttpUrl(edited)) {
				window.location.href = edited;
			} else {
				let modif = query.replace(/\s+/g, '+');
				window.location.href = "https://google.com/search?q=" + modif;
			}
		} else {
			window.location.href = query;
		}
	}
}

input.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		search();
	}
})

input.focus();
