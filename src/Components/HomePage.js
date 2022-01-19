import React, { Component } from "react";
import SignInCard from "./SignInCard";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div className="header_title">
          <h1>Attiva subito l'abbonamento usando il tuo coupon</h1>
          <h3>
            Ogni mattina l'informazione imparziale e di qualità: solo le notizie
            che contano, direttamente nella tua email e via App.
          </h3>
        </div>
        <SignInCard />
      </div>
    );
  }
}
