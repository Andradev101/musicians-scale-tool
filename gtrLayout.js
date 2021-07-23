function resetChildrenElements() {
    while (container.childNodes.length > 2) {
        container.removeChild(container.lastChild); 
    }//remove every children except the fret counter div
    fretCounting.innerHTML = ''
    //remove fret counting children    
}

function gtrLayout() {

    resetChildrenElements()

    let stringNumber = 0;
    for (let i = 0; i < strings.length ; i++) {
        const stringContainer = document.createElement("div");
        container.append(stringContainer);
        stringContainer.classList.add("string");
        
        let rootNote = stringNumber
        switch (rootNote) {
            case 5:
                rootNote = 4;   
                break;
            case 4:
                rootNote = 9;   
                break;
            case 3:
                rootNote = 2;   
                break;
            case 2:
                rootNote = 7;   
                break;
            case 1:
                rootNote = 11;   
                break;
            case 0:
                rootNote = 4;   
                break;
        } //starting note (fret number 0) in the user fretboard
        stringNumber++;  
    
        for (let j = rootNote; j <= rootNote+24; j++) {//e.g starts from 4 and it goes until (4+22) 26
            const noteBox = document.createElement("div");
            const noteName = document.createElement("p");
            stringContainer.append(noteBox)
            noteBox.append(noteName)
            noteBox.classList.add("note");
            noteName.innerText = repeatedNotes[j]
        }//creates a div and p tags, adds "note" class to each div and assign a note name inside the p tag
    }//notes iteration  
    
    for (let counter = 0; counter < frets.length+1; counter++) {
        fretNumber = document.createElement("p");
        fretNumber.innerText = counter;
        fretCounting.append(fretNumber) 
    }//assing counter value to fretcount p tags 
    assignNotes()
    selectHighlightMode() //select highlight method from the form
}

function assignNotes(){
    noteValue = document.querySelectorAll(".note p")
    noteDiv = document.querySelectorAll(".note")
}