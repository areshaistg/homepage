const title = document.getElementsByClassName("title")[0];

const createWord = (text, index) => {
	const word = document.createElement("span");

	word.innerHTML = `${text} `;

	word.classList.add("title-char");
	word.style.animationDelay = `${index * 40}ms`;

	return word
}

const addWord = (text, index) => title.appendChild(createWord(text, index));

const createTitle = text => text.split("").map(addWord);

const titleText = "homepage";
createTitle(titleText);
title.style.animationDelay = `${(titleText.length + 1) * 40}ms`;
