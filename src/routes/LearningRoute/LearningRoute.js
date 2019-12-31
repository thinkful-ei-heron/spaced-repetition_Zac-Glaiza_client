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

    mode: 'guess',
    guess: '',

    error: null
  }

  static contextType = LanguageContext;

  componentDidMount() {
    LearningApiService.getLanguageHead()
      .then(data => {
        this.setState({
          orig: data.nextWord,
          trans: data.translation,
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
      .then(res => console.log(res))
      .catch(res => this.setState({ error: res.error }))
  }

  nextHandler = () => {
    
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

      submitHandler: this.submitHandler,
      nextHandler: this.nextHandler
    }

    // console.log(this.state)

    return (
      <WordContext.Provider value={value}>
        <section className='container'>
          <Learner />
        </section>
      </WordContext.Provider>
    );
  }
}
