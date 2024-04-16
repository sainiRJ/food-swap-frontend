import { useFormik } from "formik";
import React, { useState } from "react";
import Error from "./Error";
import google from "../assets/images/google.jpeg"
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, provider} from '../Firebase';
import { signUpSchema } from "./SignUpSchema";
import { Button, CircularProgress } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
function Login() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {
        setLoading(false);
        const response = await axios.post('http://localhost:5000/login', {
          user: values,
        });
        navigate("/");
      } catch (e) {
        console.log("error message", e);
      } 
      console.log(values);
      resetForm();
    },
  });
 
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      console.log("google auth",result)
      const user = result.user;
      console.log("user details",user)
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      // navigate("/dashboard");
      const response = await axios.post('http://localhost:5000/signup', {
      user: user,
    });
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
  <div className="w-3/12 h-auto bg-white flex-row gap-4 p-4  min-w-80 rounded-2xl">
    <div className="content w-auto">
      <div className="action-buttons">
        <button className="primary-button w-60  sign-in-button bg-smokey-300 text-white bg-gray-700 hover:bg-gray-800 m-auto" onClick={handleGoogleSignIn}>
          <img src={google} alt="" />
          <span>Login with Google</span>
        </button>
      </div>

      <div className="divider">
        <p className="text-black">or</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="email-register mb-2">
          <input style={{color:'black', height:'40px'}}
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email here"
          />
        </div>
        {errors.email && touched.email && <Error error={errors.email} />}
        <div className="password mb-2">
          <input 
            type="password"
            id="password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 h-12"
            placeholder="Password"
          />
        </div>
        {errors.password && touched.password && (
          <Error error={errors.password} />
        )}

        <div className="action-buttons">
          <button type="submit" className="primary-button bg-gray-600 text-white hover:bg-gray-800">Next</button>
        </div>
      </form>
      <div className="flex text-black gap-2 pl-4">
        {" "}
        New to us?
        <NavLink to={"/Login"}>
          <p className="text-blue-500 font-medium">Register</p>
        </NavLink>
      </div>e
    </div>
  </div>
</div>
  );
};

export default Login;
