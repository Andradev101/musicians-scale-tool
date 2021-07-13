const container = document.querySelector(".container");
const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
//all 12 possible notes
const strings = ["1st","2nd","3rd","4th","5th","6th"];
var repeatedNotes = new Array(3).fill(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]).flat();
//repeat notes[] 3 times and flat it to only one array, called reapeatedNotes[]

for (let i = 0; i < strings.length; i++) {
    const stringContainer = document.createElement("div");
    container.append(stringContainer);
    stringContainer.classList.add("string");
    stringContainer.classList.add(strings[i]);
    //string iteration

    let jValue = i
    switch (jValue) {
        case 0:
            jValue = 4;   
            break;
        case 1:
            jValue = 9;   
            break;
        case 2:
            jValue = 2;   
            break;
        case 3:
            jValue = 7;   
            break;
        case 4:
            jValue = 11;   
            break;
        case 5:
            jValue = 4;   
            break;
    }   //starting note

    for (let j = jValue; j <= jValue+11; j++) {
        const noteBox = document.createElement("div");
        const noteName = document.createElement("p");
        stringContainer.append(noteBox)
        noteBox.append(noteName)
        noteBox.classList.add("note");
        noteName.innerText = repeatedNotes[j]   
    }   //notes iteration
}

const noteValue = document.querySelectorAll(".note p")
const noteDiv = document.querySelectorAll(".note")

noteDiv.forEach(noteValue => {
    noteValue.id = noteValue.innerText;
    if (noteValue.id == "A") {
        noteValue.style.backgroundColor = "red";   
    }
});









