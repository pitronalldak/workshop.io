import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Articles from './articles';

class Blog extends Component {

    render() {

        return (
            <div className="previews no-margin-left">
                <div className="place__forHeader"></div>
                <Articles />
            </div>
        );
    }
}

export default Blog;