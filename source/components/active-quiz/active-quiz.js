import React from "react";
import AnswersQuizList from "./answers-quiz-list/answers-quiz-list";

import "./active-quiz.scss";

const ActiveQuiz = (props) => (
  <div className="active-quiz">
    <div className="active-quiz__top">
      <div className="active-quiz__ask">Как дела?</div>
      <span className="active-quiz__order">4 из 12</span>
    </div>
    <AnswersQuizList answers={props.answers} />
  </div>
);

export default ActiveQuiz;
