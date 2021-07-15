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
function powerChordMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = 'red'
            element.style.opacity = 1
        }else if(element.innerText == notesNames[7]){
            element.style.backgroundColor = '#ca1341'
            element.style.opacity = 1
        }
    });   
}