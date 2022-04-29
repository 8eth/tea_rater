import React, { useState } from 'react'

  function Signup({ setUser }) {
    const [errors, setErrors] = useState([]);

    const [formData, setFormData] = useState({
      username: "",
      password: "",
      passwordConfirmation: "",
      bio: "",
    })

    const initialFormState = {
      username: "",
      password: "",
      passwordConfirmation: "",
      bio: ""
    };

    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);

      const newUser = { 
        username: formData.username,
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
        bio: formData.bio
      }

      fetch(`/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
        .then(setFormData(initialFormState));
    }
  
    return (
      <div className="background">
        <br></br>
        <h3 className="center-content">Signup</h3>
        <div className="form-border center-content">
          <div className="ui grid">
            <form 
                className="ui two fields form center"
                onSubmit={(e) => handleSubmit(e)}
                >
              <label htmlFor="username">Username:</label>
              <input
                name="username"
                placeholder="Username"
                type="text"
                id={FormData.username}
                value={formData.username}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                placeholder="Password"
                type="password"
                id={FormData.password}
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="password_confirmation">Confirm Password:</label>
              <input
                name="passwordConfirmation"
                placeholder="Confirm Password"
                type="password"
                id={FormData.password_confirmation}
                value={formData.passwordConfirmation}
                onChange={(e) => handleChange(e)}
              />
              <label>Short Bio:</label>
              <input
                name="bio"
                placeholder="Short Bio"
                type="text"
                id={FormData.name}
                value={formData.bio}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <br></br>
              {/* <button className="ui submit button center" type="submit">Sign Up</button> */}

              <button className="ui primary labeled icon button" type="submit">
                <i className="signup icon"></i>
                Sign Up
              </button>

            </form>
          </div>
        </div>
      </div>
    );
  }

export default Signup
