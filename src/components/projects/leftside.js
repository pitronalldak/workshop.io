import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/projects';

const projects = (require('../../assets/json/projects.json'));

class LeftSide extends Component {

    render() {
        const {visibleProjectId} = this.props;
        console.log(visibleProjectId)
        return (
            <div className="image__scroll">
                <div className="place__forHeader"></div>
                <img className="leftSide__img__projects" src={projects.find(p => p.id == visibleProjectId).imgPath}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visibleProjectId: state.projects.visibleProjectId,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);