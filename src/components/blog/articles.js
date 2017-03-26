import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/actions';
import Article from './article';
let articles = require('../../assets/json/articles.json');

class Articles extends React.Component {

    render() {
            return (
                <ul>
                    {articles.map(function(article, i) {
                        return <Article key={i} i={i} title={article.title} date={article.date} excerpt={article.excerpt} articleLink={article.articleLink}/>;
                    })}
                </ul>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        ProjectBackground: state.ProjectBackground,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Articles);