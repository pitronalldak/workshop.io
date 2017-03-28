import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export class Next extends React.Component {

    render() {
        const {article} = this.props;

        const aBackground = {
            backgroundImage: 'url(../src/assets/img/article' + article.id + '.png)'
        };

        return (
            <section className="next">
                <Link className="next__link" to={"/blog/" + article.id} style={aBackground}>
                    <div className="next__container">
                        <span>Read Next</span>
                        <h2>{article.title}</h2>
                    </div>
                </Link>
            </section>
        );
    }
}