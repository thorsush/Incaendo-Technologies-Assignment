import React, { Component } from "react";
import "./SubscribersInfo.css";
import SubscriberRatingCard from "./SubscriberRatingCard";

export default class SubscriberInfo extends Component {
  constructor(props) {
    super(props);
    this.subscriberCardInfo = [
      {
        percentage: "97%",
        details: `il 97% è “molto
               soddisfatto" di Good
               Morning Italia`,
      },
      {
        percentage: "98%",
        details: `il 98% consiglierebbe Good
        Morning Italia a un amico`,
      },
      {
        percentage: "75%",
        details: `per il 75% è la prima fonte
        di informazione consultata
        ogni giorno`,
      },
      {
        percentage: "8.5",
        details: `8.5/10 voto medio al
        nostro customer care [voto
        più frequente: 10]`,
      },
    ];
  }

  render() {
    return (
      <div className="subscribers_info">
        <h1>Cosa dicono di noi i nostri noi i nostri abbonati</h1>
        <h4 className="header_4">
          Più di 40mila persone e centinaia di aziende hanno scelto Good Morning
          Italia per essere informati. Ogni mese chiediamo loro con dei
          questionari come stiamo lavorando. Ecco le loro risposte.
        </h4>
        <div className="subscriber_cards">
          {this.subscriberCardInfo.map((card) => (
            <SubscriberRatingCard
              key={card.percentage}
              percentage={card.percentage}
              details={card.details}
            />
          ))}
        </div>
      </div>
    );
  }
}
