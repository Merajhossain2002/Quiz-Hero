import React from "react";
import QuizeChoice from "../QuizChoice/QuizeChoice";
import "./QuizCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizCard = ({ quizInfo }) => {
  const { id, question, options, correctAnswer } = quizInfo;
  console.log(quizInfo);

  const diffToast = () => {
    toast.success("Answer: " + correctAnswer, {
      position: "top-center",
    });
  };

  function isCorrect(event) {
    const selected = event.target;
    selected.style.backgroundColor = "#67b8ff";
    selected.style.color = "#fff";

    const selectedValue = selected.innerText;
    const correctAnswer = id;
    console.log(selectedValue);
    console.log(id);

    if (selectedValue === correctAnswer) {
      alert("correct");
      toast.success("Congrats, Your answer is right", {
        position: "top-center",
      });
      selected.style.backgroundColor = "green";
      selected.style.border = "green";
    } else {
      toast.error("oops, Your answer is wrong", {
        position: "top-center",
      });
      selected.style.backgroundColor = "red";
      selected.style.border = "red";
    }
  }

  return (
    <div className="mt-5 p-2 p-sm-5 border border-2 text-start position-relative">
      <svg
        onClick={diffToast}
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
          <div className="choice pb-4">
            {options.map((choice, idx) => (
              <QuizeChoice
                key={idx}
                choice={choice}
                isCorrect={isCorrect}
              ></QuizeChoice>
            ))}
          </div>
          <div>
            <p id={id} className="d-none">
              {correctAnswer}
            </p>
          </div>

          <ToastContainer />
          <ToastContainer />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
