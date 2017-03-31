import React, {Component, PropTypes} from 'react';

export class Author extends React.Component {

    render() {
        const figureBackground = {
            backgroundImage: 'url(../src/assets/img/bgleftmain.jpg)',
        };
        return (
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__img">
                        <figure className="absolute-bg" style={figureBackground}></figure>
                    </div>
                    <div className="profile__container">
                        <p>This article was inspired by Martin Moore. More information you can find here:
                            <a href={this.props.link.linkItself}>{this.props.link.linkTitle}</a>
                        </p>
                        <ul className="profile__social">
                            <li><a className="fa fa-lg fa-envelope-o" href="mailto:pavlovandrew@mail.ru"></a></li>
                            <li><a className="fa fa-lg fa-facebook" href="https://www.facebook.com/andrew.pavlov.980" target="_blanc"></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}