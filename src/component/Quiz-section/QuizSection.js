import React from "react";
import { Link } from "react-router-dom";
import "./QuizSection.css"

const QuizSection = ({ quiz }) => {
  const { id, logo, name, total } = quiz;
  return (
    <div className="bg-dark p-3 text-white rounded-3">
      <img className="img-fluid quiz-img border-bottom p-3" src={logo} alt="quiz-img" />
      <h4 className="mt-2 text-start">Name: {name} </h4>
      <p className=" text-start">Total Quiz : {total}</p>
      <button className="btn btn-primary">
        <Link className="text-white text-decoration-none
        " to={`/quiz/${id}`}>Start Quiz</Link>
      </button>
    </div>
  );
};

export default QuizSection;
