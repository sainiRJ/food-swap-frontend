// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/masala-dosa.jpeg';
import styles from "./Navbar.module.css";
import TemporaryDrawer from "./SignInDrawer";
import TemporaryDrawer2 from "./BeforeSignIn";
import userProf from "../../assets/images/man.png";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const token = localStorage.getItem('token');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const renderDrawer = () => {
    if (token) {
      return <TemporaryDrawer open={drawerOpen} onClose={handleCloseDrawer} />;
    } else {
      return <TemporaryDrawer2 open={drawerOpen} onClose={handleCloseDrawer} />;
    }
  };

  return (
    <nav className={`${styles.navbar} pt-3 pl-6 pr-6 pb-8`}>
      <div className=" h-8 rounded-full text-xl relative ">
        <div
          className={`${styles["navbar-container"]} mx-auto flex `}
        >
          <img src={Logo} alt="Logo" className="w-14 h-14"/>
          <Link
            to="/"
            className={`${styles["navbar-brand"]} flex items-center pl-4`}
          >
            FoodSwap
          </Link>
          <div className={`${styles["navbar-links"]}`}>

          </div>
          <div className={`${styles["user-profile"]} pl-6 right-12`}>
            <img src={userProf} alt="User profile" onClick={toggleDrawer}/>
          </div>
        </div>
      </div>
      {renderDrawer()}
    </nav>
  );
}

export default Navbar;
