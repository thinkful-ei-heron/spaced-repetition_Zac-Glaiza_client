import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import LearningApiService from '../../services/learning-api-service'
import WordContext from '../../contexts/WordContext'

import Learner from '../../components/Learner/Learner'

export default class LearningRoute extends Component {
  state = {
    nextWord: '',
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    totalScore: 0,
    error: null
  }

  static contextType = LanguageContext;

  componentDidMount() {
    LearningApiService.getLanguageHead()
      .then(data => {
        console.log(data)
        this.setState({
          nextWord: data.nextWord,
          wordCorrectCount: data.wordCorrectCount,
          wordIncorrectCount: data.wordIncorrectCount,
          totalScore: data.totalScore
        })
      })
      .catch(res => this.setState({ error: res.error }));
  }

  render() {
    const value = {
      nextWord: this.state.nextWord,
      wordCorrectCount: this.state.wordCorrectCount,
      wordIncorrectCount: this.state.wordIncorrectCount,
      totalScore: this.state.totalScore
    }

    return (
      <WordContext.Provider value={value}>
        <section className='container'>
          <h3>Translate the word:</h3><span hidden>{this.state.nextWord}</span>
          <Learner word={this.state.word} />
        </section>
      </WordContext.Provider>
    );
  }
}
