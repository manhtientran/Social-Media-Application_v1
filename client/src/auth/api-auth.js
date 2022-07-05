import config from "../config/config.js"

const BACKEND_URL = config.BACKEND_URL;

const signin = async (user) => {
    try {
      let response = await fetch(BACKEND_URL + '/auth/signin/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const signout = async () => {
    try {
      let response = await fetch(BACKEND_URL + '/auth/signout/', { method: 'GET' })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  export {
    signin,
    signout
  }