const stringContainer = document.querySelectorAll(".string")

function resetNoteStyle(){
    stringContainer.forEach(element => {
        element.childNodes[0].style.backgroundColor = "green"      
        element.childNodes[0].style.opacity = "0.3"      
        element.childNodes[12].style.backgroundColor = "green"      
    });
}
