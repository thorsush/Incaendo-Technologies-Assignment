import React from "react";
import BlogCard from "./BlogCard";
import "./BlogListing.css";

export default function BlogListing() {
  const blogCardsInfo = [
    {
      header: `L'anno che
                verrà 2022
                L'introduzione
                di Beniamino
                Pagliaro`,
      date: `28 dicembre 2021`,
      details: `Pubblichiamo
                1&#8217;introduzione di
                Beniamino Pagliaro al nostro libro
                L&#8217;anno che verrà 2022....`,
      fotter: `Leggi il post`,
    },
    {
      header: `Good
                Morning
                Italia cersa nuovi collaboratori`,
      date: `5 novembre 2021`,
      details: `Good Morning Italia cresce: stiamo
                cercando alcune persone che
                facciano parte della nostra squadra.
                Questa...`,
      fotter: `Leggi il post`,
    },
    {
      header: `"Storie dal
                futuro del la-
                voro", il nuo-
                vo briefing di
                Phyd, in col-
                laborazione
                con Good
                Morning
                Italia, sul
                lavoro che
                verrà`,
      date: `16 settembre 2021`,
      details: `Come sarà il futuro del lavoro?
                Saremo sostituiti dai robot? E se sì,
                in che misura? Quali sono,
                invece,...`,
      fotter: `Leggi il post`,
    },
  ];
  return (
    <div className="bloglisting">
      <h1>Le ultime novità dal nostro blog</h1>
      <div className="blog_cards">
        {blogCardsInfo.map((card) => (
          <BlogCard
            header={card.header}
            date={card.date}
            details={card.details}
            footer={card.fotter}
            key={card.date}
          />
        ))}
      </div>
    </div>
  );
}
