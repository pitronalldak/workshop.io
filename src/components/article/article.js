import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/projects';
import Post from './post';
import { Next } from './next';

let articles = require('../../assets/json/articles.json');

class Article extends React.Component {

    render() {
        const article  = articles.find(a => a.id == this.props.params.id);
        const nextArticle = articles[articles.indexOf(articles.find(a => a.id == this.props.params.id)) + 1];
        return (
            <div>
                <div className="place__forHeader"></div>
                <Post article={article}/>
                {nextArticle ?
                    <Next
                        article={nextArticle}
                    /> : null
                }
            </div>
        );
    }
}


Article.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        ArticleBackground: state.ArticleBackground,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Article);