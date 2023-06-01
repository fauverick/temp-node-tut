const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user.username)

const OS_info = {
    name: os.type(),
    release: os.release()
}
console.log(OS_info)