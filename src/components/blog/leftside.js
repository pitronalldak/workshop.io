import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/actions';
let articles = require('../../assets/json/articles.json');

class LeftSide extends Component {

    render() {
        return (
            <div className="image__scroll blog__left__pics">
                <div className="site__title"><h1>WorkShop</h1></div>
                {articles.map(function(article, i) {
                    return <img key={i} className="leftSide__img__blog" src={'src/assets/img/article' + (i+1) + '.png'}/>
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