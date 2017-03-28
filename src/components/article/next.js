import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export class Next extends React.Component {

    render() {
        const aBackground = {
            backgroundImage: 'url(../src/assets/img/article' + this.props.id + '.png)'
        };
        return (
            <section className="next">
                <Link className="next__link" to={"/blog/" + this.props.id} style={aBackground}>
                    <div className="next__container">
                        <span>Read Next</span>
                        <h2>{this.props.title}</h2>
                    </div>
                </Link>
            </section>
        );
    }
}