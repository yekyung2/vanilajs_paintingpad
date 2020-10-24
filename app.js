const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode");
const INITIAL_COLOR = "black";
const CANVAS_SIZE = 700;
const saveBtn = document.getElementById("jsSave");

canvas.height = CANVAS_SIZE;
canvas.width = CANVAS_SIZE;

//Context
ctx.strokeStyle =INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;



//기본 세팅
let painting = false; 
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
   painting = true;
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle  = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const linewidth = event.target.value;
    ctx.lineWidth = linewidth;
}

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

//마우스 우클릭 저장 방지
function handleCM(event){
    event.preventDefault()
}

function handleSaveClick(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[🎨]"; 
    link.click();
}

//특정 이벤트가 발생했을 시 특정 함수를 실행할 수 있게 해주는 addEventListener 
// 적용할변수.addEventListner(addeventListner가 가지고 있는 이벤트 이름, 내가 지정한 함수이름)
if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
    );

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}
//Canvas는 html 태그인데, 다른 태그와 다른점은 "context"를 갖는다는 점이다. 
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

