import React from "react";
import CardItem from "./CardItem";
//import "./Cards.css";
import "./card.css";

function Cards() {
  return (
    <div className="cards"  >
      <h1>Check out these Stores</h1>

      <div className="cards__container">
        <div className="cards__wrapper" >
          <ul className="cards__items" >
            <CardItem 
              src="images/pizzastore.jpg"
              text="Feel the Taste -Pizza Hut"
              label="Pizza Hut"
              path="/pizzahut"
              
            />
            <CardItem 
              src="images/p&scorrectone.jpg"
              text="Enjoy you meal with  P & S "
              label="Perera & Sons"
              path="/ps"
            />
            <CardItem
              src="images/kfcgood.jpg"
              text="Full Fill your chicken Cravings"
              label="KFC"
              path="/kfc"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/fab.jpg"
              text="Lets Taste Savories"
              label="Fab "
              path="/fab"
            />
            <CardItem
              src="images/saravanabavan.jpg"
              text="Enjoy South Indian Meals With Us"
              label="Saravana Bavan"
              path="/saravanabavan"
            />
            <CardItem
              src="images/thalapa.jpg"
              text="Full Fill your Biriyani Cravings"
              label="Thalapa Katti"
              path="/thalapakatty"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
