import React from "react";

import Case from "./case";
import { cases } from "../../data/cases.json";

export default function Homepage() {
  return (
    <>
      <div className="hero">
        <div className="hero__inner-wrapper">
          <h1>
            <div className="line">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="line">
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="line">
              <p>Lorem, ipsum dolor.</p>
            </div>
          </h1>
        </div>
      </div>
      <div className="cases">
        {cases.map((item) => (
          <Case
            key={item.id}
            title={item.title}
            image={item.image}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </>
  );
}
