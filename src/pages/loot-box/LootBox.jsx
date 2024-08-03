import { useState } from 'react';
import assets from '../../assets';
import {
  TakeGift,
  ConnectWallet,
  ConectedWallet,
  NotFound,
} from '../../components';
import './loot-box.scss';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const LootBox = () => {
  const [takeGift, setTakeGift] = useState(false);
  const [connectWalletModal, setConnectWalletModal] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(true);
  const navigate = useNavigate();

  const toggleTakeGift = () => {
    setTakeGift(!takeGift);
  };

  const toggleConnectWalletModal = () => {
    setConnectWalletModal(!connectWalletModal);
  };

  const toggleNotFound = () => {
    setShowNotFound(!showNotFound);
  };

  const handleVideoEnd = () => {
    setTakeGift(false);
    setConnectWalletModal(true);
  };

  const handleNotFound = () => {
    setConnectWalletModal(false);
    setShowNotFound(true);
  };

  const handleConnectedWallet = () => {
    setConnectWalletModal(false);
    setConnectedWallet(true);
  };

  return (
    <>
      <div className="loot-box container">
        <span className="content-text">Remained</span>
        <span className="content-text">1 912 000 / 2 000 000</span>
        <div className="gift-box">
          <img className="gift-box__img" src={assets.giftBox} alt="" />
        </div>
        <span className="content-text">
          To open the lootbox you need <br /> to fulfil a task
        </span>
        <Button
          className="go-btn"
          label="Go"
          severity="help"
          onClick={toggleTakeGift}
        />
      </div>
      <TakeGift showModal={takeGift} onVideoEnd={handleVideoEnd} />
      <ConnectWallet
        showModal={connectWalletModal}
        handleNotFound={handleNotFound}
      />
      <ConectedWallet showModal={connectedWallet} />
      <NotFound toggleNotFound={toggleNotFound} showNotFound={showNotFound} />
    </>
  );
};
