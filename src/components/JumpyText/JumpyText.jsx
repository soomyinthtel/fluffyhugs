import React from "react";
import classes from "./JumpyText.module.scss";
import classNames from "classnames";

const JumpyText = ({ text }) => {
  const textArray = Array.from(text).map((letter, index) => {
    return (
      <span
        key={letter + index}
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
        className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      >
        {letter}
      </span>
    );
  });

  return (
    <div
      className={classNames(
        "text-2xl sm:text-6xl font-bold mb-24 relative z-20",

        classes.jumpy
      )}
    >
      {textArray}
    </div>
  );
};

export default JumpyText;
