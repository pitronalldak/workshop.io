import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Project extends React.Component {

    render() {
        return (
            <li className="preview">
                <h2 className="project__title">{this.props.title}</h2>
                <span className="preview__date">{this.props.date}</span>
                <br/><br/>
                <h3 className="preview__header">Project description</h3>
                <p className="preview__excerpt">{this.props.description}</p>
                <h3 className="preview__header">Development</h3>
                <div className="preview__excerpt">
                    <ul className="project__dev__list">
                        {this.props.development.map(function(dev, i) {
                            return <li key={i}>{dev} </li>
                        })}
                    </ul>
                </div>
                <h3 className="preview__header">Implemented technologies</h3>
                {this.props.technologies.map(function(tech, i) {
                    return <figure key={i} className={"project__technology " + tech} />
                })}
                <h3 className="project__link__title"><Link className='project__link' href={this.props.link.linkItself} target="_blank">{this.props.link.linkTitle}</Link></h3>
            </li>
        );
    }
}