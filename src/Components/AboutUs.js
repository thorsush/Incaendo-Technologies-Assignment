import React, { Component } from "react";
import "./AboutUs.css";
import image1 from "./images/image-1.png";
import image2 from "./images/image-2.png";
import image3 from "./images/image-3.png";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.aboutCards = [
      {
        image: `${image1}`,
        details: `"Good Morning
                Italia, le
                notizie più
                importanti
                arrivano con il
                caffè"`,
      },
      {
        image: `${image2}`,
        details: `"Good Morning
                Italia, le news
                arrivano col
                caffè`,
      },
      {
        image: `${image3}`,
        details: `"Chi ha il tempo
                per leggere tutti
                i giornali e fare
                la sintesi? Good
                Morning Italia lo
                fa ogni mattina"`,
      },
    ];
  }

  render() {
    return (
      <div className="about">
        <h1>Dicono di noi</h1>
        <div className="about_card">
          <div className="about_us_images">
            <div className="image ritimage">
              <img src={this.aboutCards[0].image} alt="the pic of brands"></img>
            </div>
            <div className="image">
              <img src={this.aboutCards[1].image} alt="the pic of brands"></img>
            </div>
            <div className="image">
              <img src={this.aboutCards[2].image} alt="the pic of brands"></img>
            </div>
          </div>
          <div className="about_us_details">
            {this.aboutCards.map((card) => (
              <div key={card.details} className="details">
                {card.details}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
