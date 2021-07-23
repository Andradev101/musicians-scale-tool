let rootNoteValue = document.getElementById("rootNote");
let highlightMethodValue = document.getElementById("highlightMethod");
let sumbitBtn = document.querySelector("#submitBtn");

for (let counter = notes.length-1; counter >= 0; counter--) {
    rootNoteValue.insertAdjacentHTML("afterbegin",
    `<option value="${highlightMethod[counter]}"></option> `);  
}
let rootNoteValueChilds = rootNoteValue.children; //getting all form childs elements
nameNoteForm()
//Shows every note in the form

for (let counter = highlightMethod.length-1; counter >= 0; counter--) {
    highlightMethodValue.insertAdjacentHTML("afterbegin",
    `<option value="${highlightMethod[counter]}"></option> `);
}
nameHigilightMethodForm()
//Shows every highlighted mode in the form

function nameNoteForm() {
    for (let counter = 0; counter < rootNoteValue.length; counter++) {
        let element = rootNoteValueChilds[counter];
        element.innerText = notes[counter];
        element.id = counter;
    } //naming them out from notes[] index.js    
}

function nameHigilightMethodForm() {
    for (let counter = 0; counter < highlightMethodValue.length; counter++) {
        let element = highlightMethodValue[counter];
        element.innerText = highlightMethod[counter];
    } //naming them out from highlightMethod[] in index.js    
}