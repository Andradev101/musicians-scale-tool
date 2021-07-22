function resetChildrenElements() {
    while (container.childNodes.length > 2) {
        container.removeChild(container.lastChild); 
    }//remove every children except the fret counter div
    fretCounting.innerHTML = ''
    //remove fret counting children     
}

function pianoLayout(){

    resetChildrenElements()

    for (let i = 0; i < 1 ; i++) {
        const stringContainer = document.createElement("div");
        container.append(stringContainer);
        stringContainer.classList.add("string");
        
    let rootNote = 0 
    
    for (let j = rootNote; j <= rootNote+24; j++) {
        const noteBox = document.createElement("div");
        const noteName = document.createElement("p");
        stringContainer.append(noteBox)
        noteBox.append(noteName)
        noteBox.classList.add("note");
        noteBox.classList.add("pianoLayout");
        stringContainer.style.alignItems = "flex-start"
        noteName.innerText = repeatedNotes[j]
        
            if (repeatedNotes[j].includes('#') == true) {
                noteBox.classList.add("pianoLayoutSharp");    
            }//if the note is sharp, adds other class

        }//creates a div and p tags, adds "note" class to each div and assign a note name inside the p tag
    }//notes iteration  
    
    for (let counter = 0; counter < (frets.length) +1; counter++) {
        fretNumber = document.createElement("p");
        fretNumber.innerText = counter;
        fretCounting.append(fretNumber);
        
        fretCounting.children[counter].style.width = "30px"; //change all children style
    }//assign counter value to fretcount p tags
    assignNotes()
    selectHilightMode()
}

function assignNotes(){
    noteValue = document.querySelectorAll(".note p")
    noteDiv = document.querySelectorAll(".note")
}