import React from "react";

import "./styles.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner-wrapper">
        <div className="site-header__inner-wrapper__logo">Logo goes here</div>
        <nav className="site-header__inner-wrapper__nav">Nav</nav>
      </div>
    </header>
  );
}
