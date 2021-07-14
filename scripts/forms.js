let rootNoteValue = document.getElementById("rootNote");
let sumbitBtn = document.querySelector("#submitBtn")
//let selected = document.getElementById('rootNote');

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
    element.id = counter;
} //naming them out

//rootNoteValue.addEventListener('mousedown', wipeOut)

function wipeOut(){    
    noteDiv.forEach(element => {
    element.style.backgroundColor = '#6e6e6e' 
    resetNoteStyle()
    })    
}

function getUserOption(selected){
    wipeOut()
    var res = selected.options[selected.selectedIndex].value
    console.log(res);
    
    var majorNotesId = 
    [   
        parseInt(selected.options[selected.selectedIndex].id),
        parseInt(selected.options[selected.selectedIndex].id)+4,
        parseInt(selected.options[selected.selectedIndex].id)+7,
    ]//get the root note id and other steps
    
    var majorNotesNames =[ 
        repeatedNotes[majorNotesId[0]],
        repeatedNotes[majorNotesId[1]],
        repeatedNotes[majorNotesId[2]],
    ]//to get the names of the notes

    console.log(majorNotesNames);

    noteDiv.forEach(element => {
        if (element.innerText == majorNotesNames[0]) {
            element.style.backgroundColor = 'red'
            element.style.opacity = 1
        }else if (element.innerText == majorNotesNames[1]) {
            element.style.backgroundColor = '#f90'
            element.style.opacity = 1
        }else if (element.innerText == majorNotesNames[2]) {
            element.style.backgroundColor = '#f50'
            element.style.opacity = 1
        }
    }); //compares the names and if its true, highlight em   
}