import React from 'react';
import { Avatar } from 'primereact/avatar';
import assets from '../assets';

export const AvatarBox = () => {
  return (
    <div className="avatar-box">
      <div className="user-box">
        <Avatar image={assets.avatar} size="large" shape="circle" />
        <div>
          <span className="user-name">Vitaly</span>
          <span className="user-id">@appsdesigner</span>
        </div>
      </div>
      <button className="connect-wallet__btn">
        <img src={assets.wallet} alt="wallet" />
        <span>XKJ76...CQ83s</span>
      </button>
    </div>
  );
};
