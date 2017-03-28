import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollAnim from 'rc-scroll-anim';
const Element = ScrollAnim.Element;

import ProjectsActions from '../../actions/projects';
import ProjectComponent from './ProjectComponent';

const projects = (require('../../assets/json/projects.json'));
const ScrollOverPack = ScrollAnim.OverPack;
ScrollAnim.scrollScreen.init({ loop: false, scrollInterval: 100, duration: 200 });


class ProjectsScrollListComponent extends Component {

    onChange = (id) =>
        (mode, scrollName) => {
            const {setProjectBackground} = this.props;
            if ((window.pageYOffset == 0)
                || ((window.pageYOffset < 900) && (id == 2) && (mode.mode == 'leave'))) {
                setProjectBackground('project1');
            } else if (((window.pageYOffset < 900) && (id == 2) && (mode.mode == 'enter'))
                || ((window.pageYOffset < 900) && (id == 1) && (mode.mode == 'enter'))
                || ((window.pageYOffset < 900) && (id == 3) && (mode.mode == 'leave'))) {
                setProjectBackground('project2');
            } else if (window.pageYOffset < 1800) {
                setProjectBackground('project3');
            } else if (window.pageYOffset < 2700) {
                setProjectBackground('project4');
            } else if (window.pageYOffset < 3600) {
                setProjectBackground('project5');
            } else if (window.pageYOffset < 4500) {
                console.log("<4500");
            }
            console.log(id);
            console.log(mode);
            console.log(scrollName);
            console.log(window.pageYOffset);
        };

    render () {

        return (
            <div >
                {projects.map((project, key) =>
                    <div
                        id={'page'+project.id}
                        key={project.id}
                    >
                        <ScrollOverPack
                            onChange={this.onChange(project.id)}
                            id={project.id}
                            key={project.id}
                            playScale={1}
                            location={'page'+project.id}  //finish scroll of last element
                        >
                            <ProjectComponent
                                key={project.id}
                                title={project.title}
                                date={project.date}
                                description={project.description}
                                development={project.development}
                                technologies={project.technologies}
                                link={project.link}
                            />
                        </ScrollOverPack>
                    </div>
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