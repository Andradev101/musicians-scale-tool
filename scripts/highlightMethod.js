var noteBaseColor = "#334D5B";
var noteDegreesColor = ["#f26419","#00b4d8","#BF1363", "#F9A00C"]

function singleNoteMethod(){
    wipeOut()
    resetNoteStyle()

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
function majorChordMethod(){
    wipeOut()
    resetNoteStyle()

    filteredNotes = [ 
        notesNames[0], 
        notesNames[4], 
        notesNames[7]
    ]//these are the filteres intervals that goes to be shown to the user
    noteDiv.forEach(element => {
        if (element.innerText == filteredNotes[0]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
            console.log("here");
        }else if(element.innerText == filteredNotes[1]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == filteredNotes[2]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }
    });   
}
function minorChordMethod(){
    wipeOut()
    resetNoteStyle()
    
    filteredNotes = [ 
        notesNames[0], 
        notesNames[3], 
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
        }else if(element.innerText == filteredNotes[2]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }
    });   
}
function powerChordMethod(){
    wipeOut()
    resetNoteStyle()

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
function pentatonicMethod(){
    wipeOut()
    resetNoteStyle()

    filteredNotes = [ 
        notesNames[0], 
        notesNames[3], 
        notesNames[5],
        notesNames[7], 
        notesNames[10]
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
        }
    }); 
}
function pentatonicBluesMethod(){
    wipeOut()
    resetNoteStyle()

    filteredNotes = [ 
        notesNames[0], 
        notesNames[3], 
        notesNames[5], 
        notesNames[6], 
        notesNames[7], 
        notesNames[10]
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
        }
    });  
}
function circleOf5thsMethod(){
    var i = 0
    wipeOut()
    resetNoteStyle()

    filteredNotes = [ 
        notesNames[0], 
        notesNames[7], 
        notesNames[2], 
        notesNames[9], 
        notesNames[4], 
        notesNames[11], 
        notesNames[6],
        notesNames[1],
        notesNames[8],
        notesNames[3],
        notesNames[10],
        notesNames[5]
    ]//these are the filteres intervals that goes to be shown to the user

    function changeView() {
        noteDiv.forEach(element => {  
            changeInterval(element)
        });   
    }

    function changeInterval(element){//its called 138 times
        if (element.innerText == filteredNotes[i]) {
            element.style.backgroundColor = noteDegreesColor[0]
            element.style.opacity = 1
            element.classList.add("rootNoteAnimation")
        }else if(element.innerText == filteredNotes[i+1]){
            element.style.backgroundColor = noteDegreesColor[3]
            element.style.opacity = 1    
        }
    }
    fifthsCycle = setInterval(() => { 
        wipeOut()
        resetNoteStyle()
        changeView()
        i++
            if (i >= 11) {
                i = 0;   
            }
        }, 1500);
}//wipes out reset note style calls changeViews() that highlight i and i+1, then adds 1 to i, see if i is >= 11, if yes i gets 0 again