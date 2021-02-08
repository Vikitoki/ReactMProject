import React, { Component } from "react";
import Layout from "../../hoc/layout/layout";
import Quiz from "../../containers/quiz/quiz";
import QuizCreator from "../../containers/quiz-creator/quiz-creator";
import QuizList from "../../containers/quiz-list/quiz-list";
import AuthForm from "../../containers/auth-form/auth-form";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth-form" component={AuthForm} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </Layout>
    );
  }
}
