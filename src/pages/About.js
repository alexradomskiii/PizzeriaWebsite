import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
        <div 
            className="aboutTop" 
            style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
            <h1> ABOUT US </h1>
            <p>
                Welcome to Alex's Pizzeria, where every slice tells a story of tradition, 
                quality, and passion for authentic Italian flavors. At Alex's Pizzeria, 
                we take pride in crafting each pizza with the finest ingredients, from 
                our homemade dough to our savory sauces and premium toppings. Whether 
                you're craving a classic Pepperoni, a hearty Margherita, or our one and 
                only Special Alex's pizza, our menu offers something for every palate. 
                With a cozy atmosphere and friendly service, we invite you to savor the 
                essence of Italy in every bite. Join us at our location and experience 
                the taste of true Italian craftsmanship at Alex's Pizzeria. Buon appetito!
            </p>
        </div>
    </div>
  );
}

export default About;
