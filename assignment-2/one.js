function login(){
    let email=document.getElementById('email').value;
    let pass=document.getElementById('password').value;
    if (email==='santhosh@gmail.com' && pass==="1234"){
        alert("Login Successful... ")
    }
    else
    {
        alert("Login Failed...")
    }
}