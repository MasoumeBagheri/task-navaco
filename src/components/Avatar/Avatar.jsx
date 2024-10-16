import { useRef, useState } from "react";
import classes from "./Avatar.module.css";
export const Avatar = ({ loading }) => {
  const [isStopped, setIsStopped] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [pausedPosition, setPausedPosition] = useState(0);
  const avatarRef = useRef(null);

  const pauseAnimation = () => {
    const avatarElement = avatarRef.current;
    if (avatarElement) {
      const computedStyle = window.getComputedStyle(avatarElement);
      const matrix = new DOMMatrix(computedStyle.transform);
      setPausedPosition(matrix.m41);
    }

    setIsStopped(true);
  };

  const resumeAnimation = () => {
    setIsStopped(false);
  };

  const handleClick = () => {
    pauseAnimation();
    setShowMessage(true);
  };

  const closePopup = () => {
    setShowMessage(false);
    resumeAnimation();
  };

  return (
    <>
      {!loading && (
        <div className={classes["avatar-container"]}>
          <div
            ref={avatarRef}
            className={`${classes.avatar} ${isStopped ? classes.stopped : ""}`}
            onMouseEnter={pauseAnimation}
            onMouseLeave={() => !showMessage && resumeAnimation()}
            onClick={handleClick}
            style={{
              transform: isStopped ? `translateX(${pausedPosition}px)` : "none",
              animationPlayState: isStopped ? "paused" : "running",
            }}
          ></div>
        </div>
      )}

      {showMessage && (
        <div className={classes.popup}>
          <div className={classes["popup-content"]}>
            <h2>Check Out Our Featured Product!</h2>
            <p>
              <strong>Product Name:</strong> WD 4TB Gaming Drive Works with
              Playstation 4 Portable External Hard Drive
            </p>
            <p>
              <strong>Description:</strong> This is a must-have product that
              will improve your life in countless ways. Get yours today!
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
