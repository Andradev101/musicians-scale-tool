function powerChordMethod(){
    wipeOut()

    filteredNotes = [ 
        notesNames[0], 
        notesNames[7]
    ]//these are the filteres intervals that goes to be shown to the user

    noteDiv.forEach(element => {
        if (element.innerText == filteredNotes[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
        }else if(element.innerText == filteredNotes[1]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1
        }
    });   
}