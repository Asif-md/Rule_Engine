import React, { Component } from "react";
import quizQuestions from "../utils/api";
import Quiz from "./Quiz";
import Result from "./Result";
import { connect } from "react-redux";
import { updateRule, getRules } from "../actions/ruleActions";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      quizQuestions: [],
    };
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  updateToBackend = () => {
    const { rule } = this.props.rule;
    const { answer } = this.state;

    const body = {
      fullName: rule.fullName,
      address: rule.address,
      DOB: rule.DOB,
      base_price: Number(answer),
    };
    this.props.updateRule(rule.id, body);
  };

  shuffleArray = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected = (event) => {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  };

  setUserAnswer = (answer) => {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  };

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.updateToBackend();

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  };

  getResults = () => {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  };

  setResults = (result) => {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  };

  renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  };

  renderResult = () => {
    return <Result quizResult={this.props.updatedRule.base_price} />;
  };
  render() {
    return (
      <div style={{ width: "600px", margin: "0 auto" }}>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rule: state.rule,
  updatedRule: state.rule.updatedRule,
});

export default connect(mapStateToProps, { updateRule, getRules })(Main);
