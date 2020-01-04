import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

//! Set up a 'static contextType' when using a single Context. When using multiple contexts use Consumer

export default class Button extends Component {
    // static is like doing Button.contextType = LanguageContext
    // static contextType = LanguageContext; // access the value of the context

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <ColorContext.Consumer>
                {(color) => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {/* automatically invoked */}
                            {({ language }) =>
                                language === 'english' ? 'Submit' : 'Voorleggen'
                            }
                        </LanguageContext.Consumer>
                    </button>
                )}
            </ColorContext.Consumer>
        );
    }
}
