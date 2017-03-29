import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollAnim from 'rc-scroll-anim';
const Element = ScrollAnim.Element;

import ProjectsActions from '../../actions/projects';
import ProjectComponent from './ProjectComponent';

const projects = (require('../../assets/json/projects.json'));
const ScrollOverPack = ScrollAnim.OverPack;
ScrollAnim.scrollScreen.init({ loop: false, scrollInterval: 300, duration: 500 });


class ProjectsScrollListComponent extends Component {
    state = {prevMode: 'leave'};

    onChange = (id) =>
        (mode, scrollName) => {
            // console.log(mode);
            // console.log(this.state.prevMode);
            // console.log(id);
            // console.log(this.props.setProjectBackground);
            if (this.state.prevMode === 'leave' && mode.mode == 'enter') {
                this.props.setProjectBackground(mode.id);
            }
            this.setState({prevMode: mode.mode});
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
    setProjectBackground: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => bindActionCreators(new ProjectsActions, dispatch);

export default connect(undefined, mapDispatchToProps)(ProjectsScrollListComponent);