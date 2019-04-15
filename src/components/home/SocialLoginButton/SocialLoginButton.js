import React from 'react';
import cx from 'classnames';
import './SocialLoginButton.scss';

type Props = {
  type: string
}
const SocialLoginButton = ({ type }: Props) => {
  return (
    <div className={cx('social-login-button', type)}>
      <div className="icon">icon</div>
      <div className="text">{type}</div>
    </div>
  );
};

export default SocialLoginButton;
