import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftSide from './leftside';
import RightSide from './rightside';
class Tools extends Component {

    render() {
        return (
            <div className="previews">
                <LeftSide />
                <RightSide />
            </div>
        );
    }
}

Tools.PropTypes = {
    children: PropTypes.element.isRequired
};

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default Tools;