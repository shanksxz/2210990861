const inputBox = document.querySelector("#input");
const calculateBtn = document.querySelector("#calc");
const clearBtn = document.querySelector("#clear");
const resWords = document.querySelector("#res-words");
const resSentences = document.querySelector("#res-sentences");
const resCharacters = document.querySelector("#res-characters");

calculateBtn.addEventListener("click", () => {
    const value = inputBox.value;
    const words = value.trim().split(/\s+/).length;
    const sentences = value.trim().split("\n").length;
    const characters = value.trim().split("").length;
    resCharacters.innerHTML = characters
    resSentences.innerHTML = sentences
    resWords.innerHTML = words
})

clearBtn.addEventListener("click", () => {
    inputBox.value = "";
})