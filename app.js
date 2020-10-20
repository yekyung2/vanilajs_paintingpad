const canvas = document.getElementById("jsCanvas");
let painting = false; 

//특정 이벤트가 발생했을 시 특정 함수를 실행할 수 있게 해주는 addEventListener
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
   painting = true;
}

function onMouseUp(event){
    painting = false;
}


if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
}
