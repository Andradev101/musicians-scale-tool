function getUserNote(selected){
    highlightMethodValue.removeAttribute("disabled")
    
    notesId =
    [   
        parseInt(selected.options[selected.selectedIndex].id),  //root
        parseInt(selected.options[selected.selectedIndex].id)+1,//2nd minor
        parseInt(selected.options[selected.selectedIndex].id)+2,//2nd major
        parseInt(selected.options[selected.selectedIndex].id)+3,//3rd minor
        parseInt(selected.options[selected.selectedIndex].id)+4,//3rd major
        parseInt(selected.options[selected.selectedIndex].id)+5,//perfect 4th
        parseInt(selected.options[selected.selectedIndex].id)+6,//augmented 4th/diminished 5th (tritone) << ty bern|doobielespaul
        parseInt(selected.options[selected.selectedIndex].id)+7,//perfect 5th
        parseInt(selected.options[selected.selectedIndex].id)+8,//6th minor
        parseInt(selected.options[selected.selectedIndex].id)+9,//6th major
        parseInt(selected.options[selected.selectedIndex].id)+10,//7th minor
        parseInt(selected.options[selected.selectedIndex].id)+11,//7th major
    ]//get the root note id and the following steps
    
    notesNames =[ 
        repeatedNotes[notesId[0]],
        repeatedNotes[notesId[1]],
        repeatedNotes[notesId[2]],
        repeatedNotes[notesId[3]],
        repeatedNotes[notesId[4]],
        repeatedNotes[notesId[5]],
        repeatedNotes[notesId[6]],
        repeatedNotes[notesId[7]],
        repeatedNotes[notesId[8]],
        repeatedNotes[notesId[9]],
        repeatedNotes[notesId[10]],
        repeatedNotes[notesId[11]]
    ]//to get the names of the notes 
    selectHighlightMode()
}