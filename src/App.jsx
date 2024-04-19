import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Pages/Auth/login/Login';
import Signup from './Components/Pages/Auth/Signup/Signup'
import Home from './Components/Home/Home';

const app= () => {
  return (

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
    // <>
    // <Login />
    // <Registration_page />
    // </>
  );
};

export default app;
