import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Project extends Component {

    onMouseOver = () => {
        if (this.props.visibleProjectId !== this.props.project.id) {
            this.props.setProjectBackground(this.props.project.id);
        }
    };

    render() {

        const {project} = this.props;

        return (
            <li className="preview"  onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                <div className="preview__link">
                    <span className="preview__date">{project.date}</span>
                    <Link className='project__link' href={project.link.linkItself} target="_blank">
                        <h2 className="preview__header">{project.title}</h2>
                    </Link>

                    <p className="preview__excerpt">{project.description}</p>

                    {project.technologies.map(function(tech, i) {
                        return <figure key={i} className={"project__technology " + tech} />
                    })}
                </div>
            </li>
        );
    }
}