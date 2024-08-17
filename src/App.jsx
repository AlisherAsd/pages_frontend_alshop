import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/navbar/Navbar";
import {observer} from 'mobx-react-lite'
import { useState, useContext, useEffect } from "react";
import { Context } from ".";
import { check } from "./http/userApi";
import Spinner from 'react-bootstrap/Spinner';
import Footer from "./components/footer/Footer";




const App = observer(() => {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    setTimeout(() => {
      check().then(() => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => {
        user.setUser(false)
        user.setIsAuth(false)
        setLoading(false)
      })
    }, 1000)
  }, [])

 

  if (loading) {
    return (
      <div style={{marginTop: '20%', textAlign: 'center'}}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h3>Loading...</h3>
      </div>
    )
  }

  check().then(data => {
    user.setUserName(data.email)
    user.setRole(data.role)
    user.setUserId(data.id)
  })

  


  return (
    <BrowserRouter>
      <div className="App-container">
        <NavBar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
})

export default App;
