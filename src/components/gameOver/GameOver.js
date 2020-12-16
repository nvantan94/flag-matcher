import React, { useState, useEffect } from "react";
import "./GameOver.css";

const left =(window.screen.width - 500) / 2;
const windowFeatures = "location=yes,height=500,width=500,scrollbars=yes,status=yes,top=100,left=" + left;
const encodedUrl = encodeURIComponent(window.location.href); 
const encodedHashtags = encodeURIComponent("flagmatcher");

function GameOver({ show, score, restart }) {
  const [isShow, setIsShow] = useState(show);

  useEffect(() => setIsShow(show), [show]);

  const encodedTitle = encodeURIComponent(`Flag Matcher - My score: ${score}!!!`);

  const genFacebookShareUrl = () => {
    return "https://www.facebook.com/sharer/sharer.php?u=" 
      + encodedUrl + "&quote=" + encodedTitle + "&hashtag=" + encodedHashtags;
  }

  const onFacebookShare = () => {
    const url = genFacebookShareUrl();
    window.open(url, "_blank", windowFeatures);
  }

  const onTwitterShare = () => {
    const url = "https://twitter.com/intent/tweet/"
      + "?url=" + encodedUrl + "&text=" + encodedTitle + "&hashtags=" + encodedHashtags;
    window.open(url, "_blank", windowFeatures);
  }

  const onLinkedinShare = () => {
    const url = "https://www.linkedin.com/sharing/share-offsite/"
      + "?url=" + encodedUrl;
    window.open(url, "_blank", windowFeatures);
  }

  return (
    <div className={`gameOver${isShow ? " show" : ""}`}>
      <div className="gameOver__container">
        <h1>CONGRATS!!!</h1>
        <h3 className="finalScore">your score: {score}</h3>
        <div className="gameOver__share">
          <div className="gameOver__share__button">
            <img
              src="./static/images/icon/facebook.png"
              onClick={onFacebookShare}
              alt='facebook'
            />
          </div>
          <div className="gameOver__share__button">
            <img
              onClick={onTwitterShare}
              src="./static/images/icon/twitter.png"
              alt='twitter'
            />
          </div>
          <div className="gameOver__share__button">
            <img
              src="./static/images/icon/linkedin.png"
              onClick={onLinkedinShare}
              alt='linkedin'
            />
          </div>
        </div>
        <button className="startAgainBtn" onClick={restart}>
          start again!
        </button>
      </div>
    </div>
  );
}

export default GameOver;
