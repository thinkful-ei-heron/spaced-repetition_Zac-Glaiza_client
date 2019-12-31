import React, { Component } from 'react';

const LanguageContext = React.createContext({
	language: {},
    words: [],
    processLanguage: () => {},
    setError: () => {},
    clearError: () => {},
});

export default LanguageContext;

export class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        const state = { 
            language: {},
            words: [],
        }

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
            processLanguage: this.processLanguage,
            language: this.state.language,
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