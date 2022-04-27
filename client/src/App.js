import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Auth from "./components/Auth"

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/authorize')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
      else {
        console.log("not logged in")
      }
    });
  },[]);
  
  if (!isAuthenticated) return <Auth error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  if (!user) return <Auth setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

  return (
    
    <div className="background">

      <Switch>
      
        <Route exact path="/auth">
          <Auth 
            setUser={setUser} 
            setIsAuthenticated={setIsAuthenticated} 
          />
        </Route>

        <Route exact path="/">
          <Home 
            setUser={setUser} 
            setIsAuthenticated={setIsAuthenticated}
            user={user}
          />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;