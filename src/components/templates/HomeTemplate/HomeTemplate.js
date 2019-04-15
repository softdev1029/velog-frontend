import React from 'react';
import Responsive from 'components/common/Responsive';
import './HomeTemplate.scss';

const HomeTemplate = ({ form }) => (
  <div className="home-template">
    <Responsive className="block">
      <div className="left-text">
        <div>
          <h1>Here is the velog site.</h1>
          <p>Developers can write their blogs here.</p>
          <p>Please sign in here.</p>
        </div>
      </div>
      <div className="right-form">
        <div className="black-box">
          <h2>
            <span className="brand">velog</span>
             Login & Register
          </h2>
          { form }
        </div>
        <div className="register-button">
          Register
        </div>
      </div>
    </Responsive>
  </div>
);

export default HomeTemplate;
