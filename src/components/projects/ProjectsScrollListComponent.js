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
            console.log(mode);
            console.log(this.state.prevMode);
            // console.log(id);
            console.log(this.props.setProjectBackground);
            if (this.state.prevMode === 'leave' && mode.mode == 'enter') {
                this.props.setProjectBackground(mode.id);
            }
            this.setState({prevMode: mode.mode});
        };

    render () {

        const {visibleProjectId, setProjectBackground} = this.props;
        return (
            <div >
                {projects.map(project =>
                    <div
                        id={'page'+project.id}
                        key={project.id}
                    >
                        <ProjectComponent
                            project={project}
                            setProjectBackground={setProjectBackground}
                            visibleProjectId={visibleProjectId}
                        />
                    </div>
                )}
            </div>
        );
    }
}

ProjectsScrollListComponent.PropTypes = {
    setProjectBackground: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        visibleProjectId: state.projects.visibleProjectId,
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(new ProjectsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsScrollListComponent);