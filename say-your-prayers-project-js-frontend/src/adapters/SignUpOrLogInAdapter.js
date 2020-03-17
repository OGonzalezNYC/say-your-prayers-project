class SignUpOrLogInAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/'
    this.bulkOfFetchCall = `, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {`
  }

  defineInputs() {
    this.newUsername = document.getElementById("new-user-username").value;
    this.newPassword = document.getElementById("new-user-password").value;
    this.returningUsername = document.getElementById("login-username").value;
    this.returningPassword = document.getElementById("login-password").value;
  }






  submitNewUserInfo(e) {
    e.preventDefault()
    fetch(this.baseUrl + 'users' + this.bulkOfFetchCall + ' username: ' + this.newUsername + ', password: ' + this.newPassword + '} }) }')
    .then(r => r.json())
    .then(console.log)
    //.then
  }


  submitReturningUserInfo() {
    fetch(this.baseUrl + 'login' + this.bulkOfFetchCall + ' username: ' + this.returningUsername + ', password: ' + this.returningPassword + '} }) }')
    .then(r => r.json())
    .then(console.log)

    //.then

//     fetch('http://localhost:3000/api/v1/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     user: {
//       username: "Lucky",
//       password: "LuckyPassword"
//     }
//   })
// })
//   .then(r => r.json())
//   .then(console.log)



  }
}
