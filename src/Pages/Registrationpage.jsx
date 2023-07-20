import '../App.css'
import '../login/Login.css';
import React, { useState } from "react";
import Login from '../login/Login';
import Register from '../login/Register';

const Registration = () => {
    const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  setCurrentForm(formName);
}

    return (
<div>

  <div className="App">
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
  </div>

</div>
    )
}
export {Registration}