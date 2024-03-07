import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import classes from './outlet.module.css'

function Outleted() {
  return (
    <>
      <div className={classes.outlet_container}>
        <div className={classes.static}>
      <Header />
      <Outlet />
      </div>
        <div className={classes.footer}>
      <Footer/>
      </div>
      </div>
      
    </>
  );
}

export default Outleted;
