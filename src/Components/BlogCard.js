import React from "react";

export default function BlogCard(props) {
  return (
    <div className="blog_card">
      <div className="sub_div">
        <h2>{props.header}</h2>
        <h4>{props.date}</h4>
        <hr />
        <h4>{props.details}</h4>
      </div>
      <div className="footer">{props.footer}</div>
    </div>
  );
}
