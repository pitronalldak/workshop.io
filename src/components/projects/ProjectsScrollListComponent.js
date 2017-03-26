import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';

import ProjectsActions from '../../actions/projects';
import ProjectComponent from './ProjectComponent';

const projects = (require('../../assets/json/projects.json'));

class ProjectsScrollListComponent extends Component {

    state = {position: 0};

    componentWillMount () {
        window.addEventListener('scroll', this.trackScroll)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.trackScroll)
    }

    trackScroll = () => {
        if (window.scrollY > this.state.position) {
            window.scrollTo(0, this.state.position + 500);
            this.setState({position: 500})
        }
        console.log(window.scrollY)
    };

    render () {

        return (
            <div >
                {projects.map(project =>
                    <ProjectComponent
                        key={project.id}
                        title={project.title}
                        date={project.date}
                        description={project.description}
                        development={project.development}
                        technologies={project.technologies}
                        link={project.link}
                    />
                )}
            </div>
        );
    }
}

ProjectsScrollListComponent.PropTypes = {
    background: PropTypes.element.isRequired
};

const mapDispatchToProps = (dispatch) => bindActionCreators(new ProjectsActions, dispatch);

export default connect(undefined, mapDispatchToProps)(ProjectsScrollListComponent);