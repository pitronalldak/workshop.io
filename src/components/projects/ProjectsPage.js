import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectsScrollListComponent from './ProjectsScrollListComponent';
import ProjectsActions from '../../actions/projects';
import ProjectTransitionComponent from './ProjectTransitionComponent';

const projects = (require('../../assets/json/projects.json'));

class ProjectsPage extends Component {

    render() {

        const {visibleProjectId} = this.props;
        const project = projects.find(p => p.id == visibleProjectId) || projects[0];
        return (
            <div className="previews">
                <ProjectTransitionComponent imgPath={project.imgPath} />
                <ProjectsScrollListComponent />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visibleProjectId: state.projects.visibleProjectId,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new ProjectsActions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);