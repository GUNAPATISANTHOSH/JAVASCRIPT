function color1() {
    console.log("Mouse Over Detected");
    document.getElementById('btn1').style.backgroundColor = "blue";
}
function color2() {
    console.log("Mouse Over Detected");
    document.getElementById('btn2').style.backgroundColor = "blue";
}
function color3() {
    console.log("Mouse Over Detected");
    document.getElementById('btn3').style.backgroundColor = "blue";
}
function color4 () {
    console.log("Mouse Over Detected");
    document.getElementById('btn4').style.backgroundColor = "blue";
}
function color5 () {
    console.log("Mouse Over Detected");
    document.getElementById('btn5').style.backgroundColor = "blue";
}
function color6(){
     let input_Tag=document.getElementsByTagName('input')[1];
    console.log(input_Tag)
    let ename=input_Tag.value;
    console.log(ename)
    input_Tag.value=ename.toUpperCase()
}