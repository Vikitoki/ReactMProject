import React from "react";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import "./finnaly-results.scss";

const FinnalyResults = ({ quiz, results, onRetry }) => {
  const succesTotal = Object.keys(results).reduce((total, key) => {
    if (results[key] === "succes") {
      total++;
    }

    return total;
  }, 0);

  const resultsItems = quiz.map((quizItem, index) => {
    const clsForItem = ["finnaly-results__item"],
      clsForIcon = ["fa"];

    if (results[index] === "succes") {
      clsForItem.push(" right");
      clsForIcon.push(" fa-check");
    } else {
      clsForItem.push(" wrong");
      clsForIcon.push(" fa-times");
    }

    const questionText = quizItem.question;

    console.log(questionText);

    return (
      <li key={index} className={clsForItem.join("")}>
        <span>
          {index + 1}
          &nbsp;
          {questionText}
        </span>
        <i className={clsForIcon.join("")}></i>
      </li>
    );
  });

  return (
    <div className="finnaly-results">
      <h3 className="finnaly-results__title">Опрос завершён!</h3>
      <div className="finnaly-results__content">
        <div className="finnaly-results__top">
          <ul className="finnaly-results__list">{resultsItems}</ul>
        </div>
        <div className="finnaly-results__bottom">
          <div className="finnaly-results__total">
            Вы ответили правильно на {succesTotal} из {quiz.length}
          </div>

          <div className="finnaly-results__btns">
            <Button onClick={onRetry} type="primary">
              Повторить
            </Button>

            <Link to={"/"}>
              <Button onClick={onRetry} type="succes">
                Переключиться на список тестов
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinnalyResults;
