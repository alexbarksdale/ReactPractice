import React, { Component } from 'react';
import axios from 'axios';

export default class ResourceList extends Component {
    state = { resources: [] };

    async componentDidMount() {
        const res = await axios.get(
            `http://jsonplaceholder.typicode.com/${this.props.resource}`
        );

        this.setState({ resources: res.data });
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            const res = await axios.get(
                `http://jsonplaceholder.typicode.com/${this.props.resource}`
            );

            this.setState({ resources: res.data });
        }
    }

    render() {
        return <div>{this.state.resources.length}</div>;
    }
}
