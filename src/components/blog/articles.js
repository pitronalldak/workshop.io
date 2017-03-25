import React, {Component, PropTypes} from 'react';
import { Watch } from 'scrollmonitor-react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/actions';
import Article from './article';
let articles = require('../../assets/json/articles.json');

/*default Watch(*/class Articles extends React.Component {

    render() {
        // const {setProjectBackground} = this.props;
        // if (this.props.isInViewport) {
        //     () => setProjectBackground('project1');
        // }
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