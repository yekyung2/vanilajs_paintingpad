const canvas = document.getElementById("jsCanvas");
let painting = false; 
function stopPainting(){
    painting = false;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
   painting = true;
}

function onMouseUp(event){
    stopPainting();
    
}


//특정 이벤트가 발생했을 시 특정 함수를 실행할 수 있게 해주는 addEventListener 
// 적용할변수.addEventListner(addeventListner가 가지고 있는 이벤트 이름, 내가 지정한 함수이름)
if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}
