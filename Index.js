

const copyText = document.querySelector(".copy-text-button");
const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const encryptButton = document.querySelector(".encrypt-button");
const unencryptButton = document.querySelector(".unencrypt-button");
const errorAlert = document.querySelector(".error-alert");
let boolean = false;
let encryptedText, unencryptedText, subText;
let textContent = false;

function searchWord(leter, position, word, text) {
    subText = leter;
    let positionInText = position;
    for (j = 0; j <= word.length - 1; j++) {
        subText = subText + text.substring(positionInText + 1, positionInText + 2)
        positionInText++
    }
    if (word = subText) {
        boolean = true
    }
}


function encryptText() {
    let textLength = (inputText.value).length;

    if (textLength <= 0) {

        alert('Deberías escribir un mensaje...');
        textContent = false

    } else {

        let text = inputText.value
        text = text.toLowerCase();
        encryptedText = ""

        for (i = 0; i <= textLength - 1; i++) {

            let leter = (text.substring(i, i + 1));

            if (leter == "a") {
                leter = "ai"
            } else if (leter == "e") {
                leter = "enter"
            } else if (leter == "i") {
                leter = "imes"
            } else if (leter == "o") {
                leter = "ober"
            } else if (leter == "u") {
                leter = "ufat"
            } else {
                leter = leter
            }

            encryptedText = encryptedText + leter
        }

        outputText.textContent = encryptedText;
        textContent = true
    }
    changeDisplay();
}


function unencryptText() {
    let textLength = inputText.value.length;

    if (textLength <= 0) {

        alert('Deberías escribir un mensaje...');
        textContent = false

    } else {

        let text = inputText.value;
        text = text.toLowerCase();
        let unencryptedText = "";
        let leter;

        for (i = 0; i <= textLength - 1; i++) {
            leter = text.substring(i, i + 1)
            if (leter == "a") {
                searchWord(leter, i, "ai", text)
                if (boolean) {
                    i = i + 1
                }
            } else if (leter == "e") {
                searchWord(leter, i, "enter", text)
                if (boolean) {
                    i = i + 3
                }
            } else if (leter == "i") {
                searchWord(leter, i, "imes", text)
                if (boolean) {
                    i = i + 3
                }
            } else if (leter == "o") {
                searchWord(leter, i, "ober", text)
                if (boolean) {
                    i = i + 3
                }
            } else if (leter == "u") {
                searchWord(leter, i, "ufat", text)
                if (boolean) {
                    i = i + 3
                }
            }
            else {
                leter = leter
            }
            unencryptedText = unencryptedText + leter;
        }

        outputText.textContent = unencryptedText;
        textContent = true
    }
    changeDisplay();
}   


function changeDisplay() {
    if (textContent) {
        outputText.style.display = "block";
        copyText.style.display = "inline-block";
        errorAlert.style.display = "none";
    } else {
        outputText.style.display = "none";
        copyText.style.display = "none";
        errorAlert.style.display = "block";
    }
}

function updateClipboard(){
        navigator.clipboard.writeText(outputText.textContent);
    }


encryptButton.onclick = encryptText;
copyText.onclick = updateClipboard;
unencryptButton.onclick = unencryptText;
changeDisplay();