import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizSection from "../Quiz-section/QuizSection";
import "./QuizArea.css";

const QuizArea = () => {
  const quizes = useLoaderData();
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
          <p>
            <small className="fw-bold">
              Scroll Down{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </small>
          </p>
        </div>
      </div>
      <div className="mt-2">
        <div>
          <h1>Total Quizes:{quizes.data.length}</h1>
        </div>
        <div className="quiz my-3 bg-black p-3">
          {quizes.data.map((quiz) => (
            <QuizSection key={quiz.id} quiz={quiz}></QuizSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizArea;
