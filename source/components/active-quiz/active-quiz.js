import React from "react";
import AnswersQuizList from "./answers-quiz-list/answers-quiz-list";

import "./active-quiz.scss";

const ActiveQuiz = ({
  question,
  answers,
  onQuestionClick,
  quizLenght,
  currentQuestion,
  answerState,
}) => (
  <div className="active-quiz">
    <div className="active-quiz__top">
      <div className="active-quiz__ask">{question}</div>
      <span className="active-quiz__order">
        {currentQuestion} из {quizLenght}
      </span>
    </div>
    <AnswersQuizList
      answers={answers}
      onQuestionClick={onQuestionClick}
      answerState={answerState}
    />
  </div>
);

export default ActiveQuiz;
