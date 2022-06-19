import React, { useState, useEffect } from "react";
import "../css/App.css";
import Login from "./Login.jsx";
import MainPage from "./MainPage.jsx";
import { useStateValue } from "../func/StateProvider.js";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="text-center h-screen">
      {!user ? <Login /> : <MainPage />}
    </div>
  );
}
export default App;
