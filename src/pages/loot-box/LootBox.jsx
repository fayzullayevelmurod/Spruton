// import { useState } from "react";
// import assets from "../../assets";
// import { TakeGift } from "../../components";
// import "./loot-box.scss";
// import { Button } from "primereact/button";
// import { useNavigate } from "react-router-dom";

// export const LootBox = () => {
//   const [takeGift, setTakeGift] = useState(false);
//   const navigate = useNavigate();

//   const toggleTakeGift = () => {
//     setTakeGift(!takeGift);
//   };

//   const handleVideoEnd = () => {
//     setTakeGift(false);
//     navigate("/connect-wallet");
//   };

//   return (
//     <>
//       <div className="loot-box container">
//         <span className="content-text">Remained</span>
//         <span className="content-text">1 912 000 / 2 000 000</span>
//         <img className="gift-box__img" src={assets.giftBox} alt="" />
//         <span className="content-text">
//           To open the lootbox you need <br /> to fulfil a task
//         </span>
//         <Button
//           className="go-btn"
//           label="Go"
//           severity="help"
//           onClick={toggleTakeGift}
//         />
//       </div>
//       {/* {takeGift &&  />} */}
//       <TakeGift showModal={takeGift} />
//     </>
//   );
// };
import { useState } from "react";
import assets from "../../assets";
import { TakeGift } from "../../components";
import "./loot-box.scss";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const LootBox = () => {
  const [takeGift, setTakeGift] = useState(false);
  const navigate = useNavigate();

  const toggleTakeGift = () => {
    setTakeGift(!takeGift);
  };

  const handleVideoEnd = () => {
    setTakeGift(false);
    // navigate("/connect-wallet");
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
    </>
  );
};
