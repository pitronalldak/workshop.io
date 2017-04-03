import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollAnim from 'rc-scroll-anim';

import ProjectsActions from '../../actions/projects';
import ProjectComponent from './ProjectComponent';

const projects = (require('../../assets/json/projects.json'));

class ProjectsScrollListComponent extends Component {

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