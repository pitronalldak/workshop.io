import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class HeaderComponent extends Component {

    render() {
        let figureStyle = {
            backgroundImage: 'url(../src/assets/img/article' + this.props.id + '.png)'
        };
        return (
            <header className="section-padding--lg mast rellax">
                <Link className="nav nav--white" to="/blog">
                    <i className="fa fa-lg fa-arrow-left"></i>
                    <span>Back to all posts</span>
                </Link>
                <figure className="absolute-bg mast__img" style={figureStyle}></figure>
                <div className="mast__container">
                    <span><time>{this.props.date}</time></span>
                    <h1>{this.props.title}</h1>
                    <span></span>
                </div>
            </header>
        );
    }
}