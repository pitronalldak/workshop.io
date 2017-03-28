import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectsScrollListComponent from './ProjectsScrollListComponent';
import ProjectsActions from '../../actions/projects';

const projects = (require('../../assets/json/projects.json'));

class ProjectsPage extends Component {

    render() {

        const {visibleProjectId} = this.props;
        console.log(visibleProjectId)
        return (
            <div className="previews">
                <div className="image__scroll">
                    <div className="place__forHeader"></div>
                    {/*<img className="leftSide__img__projects" src={projects.find(p => p.id == visibleProjectId)}/>*/}
                </div>
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