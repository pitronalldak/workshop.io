import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Project extends React.Component {

    render() {
        return (
            <li className="preview">
                <div className="preview__link">
                    <span className="preview__date">{this.props.date}</span>

                    <h3 className="preview__header">{this.props.title}</h3>
                    <p className="preview__excerpt">{this.props.description}</p>

                    {this.props.technologies.map(function(tech, i) {
                        return <figure key={i} className={"project__technology " + tech} />
                    })}
                    <h3 className="project__link__title"><Link className='project__link' href={this.props.link.linkItself} target="_blank">{this.props.link.linkTitle}</Link></h3>
                </div>
            </li>
        );
    }
}