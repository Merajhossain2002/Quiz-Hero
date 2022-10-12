import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../Quiz Card/QuizCard";
import "./Quiz.css";

const Quiz = () => {
  const quizData = useLoaderData();
  const { name } = quizData.data;
  return (
    <div className="container">
      <h1 className="mt-3 fw-bold border-bottom pb-3">Quiz of {name}</h1>
      <div className="quiz-card">
        {quizData.data.questions.map((quizInfo) => (
          <QuizCard key={quizInfo.id} quizInfo={quizInfo}></QuizCard>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
