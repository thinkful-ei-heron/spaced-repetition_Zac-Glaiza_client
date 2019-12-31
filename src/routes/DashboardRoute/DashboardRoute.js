import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import DashboardApiService from '../../services/dashboard-api-service'

import Dashboard from '../../components/Dashboard/Dashboard'
import './DashboardRoute.css';

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

    return (
      <LanguageContext.Provider value={value}>
        <section className='container'>
          <h2 className='language-name'>{this.state.language.name}</h2>
          <Dashboard />
        </section>
      </LanguageContext.Provider>
    );
  }
}
