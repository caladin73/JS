var createNewCanvas = document.getElementById("createNewCanvas");
//var resetCreateNewCanvas = document.getElementById("resetCreateNewCanvas");
var userInputWindow = document.getElementById("userInputWindow");
var enterCanvasHeight = document.getElementById("enterCanvasHeight");
var enterCanvasWidth = document.getElementById("enterCanvasWidth");



//if (createNewCanvas == null){

    function createNewCanvass() {
        //document.body.removeChild(userInputWindow);

        var enterCanvasHeightt = enterCanvasHeight.value;
        var enterCanvasWidthh = enterCanvasWidth.value;
        var newCanvas = document.createElement("canvas");


        newCanvas.classList.add("canvasDesign");
        newCanvas.style.height = enterCanvasHeightt+"px";
        newCanvas.style.width = enterCanvasWidthh+"px";
        document.body.appendChild(newCanvas);

        //document.body.innerHTML = enterCanvasHeightt+":"+enterCanvasWidthh;

        var toolboxCanvas = document.createElement("canvas");
        toolboxCanvas.classList.add("canvasDesign");
        document.body.appendChild(toolboxCanvas);
        document.getElementById("createNewCanvas").disabled = true;











    }

createNewCanvas.addEventListener('click', createNewCanvass);

