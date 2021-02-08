import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./quiz-list.scss";

export default class QuizList extends Component {
  renderQuizItems = () => {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz} className="quiz-list__link">
            Тест {quiz}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    return (
      <>
        <div className="quiz-list">
          <div className="quiz-list__title">
            <h1>Список вопросов</h1>
          </div>
          <nav className="quiz-list__nav">
            <ul className="quiz-list__choice">{this.renderQuizItems()}</ul>
          </nav>
        </div>
      </>
    );
  }
}
