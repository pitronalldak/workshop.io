import React, {Component, PropTypes} from 'react';

export default class ContentComponent extends Component {

    render() {

        return (
            <section className="section-padding bg-grey">
                <div className="post">
                    {this.props.text}
                </div>
            </section>
        );
    }
}