import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/projects';

class Article extends React.Component {

    render() {

        return (
            <li className="preview preview__blog">
                <img
                    className="leftSide__img__blog"
                    src={'src/assets/img/article' + this.props.id + '.png'}>
                </img>
                <Link className="preview__link" to={"blog/" + (this.props.id + 1)}>
                    <span className="preview__date" >{this.props.date}</span>
                    <h2 className="preview__header">{this.props.title}</h2>
                    <p className="preview__excerpt preview__excerpt__blog">{this.props.excerpt}</p>
                    <span className="preview__more">Read More</span>
                </Link>
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(undefined, mapDispatchToProps)(Article);