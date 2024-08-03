import React from 'react';
import './connect-wallet.scss';
import { Avatar } from 'primereact/avatar';
import assets from '../../assets';
import { Button } from 'primereact/button';

export const ConnectWallet = ({
  showModal,
  handleNotFound,
  toggleConnectWalletModal,
}) => {
  return (
    <>
      <div className={`overlay ${showModal ? 'show' : ''}`}></div>
      <div className={`connect-wallet modal ${showModal ? 'show' : ''}`}>
        <div className="connect-wallet__header">
          <Avatar image={assets.avatar} size="large" shape="circle" />
          <button
            className="connect-wallet__btn"
            onClick={toggleConnectWalletModal}
          >
            <img src={assets.wallet} alt="wallet" />
            <span>Connect wallet</span>
          </button>
        </div>
        <div className="connect-wallet__content">
          <div className="priz-box">
            <img src={assets.priz} alt="" />
          </div>
          <h3>You unlocked</h3>
          <h1>25</h1>
          <span className="text">Jettons</span>
        </div>
        <Button
          className="go-btn"
          label="Claim"
          severity="help"
          onClick={handleNotFound}
        />
      </div>
    </>
  );
};
