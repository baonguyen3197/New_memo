let myNotesList = document.getElementsByTagName("li");
let close = document.getElementsByClassName("close");
let i, liIndex;

function NewStickyNote() {
    let newNotes = document.createElement("li");
    let t = document.createElement("textarea");
    let txt = document.createTextNode("Your content");
    txt.className = "notes";
    t.className = "notes";
    t.appendChild(txt);
    newNotes.appendChild(t);
    document.getElementById("myNotes").appendChild(newNotes);

    let btn = document.createElement("button");
    btn.className = "close";
    newNotes.appendChild(btn);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }

        saveNotes(newNotes);
    }
}

function saveNotes(notes) {
    localStorage.setItem("sticky-notes", JSON.stringify(notes));
}

function deleteNote() {
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}