import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions/projects';

class BlogArticleComponent extends Component {

    render() {

        return (
            <li className="preview preview__blog">
                <div className="leftSide__img__blog">
                <img
                    className="img__blog"
                    src={'src/assets/img/article' + this.props.id + '.png'}>
                </img>
                </div>
                <Link className="preview__link preview__link_blog" to={'/blog/' + (this.props.id)}>
                    <span className="preview__date" >{this.props.date}</span>
                    <h2 className="preview__header">{this.props.title}</h2>
                    <p className="preview__excerpt preview__excerpt__blog">{this.props.excerpt}</p>
                </Link>
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(undefined, mapDispatchToProps)(BlogArticleComponent);