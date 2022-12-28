import React from "react";
import DateTime from "./dateTime";
import List from "./list";
import "./styles.css";

const RampSplash = ({ input }) => {
  const inputType = typeof input;
  const inputChecker = () => {
    switch (inputType) {
      case "boolean":
        return <DateTime />;
      case "object":
        return <List arrayList={input} />;
      default:
        return <h1>{input}</h1>;
    }
  };
  return <div className="container">{inputChecker()} </div>;
};

export default RampSplash;
