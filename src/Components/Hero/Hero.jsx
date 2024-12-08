// import React from 'react'
import "./Hero.css";
import image from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero_text">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quasi?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          adipisci natus. Eligendi, aliquid fugiat. Id reprehenderit cupiditate
          nesciunt repellat quisquam ipsa minima aliquam veniam tenetur fugiat.
          Facilis corrupti minima incidunt dolor, eius fuga ipsum dolorum vel
          esse aut deserunt quas ab quod ut hic saepe mollitia reprehenderit
          quae earum dicta.
        </p>
        <button className="btn">
          Explore more <img src={image} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
