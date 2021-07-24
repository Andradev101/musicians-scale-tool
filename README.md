# musicians-scale-tool
Little JavaScript project based on musical theory intervals/scales.  

The algorithm is based on the user's root note choice, and get all possible intervals.  
Then it filters the notes based on the user's highlight method choice.    
Which includes all below:  

- Single note;  
- Major chords;  
- Minor chords;  
- Power chords;  
- Minor pentatonic scale;  
- Minor pentatonic scale + blue note;  
- Circle of fifths (still need some improvement).  

You can access the tool through this link:  
https://andradev101.github.io/musicians-scale-tool/  
https://andradev101.github.io/musicians-scale-tool/  
https://andradev101.github.io/musicians-scale-tool/  

## Responsiveness

It works with all kinds of screen (Note sure though, haven't tested in many screens)  
PC interface:  
![alt text](https://i.imgur.com/KcXvrzt.png)  
Small screen devices [vertical view]:  
![alt text](https://i.imgur.com/QPQhIiJ.png)  
Small screen devices [horizontal view]:    
![alt text](https://i.imgur.com/1ahZ5t3.png)  

## How it works :computer:

The algorithm gets the root note set by the user in:
```
getUserNote.js

notesId =
    [   
        parseInt(selected.options[selected.selectedIndex].id),  // root
        parseInt(selected.options[selected.selectedIndex].id)+1,// 2nd minor
        parseInt(selected.options[selected.selectedIndex].id)+2,// 2nd major
        parseInt(selected.options[selected.selectedIndex].id)+3,// 3rd minor
        parseInt(selected.options[selected.selectedIndex].id)+4,// 3rd major
        parseInt(selected.options[selected.selectedIndex].id)+5,// perfect 4th
        parseInt(selected.options[selected.selectedIndex].id)+6,// tritone
        parseInt(selected.options[selected.selectedIndex].id)+7,// perfect 5th
        parseInt(selected.options[selected.selectedIndex].id)+8,// 6th minor
        parseInt(selected.options[selected.selectedIndex].id)+9,// 6th major
        parseInt(selected.options[selected.selectedIndex].id)+10,// 7th minor
        parseInt(selected.options[selected.selectedIndex].id)+11 // 7th major
    ] // e.g: In this case the user's root note choice is C, which returns:
        [0,1,2,3,4,5,6,7,8,9,10,11]
    
    notesNames = 
    [ 
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
    ] //[C,C#,D,D#,E,F,F#,G,G#,A,A#,B]
}
```
Then, the user choose the highlight method in:
```
getUserHighlightMethod.js

function getUserhighlightMethod(selected){
    wipeOut()
    highlightMethod = selected.options[selected.selectedIndex].value
    selectHighlightMode()
    if (highlightMethod != "Circle of 5THs") {
        clearInterval(fifthsCycle); //cancels interval in highlightsMethod.js:191
    }   
}
```
With all the data needed, the program can now displays the highlight, that works like this:

```
hilightMethods/{method} [for this example: majorChordMethod.js]

function majorChordMethod(){
    wipeOut()
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
        }else if(element.innerText == filteredNotes[1]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }else if(element.innerText == filteredNotes[2]){
            element.style.backgroundColor = noteDegreesColor[1]
            element.style.opacity = 1    
        }
    });   
}
```
It gets certains intervals from noteNames[], in this case: 
- Root (our [0]);
- 3rd Major (our [4]);
- Perfect 5th (our [7]);  

And update all notes iterating through an array, reset the styles when needed and setting the newest styles.
