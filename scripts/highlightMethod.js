var noteBaseColor = "#334D5B";
var noteDegreesColor = ["#f26419","#00b4d8","#BF1363"]

function singleNoteMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
        }
    });
}
function majorChordMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
        }else if(element.innerText == notesNames[4]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[7]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }
    });   
}
function minorChordMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
        }else if(element.innerText == notesNames[3]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[7]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }
    });   
}
function powerChordMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
        }else if(element.innerText == notesNames[7]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1
        }
    });   
}
function pentatonicMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
        }else if(element.innerText == notesNames[3]){
            element.style.backgroundColor = noteDegreesColor[2]
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[5]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[7]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[10]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }
    });  
}
function pentatonicBluesMethod(){
    wipeOut()
    resetNoteStyle()
    noteDiv.forEach(element => {
        if (element.innerText == notesNames[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
            //element.style.transform = "scale(1.3)"
        }else if(element.innerText == notesNames[3]){
            element.style.backgroundColor = noteDegreesColor[2]
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[5]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[6]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1   
        }else if(element.innerText == notesNames[7]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == notesNames[10]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }
    });  
}