import React, { Component } from "react";
import ActiveQuiz from "../../components/active-quiz/active-quiz";
import FinnalyResults from "../../components/finnaly-results/finnaly-results";

import "./quiz.scss";

export default class Quiz extends Component {
  state = {
    results: {},
    finished: false,
    currentQuestion: 0,
    answerState: null,
    quiz: [
      {
        rightAnswer: 1,
        id: 1,
        question: "Какого цвета небо сегодня?",
        answers: [
          { text: "Чёрного", id: 1 },
          { text: "Зелёного", id: 2 },
          { text: "Синего", id: 3 },
          { text: "Красного", id: 4 },
        ],
      },
      {
        rightAnswer: 3,
        id: 2,
        question: "В каком году произошла Октябрьская революция",
        answers: [
          { text: "1956", id: 1 },
          { text: "1898", id: 2 },
          { text: "1917", id: 3 },
          { text: "1905", id: 4 },
        ],
      },
    ],
  };

  onQuestionClick = (itemId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState[key] === "right") {
        return;
      }
    }

    const question = this.state.quiz[this.state.currentQuestion];
    const results = this.state.results;

    if (question.rightAnswer === itemId) {
      results[this.state.currentQuestion] = "succes";
      this.setState({
        results,
        answerState: { [itemId]: "right" },
      });
    } else {
      results[this.state.currentQuestion] = "error";
      this.setState({
        answerState: { [itemId]: "wrong" },
      });
    }

    const timeout = setTimeout(() => {
      if (this.isQuizFinished()) {
        this.setState({
          finished: true,
        });
      } else {
        this.setState({
          currentQuestion: this.state.currentQuestion + 1,
          answerState: null,
        });
      }

      clearTimeout(timeout);
    }, 1000);
  };

  isQuizFinished() {
    return this.state.currentQuestion + 1 === this.state.quiz.length;
  }

  onRetry = () => {
    this.setState({
      finished: false,
      currentQuestion: 0,
      answerState: null,
      results: {},
    });
  };

  render() {
    const content = this.state.finished ? (
      <FinnalyResults
        results={this.state.results}
        quiz={this.state.quiz}
        onRetry={this.onRetry}
      />
    ) : (
      <ActiveQuiz
        onQuestionClick={this.onQuestionClick}
        answers={this.state.quiz[this.state.currentQuestion].answers}
        question={this.state.quiz[this.state.currentQuestion].question}
        quizLenght={this.state.quiz.length}
        currentQuestion={this.state.currentQuestion + 1}
        answerState={this.state.answerState}
      />
    );
    return (
      <section className="quiz">
        <div className="quiz__main">
          <h2 className="quiz__title">Ответьте пожалуйста на все вопросы</h2>
          <div className="quiz__content">{content}</div>
        </div>
      </section>
    );
  }
}
