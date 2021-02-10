import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import { createControl } from "../../form-framework/form-framework";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";

import "./quiz-creator.scss";

function createControlOption(num) {
  return createControl(
    {
      label: `Вариант ${num}`,
      errorMessage: "Значение не может быть пустым",
      id: num,
    },
    { required: true }
  );
}

function createFormContols() {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Вопрос не может быть пустым",
      },
      { required: true }
    ),
    option1: createControlOption(1),
    option2: createControlOption(2),
    option3: createControlOption(3),
    option4: createControlOption(4),
  };
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    rightAnswer: 1,
    formControls: createFormContols(),
  };

  createNewQuestion = () => {};

  createNewTest = () => {};

  submitQuestion = () => {};

  renderControls = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <div className="quiz-creator__item" key={`${controlName}-{index}`}>
          <Input
            key={index}
            type={control.type}
            errorMessage={control.errorMessage}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            onChange={(event) => {
              this.onChangeHandler(event.target.value, controlName);
            }}
          />
        </div>
      );
    });
  };

  selectChangeHandler = (event) => {
    this.setState({
      rightAnswer: +event.target.value,
    });
  };

  render() {
    const select = (
      <Select
        label="Выберите правильный ответ"
        value={this.state.rightAnswer}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );

    return (
      <div className="quiz-creator">
        <div className="quiz-creator__title">
          <h1>Создайте свой собственный вопрос</h1>
        </div>
        <form onSubmit={this.submitQuestion} className="quiz-creator__form">
          <div className="quiz-creator__content">{this.renderControls()}</div>
          <div className="quiz-creator__select">{select}</div>

          <div className="quiz-creator__btns">
            <Button type="primary" onClick={this.createNewQuestion}>
              Добавить вопрос
            </Button>
            <Button type="succes" onClick={this.createNewTest}>
              Открыть тест
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
