import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import { About } from "./Pages/Aboutpage";
import { Sliders } from "./Pages/Sliderpage";
import { Main } from "./Pages/Mainpage";
import { Registration } from "./Pages/Registrationpage";
import { Layout } from "./components/layout";
import { Notfound } from "./Pages/Notfoundpage";

const App = () => {
 return (
  <div>
 
<Routes>
  <Route path='/' element={<Layout />}>
  <Route index element={<Main />} />
  <Route path='about' element={<About />} />
  <Route path='Sliders' element={<Sliders />} />
  <Route path='registration' element={<Registration />} />
  <Route path='*' element={<Notfound />}/>
  </Route>
</Routes>
    </div>
  );
};


export default App;