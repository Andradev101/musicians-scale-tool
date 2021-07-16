const container = document.querySelector(".container");
const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B","Choose note"];
const frets = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
const fretCounting = document.querySelector(".fret-counting")
//all 12 possible notes
const strings = ["1st","2nd","3rd","4th","5th","6th"];
var repeatedNotes = new Array(3).fill(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]).flat();
//repeat notes[] 3 times and flat it to only one array, called reapeatedNotes[]
var highlightMethod = ["Single note", "Major chord", "Minor chord", "Power chord","Minor Pentatonic","Minor Pentatonic blues"]
//every hilight option on the user side

let k = 0;
for (let i = 0; i < strings.length ; i++) {
    const stringContainer = document.createElement("div");
    container.append(stringContainer);
    stringContainer.classList.add("string");
    
    let jValue = k
    switch (jValue) {
        case 5:
            jValue = 4;   
            break;
        case 4:
            jValue = 9;   
            break;
        case 3:
            jValue = 2;   
            break;
        case 2:
            jValue = 7;   
            break;
        case 1:
            jValue = 11;   
            break;
        case 0:
            jValue = 4;   
            break;
    } //starting note
    k++;  

    for (let j = jValue; j <= jValue+22; j++) {
        const noteBox = document.createElement("div");
        const noteName = document.createElement("p");
        stringContainer.append(noteBox)
        noteBox.append(noteName)
        noteBox.classList.add("note");
        noteName.innerText = repeatedNotes[j]
    }   //notes iteration
}

let counter = 0;
frets.forEach(fretNumber => {
    fretNumber = document.createElement("p");
    fretNumber.innerText = counter;
    fretCounting.append(fretNumber)
    counter++
});

const noteValue = document.querySelectorAll(".note p")
const noteDiv = document.querySelectorAll(".note")
//note divs for styling