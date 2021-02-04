import React from "react";
import AnswersQuizListItem from "../answers-quiz-list-item/answers-quiz-list-item";

const AnswersQuizList = ({ onQuestionClick, answers, answerState }) => {
  const answersListItems = answers.map((item, index) => {
    return (
      <AnswersQuizListItem
        answerState={answerState ? answerState[item.id] : null}
        onQuestionClick={onQuestionClick}
        key={index}
        text={item.text}
        idItem={item.id}
      />
    );
  });

  return <ul className="active-quiz__list">{answersListItems}</ul>;
};

export default AnswersQuizList;
