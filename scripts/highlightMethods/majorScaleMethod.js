function majorScaleMethod(){
    wipeOut()

    filteredNotes = [ 
        notesNames[0], 
        notesNames[2], 
        notesNames[4], 
        notesNames[5],
        notesNames[7], 
        notesNames[9],
        notesNames[11],
    ]//these are the filteres intervals that goes to be shown to the user
    
    noteDiv.forEach(element => {
        if (element.innerText == filteredNotes[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
        }else if(element.innerText == filteredNotes[1]){
            element.style.backgroundColor = noteDegreesColor[2]
            element.style.opacity = 1    
        }else if(element.innerText == filteredNotes[2]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == filteredNotes[3]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1   
        }else if(element.innerText == filteredNotes[4]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == filteredNotes[5]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == filteredNotes[6]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }
    }); 
}