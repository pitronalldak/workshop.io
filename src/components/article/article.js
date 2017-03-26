import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/projects';
import Header from './header';
import { Content } from './content';
import { Next } from './next';

class Article extends React.Component {

    render() {

        return (
            <div>
                <div className="place__forHeader"></div>
                <Header />
                <Content />
                <Next />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ArticleBackground: state.ArticleBackground,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Article);