import bcrypt from 'bcrypt'
let user={
    uname:'Rahul',
    email:'santoshsantutej@gmail.com',
    password:'ili'
}
let salt=bcrypt.genSaltSync(10);
let new_pwdd=bcrypt.hashSync(user.password,salt)
// console.log(user.password )
// console.log(new_pwdd)

let new_user={...user,password:new_pwdd}
// console.log(user)
// console.log(new_user)
let flag=bcrypt.compareSync('ili',new_user.password)
if (flag === true){
    console.log("Login succesful")
}
else{
    console.log("Incorrect Password")
}
