import React, { useState } from "react";
import Fetch from "./dog-api/dogapi";
import Modal from "./modal/modal";
import './App.css'
import Calculator from "./calc/Calc";


const App = () => {
  const [modalDogApi, setModalDogApi] = useState(false);
const [modalCalculator, setModalCalculator] = useState(false);
const [modalRegister, setModalRegister] = useState(false);
  return (
    <div className="app">
      <header>
        <button className="header-item" >Main</button>
        <button className="header-item">Contacts</button>
        <button className="header-item">About us</button>
        <button className="header-item "onClick={() => setModalRegister(true)}>Registration</button>
      </header>
 <main>
 <button className="open_btn" onClick={() => setModalDogApi(true)}>Open dog API</button>
 <button className="open_btn" onClick={() => setModalCalculator(true)}>Open calculator</button>
 </main>
 <Modal active={modalRegister} setActive={setModalRegister}>
  Registration
</Modal>
 <Modal active={modalDogApi} setActive={setModalDogApi}>
  <Fetch /> 
</Modal>
<Modal active={modalCalculator} setActive={setModalCalculator}>
  <Calculator />
</Modal>

    </div>
  );
};


export default App;