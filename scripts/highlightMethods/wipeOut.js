function wipeOut(){
    noteDiv.forEach(element => {
    element.style.backgroundColor = '#334D5B'
    element.classList.remove("rootNoteAnimation")
    })  
} //reset noteDiv color and animation properties