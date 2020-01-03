import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import LearningApiService from '../../services/learning-api-service'
import WordContext from '../../contexts/WordContext'

import Learner from '../../components/Learner/Learner'

export default class LearningRoute extends Component {
  state = {
    orig: '',
    trans: '',
    correctCount: 0,
    incorrectCount: 0,
    totalScore: 0,

    mode: null,
    guess: '',
    next: '',

    error: null
  }

  static contextType = LanguageContext;

  componentDidMount() {
    this.loadWord();
  }

  loadWord() {
    LearningApiService.getLanguageHead()
      .then(data => {
        this.setState({
          orig: data.nextWord,
          correctCount: data.wordCorrectCount,
          incorrectCount: data.wordIncorrectCount,
          totalScore: data.totalScore
        })
      })
      .catch(res => this.setState({ error: res.error }));
  }

  submitHandler = ev => {
    ev.preventDefault();
    const guess = ev.target.guess.value;
    this.setState({ guess })
    LearningApiService.languageGuess(guess)
      .then(res => {
        this.setState({
          next: res.nextWord,
          trans: res.answer,
          mode: res.isCorrect
        });
      })
      .catch(res => this.setState({ error: res.error }))

    //   LearningApiService.getLanguageHead()
    //   .then(data => {
    //         this.setState({ 
    //         orig: data.nextWord,
    //         correctCount: data.wordCorrectCount,
    //         incorrectCount: data.wordIncorrectCount,
    //         totalScore: data.totalScore
    //   });
    // })
    //   .catch(res => this.setState({ error: res.error }))
  }

  nextHandler = () => {
    this.setState({ mode: null });
    this.loadWord();
  }

  render() {
    const value = {
      orig: this.state.orig,
      trans: this.state.trans,
      correctCount: this.state.correctCount,
      incorrectCount: this.state.incorrectCount,
      totalScore: this.state.totalScore,

      mode: this.state.mode,
      guess: this.state.guess,
      next: this.state.next,

      error: this.state.error,

      submitHandler: this.submitHandler,
      nextHandler: this.nextHandler
    }

    // console.log('correct count =>' + this.state.correctCount)
    // console.log('inCorrect count =>' + this.state.incorrectCount)

    return (
      <WordContext.Provider value={value}>
        <section className='container'>
          <Learner />
        </section>
      </WordContext.Provider>
    );
  }
}
