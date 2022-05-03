import React, { useState } from 'react'

function Login({ setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')
   
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/login`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        username, 
        password,
      })
    })
      .then(res => {
        if(res.ok){
          res.json()
          .then(username=>{
            setUser(username)
            setIsAuthenticated(true)
          })
        } else {
          res.json()
          .then((err) => setErrors(err.errors))
        }
    })
  }

  return (
    <div className="background">
      <br></br>
      <br></br>
      <h3 className="center-content">Login</h3>

      <div className="form-border center-content">
        <div className="ui grid">
          <form 
              className="ui two fields form center"
              onSubmit={handleSubmit}
            >
            <label> Username
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <br></br>
            <div>
              {errors.map((error) => (
                <ul className="errors">{error}</ul>
              ))}
            </div>
            <br></br>
            <button className="ui primary labeled icon button" type="submit">
              <i className="unlock alternate icon"></i>
              Login
            </button>

            <div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>

          </form>
        </div>
      </div>
    </div>   
  );
}


export default Login