const container = document.querySelector(".container");
const stringContainer = document.querySelectorAll(".string");

const frets = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const fretCounting = document.querySelector(".fret-counting");
const strings = ["1st","2nd","3rd","4th","5th","6th"];

var repeatedNotes = new Array(3).fill(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]).flat();
//repeat the array 3 times and flat it to only one array, called reapeatedNotes[]
const changeLayout = document.querySelector(".change-layout");
const layoutView = document.querySelector(".layout-view");

const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "Choose Note"
]; //user form options

var highlightMethod = [
    "Single note",
    "Major Scale",
    "Major chord",
    "Minor chord",
    "Power chord",
    "Minor Pentatonic",
    "Minor Pentatonic blues",
    "Circle of 5THs",
    "Choose highlight method" 
    ];//user form highlight