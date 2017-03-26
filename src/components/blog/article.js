import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/projects';

class Article extends React.Component {

    render() {
        const {setProjectBackground} = this.props;

        return (
                <li className="preview preview__blog" onMouseOver={() => this.props.setArticleBackground('article' + (this.props.i+1))}>
                    <Link className="preview__link" to={this.props.articleLink}>
                        <span className="preview__date" >{this.props.date}</span>
                        <h2 className="preview__header">{this.props.title}</h2>
                        <p className="preview__excerpt preview__excerpt__blog">{this.props.excerpt}</p>
                        <span className="preview__more">Read More</span>
                    </Link>
                </li>
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