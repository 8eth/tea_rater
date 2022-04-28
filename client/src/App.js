import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Auth from "./components/Auth"
import Home from "./components/Home"
import TeaList from "./components/TeaList"

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
      <NavBar
        setUser={setUser} 
        setIsAuthenticated={setIsAuthenticated}
        user={user}
      />

      <Switch>
      
        <Route exact path="/auth">
          <Auth 
            setUser={setUser} 
            setIsAuthenticated={setIsAuthenticated} 
          />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/teas">
          <TeaList />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;