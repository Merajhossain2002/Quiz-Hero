import React from "react";
import QuizeChoice from "../QuizChoice/QuizeChoice";
import "./QuizCard.css";

const QuizCard = ({ quizInfo }) => {
  const { question, options } = quizInfo;
  return (
    <div className="mt-5 p-2 p-sm-5 border border-2 text-start">
      <div className="">
        <p className="fw-bold text-primary">Question: {question}</p>
        <div>
          <p className="fw-semibold">select answer:</p>
          <div className="choice">
            {options.map((choice, idx) => (
              <QuizeChoice key={idx} choice={choice}></QuizeChoice>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
