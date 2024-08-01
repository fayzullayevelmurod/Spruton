import React from "react";
import { Header } from "./Header";
import assets from "../assets";

export const TakeGift = ({ showModal, onVideoEnd }) => {
  return (
    <>
      <div className={`overlay ${showModal ? "show" : ""}`}></div>
      <div className={`take-gift__modal ${showModal ? "show" : ""}`}>
        <Header />
        <div className="modal-content">
          {showModal && (
            <video
              src={assets.takeGiftVideo}
              autoPlay={true}
              onEnded={onVideoEnd}
            ></video>
          )}
        </div>
      </div>
    </>
  );
};
