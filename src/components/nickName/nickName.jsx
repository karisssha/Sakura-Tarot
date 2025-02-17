import React, { useState, useEffect } from "react";
import Styles from "./NickName.module.css";

const NicknameDisplay = () => {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    setNickname(storedNickname || 'input name');
  }, []);

  return (
    <div className={Styles.nicknameContainer}>
      <img 
        src="src/assets/img/sakura.png" 
        className={Styles.sakura} 
        alt="sakura" 
      />
      <span className={Styles.nicknameText}>
        {nickname}
      </span>
    </div>
  );
};

export default NicknameDisplay;
