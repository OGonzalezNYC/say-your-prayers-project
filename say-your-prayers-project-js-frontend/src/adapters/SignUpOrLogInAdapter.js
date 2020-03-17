
class SignUpOrLogInAdapter {

  constructor() {

  }

  submitNewUserInfo(e) {
    e.preventDefault()
    // debugger
    const username = document.querySelector("#new-user-username").value
    const password = document.querySelector("#new-user-password").value
    // fetch(this.baseUrl + 'users' + this.bulkOfFetchCall + ' username: ' + this.newUsername + ', password: ' + this.newPassword + '} }) }')
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`
        }
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

  submitReturningUserInfo(e) {
    e.preventDefault()
    const username = document.querySelector("#login-username").value
    const password = document.querySelector("#login-password").value
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`
        }
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

}
