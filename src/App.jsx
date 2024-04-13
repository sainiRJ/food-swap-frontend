import React from 'react';
import Registration_page from './Components/Registration_page';
import Login from './Components/Login';
import Signup from './Components/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const app= () => {
  return (

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/Registration_page' element={<Registration_page/>}></Route>
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
