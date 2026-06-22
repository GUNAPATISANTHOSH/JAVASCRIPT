function result(){

    let name=document.getElementById("name").value;

    let marks=document.getElementById("marks").value;
    
    let output=document.getElementById("output");

    if (marks>90){
        output.innerText=
        name+" scored "+marks+" marks - A Grade"
        output.style.color="Green";

    }else if (marks>75) {
        output.innerText=
        name+" scored "+marks+" marks - B Grade"
        output.style.color="Green";

    }else if (marks>50) {
        output.innerText=
        name+" scored "+marks+" marks - C Grade"
        output.style.color="Green";
    }
    
}