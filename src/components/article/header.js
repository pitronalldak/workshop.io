import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {

    render() {
        let figureStyle = {
            backgroundImage: "url('../src/assets/img/article1.png')"
        };
        return (
            <header className="section-padding--lg mast rellax">
                <Link className="nav nav--white" to="/blog">
                    <i className="fa fa-lg fa-arrow-left"></i>
                    <span>Back to all posts</span>
                </Link>
                <figure className="absolute-bg mast__img" style={figureStyle}></figure>
                <div className="mast__container">
                    <span><time></time></span>
                    <h1></h1>
                    <span></span>
                </div>
            </header>
        );
    }
}