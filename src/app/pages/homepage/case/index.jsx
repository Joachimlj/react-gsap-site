import React from "react";

import "./styles.css";

export default function Case({ title, image, subtitle }) {
  return (
    <div
      className="case"
      style={{ backgroundImage: `url("../../../assets/images/${image}")` }}
    >
      <div className="case__inner-wrapper">
        <div className="case__inner-wrapper__title">{title}</div>
        <div className="case__inner-wrapper__sub-title">{subtitle}</div>
      </div>
    </div>
  );
}
