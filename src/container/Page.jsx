import React, { Component } from 'react';
import { connect } from 'react-redux';


class Page extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Test!!</h1>
            </div>
        )
    }

}

export default connect(mapStateToProps, null)(Page);