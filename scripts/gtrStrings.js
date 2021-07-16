const stringContainer = document.querySelectorAll(".string")

function resetNoteStyle(){
    stringContainer.forEach(element => {
        element.classList.remove("rootNoteAnimation")
        element.childNodes[0].style.backgroundColor = "#F3B700"      
        element.childNodes[0].style.opacity = "0.3"    
        element.childNodes[12].style.backgroundColor = "#F3B700" 
        element.childNodes[12].style.opacity = "0.3"
    });
}