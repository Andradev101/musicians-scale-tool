let rootNoteValue = document.getElementById("rootNote");
let highlightMethodValue = document.getElementById("highlightMethod");
let sumbitBtn = document.querySelector("#submitBtn");
let toBeRemoved = document.getElementById("toBeRemoved")

highlightMethodValue.insertAdjacentHTML("afterbegin",`
    
    <option value="${highlightMethod[0]}"></option>  
    <option value="${highlightMethod[1]}"></option>  
    <option value="${highlightMethod[2]}"></option>  
    <option value="${highlightMethod[3]}"></option> 
    <option value="${highlightMethod[4]}"></option> 
    <option value="${highlightMethod[5]}"></option> 
`)//getting all form children elements

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
//getting all form childs elements

for (let counter = 0; counter < rootNoteValue.length; counter++) {
    let element = rootNoteValueChilds[counter];
    element.innerText = notes[counter];
    element.id = counter;
} //naming them out from notes[] index.js

for (let counter = 0; counter < highlightMethodValue.length; counter++) {
    let element = highlightMethodValue[counter];
    element.innerText = highlightMethod[counter];
} //naming them out from highlightMethod[] in index.js

function wipeOut(){
    noteDiv.forEach(element => {
    element.style.backgroundColor = '#334D5B'
    element.classList.remove("rootNoteAnimation")
    resetNoteStyle()
    })  
}

function getUserOption(selected){
    //wipeOut()
    var res = selected.options[selected.selectedIndex].value
    console.log(res);

    toBeRemoved.remove()
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
    //get the highlight method single note
    
    selectHilightMode()
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
    }
}