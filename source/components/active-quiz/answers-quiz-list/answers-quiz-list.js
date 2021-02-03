import React from "react";
import AnswersQuizListItem from "../answers-quiz-list-item/answers-quiz-list-item";

import "./answers-quiz-list.scss";

const AnswersQuizList = (props) => {
  const answersListItems = props.answers.map((item, index) => {
    return <AnswersQuizListItem key={index} text={item.text} />;
  });

  return <ul className="active-quiz__list">{answersListItems}</ul>;
};

export default AnswersQuizList;
