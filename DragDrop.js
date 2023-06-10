function dragStart(ev) { ev.dataTransfer.setData("text", ev.target.id); } // This function sets the data of the picture that is to be draggged.

// When an element is moved over another, the default behaviour does not allows to drop one element into other. The default is changed.
function dragOver(ev) { ev.preventDefault(); }

// This function shows the message that is to be displayed when the user successfully drops the picture.
function displayMessage() {
    const message = document.getElementById("message");
    message.style.display = "block";
}

// This function removes the message displayed after successfully dropping picture.
function removeMessage() {
    const message = document.getElementById("message");
    message.style.display = "none";
}

// This function is made to handle the 'drop' event.
// When the picture is dropped, the default behaviour is to open the link. The default is changed.
function dropDown(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.target.style.transform = "scale(1.25, 1.25)";
    setTimeout(displayMessage, 1000);
    setTimeout(removeMessage, 3000);
}

// This function is used to shrink the size of the flowe pictures when it is been dragged, this creates a visual effect while dragging.
function dragImage(ev) {
    const image = ev.target;
    image.style.transform = "scale(0.8, 0.8)";
}
function refreshPage() { window.location.reload(true); }