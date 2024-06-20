let login = document.getElementById('login')
let passwd = document.getElementById('passwd')
let btn = document.getElementById('')
let users = {}

function User(login, passwd){
    this.login = login
    this.passwd = passwd
}
function createId(users){
    return Object.keys(users).length
}
btn.addEventListener('click',() => {
    const loginUser = login.value
    const passwdUser = passwd.value

    const user = new User(loginUser, passwdUser)
    const userId = 'User' + createId(users)
    users[userId] = user
})