let rootNoteValue = document.getElementById("rootNote");
let highlightMethodValue = document.getElementById("highlightMethod");
let sumbitBtn = document.querySelector("#submitBtn");
let noteToBeRemoved = document.getElementById("noteToBeRemoved")
let highlightToBeRemoved = document.getElementById("highlightToBeRemoved")

for (let counter = notes.length-1; counter >= 0; counter--) {
    rootNoteValue.insertAdjacentHTML("afterbegin",
    `<option value="${highlightMethod[counter]}"></option> `);  
}

let rootNoteValueChilds = rootNoteValue.children; //getting all form childs elements

for (let counter = 0; counter < rootNoteValue.length; counter++) {
    let element = rootNoteValueChilds[counter];
    element.innerText = notes[counter];
    element.id = counter;
} //naming them out from notes[] index.js

for (let counter = highlightMethod.length-1; counter >= 0; counter--) {
    highlightMethodValue.insertAdjacentHTML("afterbegin",
    `<option value="${highlightMethod[counter]}"></option> `);  
}

for (let counter = 0; counter < highlightMethodValue.length; counter++) {
    let element = highlightMethodValue[counter];
    element.innerText = highlightMethod[counter];
} //naming them out from highlightMethod[] in index.js

function getUserOption(selected){
    highlightMethodValue.removeAttribute("disabled")
    
    notesId =
    [   
        parseInt(selected.options[selected.selectedIndex].id),  //root
        parseInt(selected.options[selected.selectedIndex].id)+1,//2nd minor
        parseInt(selected.options[selected.selectedIndex].id)+2,//2nd major
        parseInt(selected.options[selected.selectedIndex].id)+3,//3rd minor
        parseInt(selected.options[selected.selectedIndex].id)+4,//3rd major
        parseInt(selected.options[selected.selectedIndex].id)+5,//perfect 4th
        parseInt(selected.options[selected.selectedIndex].id)+6,//augmented 4th/diminished 5th (tritone) << ty bern|doobielespaul
        parseInt(selected.options[selected.selectedIndex].id)+7,//perfect 5th
        parseInt(selected.options[selected.selectedIndex].id)+8,//6th minor
        parseInt(selected.options[selected.selectedIndex].id)+9,//6th major
        parseInt(selected.options[selected.selectedIndex].id)+10,//7th minor
        parseInt(selected.options[selected.selectedIndex].id)+11,//7th major
    ]//get the root note id and the following steps
    
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
    ]//to get the names of the notes 
    selectHilightMode()
}

function getUserhighlightMethod(selected){
    wipeOut()
    highlightMethod = selected.options[selected.selectedIndex].value
    selectHilightMode()
    if (highlightMethod != "Circle of 5THs") {
        clearInterval(fifthsCycle); //cancels interval in highlightsMethod.js:191
    }
    
}

function selectHilightMode(){
    if (highlightMethod == "Single note"){
        singleNoteMethod()    
    }else if(highlightMethod == "Major chord"){
        majorChordMethod()    
    }else if(highlightMethod == "Minor chord"){
        minorChordMethod()
    }else if(highlightMethod == "Power chord"){
        powerChordMethod()
    }else if(highlightMethod == "Minor Pentatonic"){
        pentatonicMethod()
    }else if(highlightMethod == "Minor Pentatonic blues"){
        pentatonicBluesMethod()
    }else if(highlightMethod == "Circle of 5THs"){
        circleOf5thsMethod()
    }else if(highlightMethod == "Major Scale"){
        majorScaleMethod()
    }
}//this function is called whenever any of the two buttons change it values and update the highlight method