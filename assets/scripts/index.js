//Getting the button element
let btn = document.getElementById('btn');

//Getting the text input value
let text = document.getElementById("text-area");

//Getting the display text of how many words were typed
let displayText = document.getElementById('words-count');

//Getting how many words were typed

//Adding a listener event when pressing the button
btn.addEventListener('click', () => {
	//Getting how many words were typed
	let wordCount = text.value.split(' ').length;

	//Displaying it only if the text.value is not empty
	if (text.value !== "") {
		displayText.innerText = `Você digitou ${wordCount} palavras`;
	}
	
})



