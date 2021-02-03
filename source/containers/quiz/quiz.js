import React, { Component } from "react";
import ActiveQuiz from "../../components/active-quiz/active-quiz";

import "./quiz.scss";

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          { text: "Вопрос 1" },
          { text: "Вопрос 2" },
          { text: "Вопрос 3" },
          { text: "Вопрос 4" },
        ],
      },
    ],
  };

  render() {
    return (
      <section className="quiz">
        <div className="quiz__main">
          <h2 className="quiz__title">Ответьте пожалуйста на все вопросы</h2>
          <div className="quiz__content">
            <ActiveQuiz answers={this.state.quiz[0].answers} />
          </div>
        </div>
      </section>
    );
  }
}
