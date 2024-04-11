import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [lockState, setLockState] = useState(true);

  const handleLockState = () => {
    setLockState(!lockState);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.lockContainer}>
        <img
          src={
            lockState
              ? "https://assets.ccbp.in/frontend/hooks/lock-img.png"
              : "https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          }
          alt={lockState ? "unlock_img" : "lock_img"}
          className={styles.lockImg}
        />
        <p className={styles.lockText}>
          {lockState ? "Your Device is Locked" : "Your Device is Unlocked"}
        </p>
        <button className={styles.btnText} onClick={handleLockState}>
          {lockState ? "Unlock" : "Lock"}
        </button>
      </div>
    </div>
  );
};

export default App;
