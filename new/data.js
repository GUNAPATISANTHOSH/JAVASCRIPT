function valid(){
    let email=document.getElementById('email').value;
    let pwd=document.getElementById('PASSWORD').value;
    if (email==='santhosh@gmail.com' && pwd==="12345"){
        alert("LOGIN SUCCESSFUL")
    }
    else
    {
        alert("INCORRECT PASSWORD")
    }
}