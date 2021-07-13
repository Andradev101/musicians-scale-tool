let userChooseNote = parseInt(prompt("Escolha uma nota: 1- C,2- C#,3- D,4- D#,5- E,6- F,7- F#,8- G,9- G#,10- A,11- A#,12- B"))
let majorChord = [repeatedNotes[userChooseNote],repeatedNotes[userChooseNote+4],repeatedNotes[userChooseNote+7]]

// noteDiv.forEach(noteValue => {
//     noteValue.id = noteValue.innerText;
//     if (noteValue.innerText == "E") {
//         noteValue.style.backgroundColor = "red";   
//     }else if(noteValue.id == "G"){
//         noteValue.style.backgroundColor = "green";
//     }
// });
console.log(majorChord); 
majorChord.forEach(element => {
    console.log(element);    
});

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