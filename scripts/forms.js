let rootNoteValue = document.getElementById("rootNote");
let highlightMethodValue = document.getElementById("highlightMethod");
let sumbitBtn = document.querySelector("#submitBtn")

var majorNotesNames = [];
//let selected = document.getElementById('rootNote');
highlightMethodValue.insertAdjacentHTML("afterbegin",`
    <option value="${highlightMethod[0]}"></option>  
    <option value="${highlightMethod[1]}"></option>  
    <option value="${highlightMethod[2]}"></option>  
`)
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

for (let counter = 0; counter < highlightMethodValue.length; counter++) {
    let element = highlightMethodValue[counter];
    element.innerText = highlightMethod[counter];
}

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
    
    notesId = 
    [   
        parseInt(selected.options[selected.selectedIndex].id),
        parseInt(selected.options[selected.selectedIndex].id)+1,
        parseInt(selected.options[selected.selectedIndex].id)+2,
        parseInt(selected.options[selected.selectedIndex].id)+3,
        parseInt(selected.options[selected.selectedIndex].id)+4,
        parseInt(selected.options[selected.selectedIndex].id)+5,
        parseInt(selected.options[selected.selectedIndex].id)+6,
        parseInt(selected.options[selected.selectedIndex].id)+7,
        parseInt(selected.options[selected.selectedIndex].id)+8,
        parseInt(selected.options[selected.selectedIndex].id)+9,
        parseInt(selected.options[selected.selectedIndex].id)+10,
        parseInt(selected.options[selected.selectedIndex].id)+11,
    ]//get the root note id and other steps
    
    majorNotesNames =[ 
        repeatedNotes[notesId[0]],
        repeatedNotes[notesId[1]],
        repeatedNotes[notesId[2]],
        repeatedNotes[notesId[3]],
        repeatedNotes[notesId[4]],
        repeatedNotes[notesId[5]],
        repeatedNotes[notesId[6]],
        repeatedNotes[notesId[7]],
        repeatedNotes[notesId[8]],
        repeatedNotes[notesId[9]],
        repeatedNotes[notesId[10]],
        repeatedNotes[notesId[11]]
    ]//to get the names of the notes
    
    // console.log(majorNotesNames);
    
    // noteDiv.forEach(element => {
    //     if (element.innerText == majorNotesNames[0]) {
    //         element.style.backgroundColor = 'red'
    //         element.style.opacity = 1
    //     }
    // }); //compares the names and if its true, highlight em  
}

function getUserhighlightMethod(selected){
    
    singleNoteValue = 
    [   
        selected.options[selected.selectedIndex].value
    ]//get the highlight method single note

    notesNames =[ 
        repeatedNotes[notesId[0]],
        repeatedNotes[notesId[1]],
        repeatedNotes[notesId[2]],
        repeatedNotes[notesId[3]],
        repeatedNotes[notesId[4]],
        repeatedNotes[notesId[5]],
        repeatedNotes[notesId[6]],
        repeatedNotes[notesId[7]],
        repeatedNotes[notesId[8]],
        repeatedNotes[notesId[9]],
        repeatedNotes[notesId[10]],
        repeatedNotes[notesId[11]]
    ]//these two arrays needs to be global to access the root note, and their following steps

    if (singleNoteValue[0] == "Single note"){
        singleNoteMethod()    
    }else if(singleNoteValue[0] == "Major chord"){
        majorChordMethod()    
    }else if(singleNoteValue[0] == "Minor chord"){
        minorChordMethod()    
    }
}
function singleNoteMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = 'red'
            element.style.opacity = 1
        }
    });
}
function majorChordMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = 'red'
            element.style.opacity = 1
        }else if(element.innerText == notesNames[4]){
            element.style.backgroundColor = '#ca1341'
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[7]){
            element.style.backgroundColor = '#e62c86'
            element.style.opacity = 1    
        }
    });   
}
function minorChordMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = 'red'
            element.style.opacity = 1
        }else if(element.innerText == notesNames[3]){
            element.style.backgroundColor = '#ca1341'
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[7]){
            element.style.backgroundColor = '#e62c86'
            element.style.opacity = 1    
        }
    });   
}