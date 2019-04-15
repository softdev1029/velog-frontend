import React from 'react';
import cx from 'classnames';
import SocialLoginButton from 'components/home/SocialLoginButton';
import './AuthForm.scss';

const AuthForm = ({ className, children, ...rest }) => {
  return (
    <div className={cx(className, 'auth-form')} {...rest}>
      { children }
      <div className="input-with-button">
        <input placeholder="Please ..." />
        <div className="button">
          Start
        </div>
      </div>
      <div className="separator">
        <div className="or">
          or
        </div>
      </div>
      <div className="social-buttons">
        <SocialLoginButton type="github" />
        <SocialLoginButton type="google" />
        <SocialLoginButton type="facebook" />
      </div>
    </div>
  );
};

export default AuthForm;
