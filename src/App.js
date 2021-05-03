import React, {  useState, useEffect} from "react";
import "./App.css";
import Login from "./Login.js";
import MainPage from "./MainPage.js";
import {useStateValue} from './StateProvider.js'

function App() {
  const [{user}, dispatch] = useStateValue();
  
  return <div className="App">{!user ? <Login /> : <MainPage />}</div>;
}
export default App;
