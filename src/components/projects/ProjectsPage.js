import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectsScrollListComponent from './ProjectsScrollListComponent';

import ProjectsActions from '../../actions/projects';

class ProjectsPage extends Component {

    render() {

        const {background} = this.props;

        return (
            <div className="previews">
                <div className="image__scroll">
                    <div className="place__forHeader"></div>
                    <img className="leftSide__img__projects" src={'src/assets/img/' + this.props.background + '.png'}/>
                </div>
                <ProjectsScrollListComponent
                    background={background}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        background: state.projects.background,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new ProjectsActions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);