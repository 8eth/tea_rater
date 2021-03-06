import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Auth from "./components/Auth"
// import Home from "./components/Home"
import TeaList from "./components/TeaList"
import TeaDetail from "./components/TeaDetail"
import UserPage from "./components/UserPage"
import Footer from "./components/Footer"

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [teas, setTeas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    fetch("/teas")
    .then((r) => r.json())
    .then(setTeas)
  }, [])

  useEffect(() => {
    fetch("/reviews")
    .then((r) => r.json())
    .then(setReviews)
  }, [])

  if (!isAuthenticated) return <Auth error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  if (!user) return <Auth setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

  return (
    
    <div className="background">
      <NavBar
        setUser={setUser} 
        setIsAuthenticated={setIsAuthenticated}
      />

      <Switch>
      
        <Route exact path="/auth">
          <Auth 
            key={user.id}
            user={user}
            setUser={setUser} 
            setIsAuthenticated={setIsAuthenticated} 
          />
        </Route>

        {/* <Route exact path="/">
          <Home />
        </Route> */}

        <Route exact path="/">
          <TeaList 
            key={user.id}
            teas={teas}
            searchTerm = {searchTerm}   
            onChangeSearch = {setSearchTerm}
          />
        </Route>

        <Route path="/teas:id">
            <TeaDetail 
              teas={teas}
              user={user}
              reviews={reviews}
              setReviews={setReviews}
            />
        </Route>

        <Route path="/profile">
            <UserPage 
              user={user}
              reviews={reviews}
              setReviews={setReviews}
            />
        </Route>

      </Switch>

      <Footer/>

    </div>
  );
}

export default App;