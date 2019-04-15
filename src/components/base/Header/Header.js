import React from 'react';
import Responsive from 'components/common/Responsive';
import './Header.scss';

const Header = () => (
  <div className="base header">
    <Responsive className="header-wrapper">
      <div className="brand">
        velog
      </div>
      <nav>
        <a className="active" href="/">Link</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
      </nav>
      <div className="right">
        right side
      </div>
    </Responsive>
  </div>
);

export default Header;
