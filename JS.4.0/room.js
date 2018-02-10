var createNewRoom = document.getElementById("createNewRoom");
var resetCreateNewRoom = document.getElementById("resetCreateNewRoom");
var userInputWindow = document.getElementById("userInputWindow");
var enterRoomHeight = document.getElementById("enterRoomHeight");
var enterRoomWidth = document.getElementById("enterRoomWidth");




function createNewCanvass() {

    document.body.removeChild(userInputWindow);

    var enterRoomHeightt = enterRoomHeight.value;
    var enterRoomWidthh = enterRoomWidth.value;
    document.body.innerHTML = enterRoomHeightt+":"+enterRoomWidthh;

    var newCanvas = document.createElement("canvas");

    newCanvas.classList.add("canvasDesign");

    newCanvas.style.height = enterRoomHeightt+"px";
    newCanvas.style.width = enterRoomWidthh+"px";


    document.body.appendChild(newCanvas);


}

createNewRoom.addEventListener('click', createNewCanvass);