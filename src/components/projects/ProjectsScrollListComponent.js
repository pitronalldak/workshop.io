import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollAnim from 'rc-scroll-anim';

import ProjectsActions from '../../actions/projects';
import ProjectComponent from './ProjectComponent';

const projects = (require('../../assets/json/projects.json'));
const ScrollOverPack = ScrollAnim.OverPack;
ScrollAnim.scrollScreen.init({ loop: true, scrollInterval: 500, duration: 200 });

class ProjectsScrollListComponent extends Component {

    // renderScrollOverPackReplayOption = (id) => {
    //     let ScrollOverPackOption;
    //     if (id==0) {
    //         return 'replay'
    //     }
    // }
    //
    // renderScrollOverPackAlwaysOption = (id, length) => {
    //     let ScrollOverPackOption;
    //     if (id==(length-1)) {
    //         debugger
    //         return '{false}'
    //     }
    // }

    render () {

        return (
            <div >
                {projects.map(project =>
                    <div
                        id={'page'+project.id}
                        key={project.id}
                    >
                        <ScrollOverPack
                            key={project.id}
                            playScale={1}
                            location={'page'+project.id}
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