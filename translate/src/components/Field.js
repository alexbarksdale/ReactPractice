import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
    static contextType = LanguageContext; // access the value in the context

    render() {
        const text = this.context === 'english' ? 'Name' : 'Namm';

        return (
            <div className='ui field'>
                <label>{text}</label>
                <input type='text' />
            </div>
        );
    }
}
