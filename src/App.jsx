import React, { Component } from 'react';
import Page from './container/Page.jsx'

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Test!!</h1>
                <Page/>
            </div>
        )
    }
}

export default App;