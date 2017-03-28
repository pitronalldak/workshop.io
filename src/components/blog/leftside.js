import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/projects';
let articles = require('../../assets/json/articles.json');

class LeftSide extends Component {

    render() {
        return (
            <div className="image__scroll blog__left__pics">
                {articles.map(function(article, i) {
                    return <img key={i} className="leftSide__img__blog" src={'src/assets/img/article' + (article.id) + '.png'}/>
                })}
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);