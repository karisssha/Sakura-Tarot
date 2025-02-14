import React from "react";
import "./NicknameDisplay.css";

const NicknameDisplay = ({ nickname }) => {
  return (
    <div className="nickname-container">
      <span className="nickname-icon">👤</span>
      <span className="nickname-text">{nickname}</span>
    </div>
  );
};

export default NicknameDisplay;
