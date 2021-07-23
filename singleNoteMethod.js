var noteBaseColor = "#334D5B";
var noteDegreesColor = ["#f26419","#00b4d8","#BF1363", "#F9A00C"]

function singleNoteMethod(){
    wipeOut()

    filteredNotes = [ 
        notesNames[0]
    ]//these are the filteres intervals that goes to be shown to the user
    
    noteDiv.forEach(element => {
        if (element.innerText == filteredNotes[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
        }
    });
}