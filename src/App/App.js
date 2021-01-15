import SideMenu from "../components/SideMenu";
import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";


const useStyle=makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'75%'
  }
})

function App() {
  const classes=useStyle();
  return (
    <div>
      <SideMenu />
      <div className={classes.appMain}>
        <Header/>
      </div>
    </div>
  );
}

export default App;
