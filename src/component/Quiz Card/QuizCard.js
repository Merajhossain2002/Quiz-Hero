import React from "react";
import QuizeChoice from "../QuizChoice/QuizeChoice";
import "./QuizCard.css";

const QuizCard = ({ quizInfo }) => {
  const { question, options, correctAnswer } = quizInfo;
  return (
    <div className="mt-5 p-2 p-sm-5 border border-2 text-start position-relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      <div>
        <p className="fw-bold text-primary">Question: {question}</p>
        <div>
          <p className="fw-semibold">select answer:</p>
          <div className="choice">
            {options.map((choice, idx) => (
              <QuizeChoice key={idx} choice={choice}></QuizeChoice>
            ))}
          </div>
          <div className="correct-answer pt-3 ">
            <p className="ms-3 fw-semibold">
              Correct Answer: <span className="fw-bold">{correctAnswer}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
