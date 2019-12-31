import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import LearningApiService from '../../services/learning-api-service'

import Learner from '../../components/Learner/Learner'

export default class LearningRoute extends Component {
  state = {
    word: '',
    error: null
  }

  static contextType = LanguageContext;

  componentDidMount() {
    LearningApiService.getLanguageHead()
      .then(data => {
        this.setState({ word: data })
      })
      .catch(res => this.setState({ error: res.error }));
  }

  render() {
    return (
      <section className='container'>
        <h2>Translate the word:</h2><span hidden>{this.state.word.nextWord}</span>
        <Learner word={this.state.word} />
      </section>
    );
  }
}
