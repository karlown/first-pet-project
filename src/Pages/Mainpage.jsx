import React, {useState} from "react";
    import { Routes, Route} from "react-router-dom";
    import Fetch from "../dog-api/dogapi";
    import Modal from "../modal/modal";
    import '../App.css'
    import Calculator from "../calc/Calc";
    import { About } from "./Aboutpage";
    import { Sliders } from "./Sliderpage";
    import { Registration } from "./Registrationpage";
    

const Main = () => {
      const [modalDogApi, setModalDogApi] = useState(false);
    const [modalCalculator, setModalCalculator] = useState(false);
      return (
        <div className="app">
          <header>
          </header>
     <main>
     <button className="open_btn" onClick={() => setModalDogApi(true)}>Open dog API</button>
     <button className="open_btn" onClick={() => setModalCalculator(true)}>Open calculator</button>
     </main>
     <Modal active={modalDogApi} setActive={setModalDogApi}>
      <Fetch /> 
    </Modal>
    <Modal active={modalCalculator} setActive={setModalCalculator}>
      <Calculator />
    </Modal>
  <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/Slider' element={<Sliders />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
        </div>
      );
    };
    
export {Main}