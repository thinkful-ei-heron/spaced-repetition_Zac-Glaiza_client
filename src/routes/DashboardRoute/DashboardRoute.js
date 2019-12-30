import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import DashboardApiService from '../../services/dashboard-api-service'

import Button from '../../components/Button/Button'
import Dashboard from '../../components/Dashboard/Dashboard'

export default class DashboardRoute extends Component {
  state = {
    error: null,
    language: {},
    words: []
  }

  static contextType = LanguageContext

  componentDidMount() {
    DashboardApiService.getLanguage()
      .then(data => {
        this.setState({
          language: data.language,
          words: data.words
        })
      })
      .catch(res => this.setState({ error: res.error }));
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words
    }

    console.log(this.state.words)

    return (
      <LanguageContext.Provider value={value}>
        <h2>{this.state.language.name}</h2>
        <section className='container'>
          <Button className='btn'>
            Start Practicing
          </Button>
          <Dashboard />
        </section>
      </LanguageContext.Provider>



    );
  }
}
