import React, { useState, useEffect } from "react";
import './dogapi.css'
const Fetch = () => {
  const [dogImage, setDogImage] = useState(null);

  async function fetchHandler() {
    const response = await fetch("https://random.dog/woof.json");
    const data = await response.json();
    setDogImage(data.url);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div className='block'>
      <img className='dog-img' src={dogImage} />
      <button className='btn' onClick={() => {
        setDogImage(null);
        fetchHandler();
      }}>New Dog</button>
    </div>
  );
};
export default Fetch;