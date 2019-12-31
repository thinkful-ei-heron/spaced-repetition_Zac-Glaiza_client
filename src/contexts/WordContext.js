import React, { Component } from 'react';

const LanguageContext = React.createContext({
    nextWord: '',
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    totalScore: 0,
    submitHandler: () => { },
    setError: () => { },
    clearError: () => { },
});

export default LanguageContext;

export class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        const state = { language: {} }

        this.state = state;
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            nextWord: this.nextWord,
            wordCorrectCount: this.state.wordCorrectCount,
            wordIncorrectCount: this.state.wordIncorrectCount,
            totalScore: this.state.totalScore,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
        };

        return (
            <LanguageContext.Provider value={value}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}