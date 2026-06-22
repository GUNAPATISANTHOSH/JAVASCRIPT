import bcrypt from 'bcrypt'

let user = {
    name: 'santhosh',
    email: 'santoshsantutej@gmail.com',
    password: 'SANTHOSH@16'
}

let new_user = {
    name: 'Santhosh',
    email: 'santoshsantutej@gmail.com',
    password: 'SANTHOSH@16'
}

let salt = bcrypt.genSaltSync(10)
let new_pwd = bcrypt.hashSync(user.password, salt)

let flag = bcrypt.compareSync(new_user.password, new_pwd)

let username =
    user.name.toLowerCase() === new_user.name.toLowerCase()

let useremail = user.email === new_user.email

if (username && useremail && flag) {
    console.log("Login successful")
} else {
    console.log("Invalid Credentials! Please try Again")
}