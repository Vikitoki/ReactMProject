import React from "react";

const AnswersQuizListItem = ({
  text,
  onQuestionClick,
  idItem,
  answerState,
}) => {
  const cls = [];

  if (answerState) {
    cls.push(answerState);
  }

  return (
    <li className={cls.join("")} onClick={() => onQuestionClick(idItem)}>
      {text}
    </li>
  );
};

export default AnswersQuizListItem;
