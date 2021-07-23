function getUserhighlightMethod(selected){
    wipeOut()
    highlightMethod = selected.options[selected.selectedIndex].value
    selectHighlightMode()
    if (highlightMethod != "Circle of 5THs") {
        clearInterval(fifthsCycle); //cancels interval in highlightsMethod.js:191
    }
    
}

function selectHighlightMode(){
    if (highlightMethod == "Single note"){
        singleNoteMethod()    
    }else if(highlightMethod == "Major chord"){
        majorChordMethod()    
    }else if(highlightMethod == "Minor chord"){
        minorChordMethod()
    }else if(highlightMethod == "Power chord"){
        powerChordMethod()
    }else if(highlightMethod == "Minor Pentatonic"){
        pentatonicMethod()
    }else if(highlightMethod == "Minor Pentatonic blues"){
        pentatonicBluesMethod()
    }else if(highlightMethod == "Circle of 5THs"){
        circleOf5thsMethod()
    }else if(highlightMethod == "Major Scale"){
        majorScaleMethod()
    }
}//this function is called whenever any of the two buttons change it values and update the highlight method