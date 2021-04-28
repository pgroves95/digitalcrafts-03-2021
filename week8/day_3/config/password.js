const bcrypt = require('bcrypt')

const PW = "Qtxr254@"
let pw = ""
bcrypt.hash(PW,5)
.then((err,result)=> {
    if(err === null){
        pw = result
        module.exports(pw)
    } else{
        console.log(err)
    }
})