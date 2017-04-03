import React, {Component, PropTypes} from 'react';
import  FooterComponent from './FooterComponent';

class MainPage extends Component {

    render() {
        return (
            <div className="previews">
                <figure className="absolute-bg preview__img"></figure>
                <div className="title__container">
                    <span>Welcome to</span>
                    <h1>Web factory</h1>
                    <span>Best solution for your ideas</span>
                </div>
                <div>
                    <div className="description">
                        <p className="main-text">We are team of web developers, passionate about our job.</p>
                        <p className="main-text">
                            We create unique web, mobile and desktop applications
                            based on modern technologies.
                        </p>
                    </div>
                    <figure className="relative-bg tools__img"></figure>
                    <FooterComponent />
                </div>
            </div>
        );
    }
}

MainPage.PropTypes = {
    children: PropTypes.element.isRequired
};

export default MainPage;