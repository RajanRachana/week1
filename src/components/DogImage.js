import React, { useState, useEffect } from "react";

const DogImage = () => {
  const [dog, setDog] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDog(data.message))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container my-5">
      <h2>Random Dog image from api</h2>
      <p>Everytime reload happens [useEffect]</p>

      <img src={dog} alt="dog images" height={"200px"} />
    </div>
  );
};

export default DogImage;
