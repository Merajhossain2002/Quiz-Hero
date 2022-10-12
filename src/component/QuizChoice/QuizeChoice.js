import React from "react";

const QuizeChoice = ({ choice , isCorrect}) => {
  return <p onClick={isCorrect} className="p-1 text-center">{choice}</p>;
};

export default QuizeChoice;
