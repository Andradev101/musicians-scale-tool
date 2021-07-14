rootNoteValue.insertAdjacentHTML("afterbegin", `
    <option value="${repeatedNotes[0]}"></option>
    <option value="${repeatedNotes[1]}"></option>
    <option value="${repeatedNotes[2]}"></option>
    <option value="${repeatedNotes[3]}"></option>
    <option value="${repeatedNotes[4]}"></option>
    <option value="${repeatedNotes[5]}"></option>
    <option value="${repeatedNotes[6]}"></option>
    <option value="${repeatedNotes[7]}"></option>
    <option value="${repeatedNotes[8]}"></option>
    <option value="${repeatedNotes[9]}"></option>
    <option value="${repeatedNotes[10]}"></option>
    <option value="${repeatedNotes[11]}"></option>
`)//adding note names dynamically through the array
let rootNoteValueChilds = rootNoteValue.children;
//getting all form children elements

for (let counter = 0; counter < rootNoteValue.length; counter++) {
    let element = rootNoteValueChilds[counter];
    element.innerText = notes[counter];
    element.id = [counter];
} //naming them out

// noteDiv.forEach(noteValue => {
//     noteValue.id = noteValue.innerText;
//     if (noteValue.innerText == majorChord[0]) {
//         noteValue.style.backgroundColor = "red";   
//         noteValue.style.opacity = "1"; 
//     }else if (noteValue.innerText == majorChord[1]) {
//         noteValue.style.backgroundColor = "rgb(204 0 85)"; 
//         noteValue.style.opacity = "1";   
//     }else if (noteValue.innerText == majorChord[2]) {
//         noteValue.style.backgroundColor = "rgb(228 16 192)";
//         noteValue.style.opacity = "1";    
//     }
// });//chord notes highlight functions
const sumbiBtn = document.querySelector("#submitBtn");

sumbiBtn.addEventListener('mousedown', wipeOut);
sumbiBtn.addEventListener('mouseup', highlightNotes);

function wipeOut(){
    noteDiv.forEach(noteValue => {
        noteValue.id = noteValue.innerText;
        if (noteValue.innerText == majorChord[0]) {
            noteValue.style.backgroundColor = "rgb(110, 110, 110)";   
            noteValue.style.opacity = "1"; 
        }else if (noteValue.innerText == majorChord[1]) {
            noteValue.style.backgroundColor = "rgb(110, 110, 110)"; 
            noteValue.style.opacity = "1";   
        }else if (noteValue.innerText == majorChord[2]) {
            noteValue.style.backgroundColor = "rgb(110, 110, 110)";
            noteValue.style.opacity = "1";    
        }
    });//chord notes highlight functions

    stringContainer.forEach(element => {
        element.childNodes[0].style.backgroundColor = "green"      
        element.childNodes[0].style.opacity = "0.3"      
        element.childNodes[12].style.backgroundColor = "green"      
    });
}

function highlightNotes(){
    noteDiv.forEach(noteValue => {
        noteValue.id = noteValue.innerText;
        if (noteValue.innerText == majorChord[0]) {
            noteValue.style.backgroundColor = "red";   
            noteValue.style.opacity = "1"; 
        }else if (noteValue.innerText == majorChord[1]) {
            noteValue.style.backgroundColor = "rgb(204 0 85)"; 
            noteValue.style.opacity = "1";   
        }else if (noteValue.innerText == majorChord[2]) {
            noteValue.style.backgroundColor = "rgb(228 16 192)";
            noteValue.style.opacity = "1";    
        }
    });
}
