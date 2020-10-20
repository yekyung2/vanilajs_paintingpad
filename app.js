const canvas = document.getElementById("jsCanvas");


//특정 이벤트가 발생했을 시 특정 함수를 실행할 수 있게 해주는 addEventListener
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY

}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
}
