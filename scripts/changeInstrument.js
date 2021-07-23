changeLayout.addEventListener("click", changeInstrument);

function changeInstrument(){ 
    switch (changeLayout.value) {
        case "gtrLayout":
            changeLayout.value = "pianoLayout"
            changeLayout.innerText = "Piano layout"
            layoutView.innerText = "Piano layout"
            pianoLayout()           
            break;
        case "pianoLayout":
            changeLayout.value = "gtrLayout"
            changeLayout.innerText = "Guitar layout"
            layoutView.innerText = "Guitar layout"
            gtrLayout()            
            break;
    }
}