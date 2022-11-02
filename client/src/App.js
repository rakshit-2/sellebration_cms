

import * as React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from './components/organism/landing';
import Delete from './components/organism/delete';
import Err from './components/organism/err';
import Login from './components/organism/login';
import { useState ,useEffect} from 'react';

const App=(props)=> {



  const[login,setLogin]=useState(false);
  const[logoutDisplay,setLogoutDisplay]=useState("none")
  useEffect(() => {
      if(props.login===true)
      {
          Navigate('/')
      }
    }, []);
  function changeLogin(x)
  {
    setLogin(x);
    if(x===true)
    {
      setLogoutDisplay('flex')
    }
    else{
      setLogoutDisplay('none')
    }
  }

  console.log(login)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing login={login} changeLogin={changeLogin} logoutDisplay={logoutDisplay}/>} ></Route>
        <Route path="/delete" element={<Delete login={login}/>} ></Route>
        <Route path="/login" element={<Login login={login} changeLogin={changeLogin}/>} ></Route>
        <Route path="/err" element={<Err/>} ></Route>
          <Route
              path="*"
              element={<Navigate to="/err" replace />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
