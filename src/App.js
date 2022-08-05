import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home.jsx";
import Footer from "./Component/Footer.jsx";
import About from "./Component/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login.jsx";
import Info from "./Component/Info.jsx";
import Signupbtn from "./Component/Signupbtn.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isClicked: "",
    }
} 

callbackHandlerFunction = (clickStatus) => {
    this.setState({
         isClicked: clickStatus,
    });
}
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          {/* <About></About> */}
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Info/:id" element={<Info />}></Route>
            <Route path="/Info/Signup" element={<Signupbtn />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}
