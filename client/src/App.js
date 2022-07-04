import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import logo from "./images/logo.png";
import { ConnectButton } from "web3uikit";

const App = () => {
  return (
    <>
      <div className="header">
        <img width="160px" src={logo} alt="logo" />
        <ConnectButton />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
};

export default App;