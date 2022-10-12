import React from "react";
import QuizSection from "../Quiz-section/QuizSection";
import "./QuizArea.css";

const QuizArea = () => {
    
  return (
    <div className="container mt-3">
      <div className="d-md-flex hero-area p-2 rounded">
        <img
          className="img-fluid hero-img"
          src="https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?w=740&t=st=1665463293~exp=1665463893~hmac=79ee5657595bb492244c8c75ba4914bbeb2fe9cd2af2d3526704e19e144e71e5"
          alt="bg"
        />
        <div className="ms-lg-5  mt-2 align-self-center">
          <h1 className="">Welcome to Quiz Hero</h1>
          <p className="text-danger fw-semibold">
            Play quiz and challenge your brain.
          </p>
        </div>
      </div>
      <div className="mt-2">
        <div>
          <h1>Total Quiz: </h1>
        </div>
        {}
        <QuizSection></QuizSection>
      </div>
    </div>
  );
};

export default QuizArea;
