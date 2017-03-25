import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Articles from './articles';

class RightSide extends Component {


    render() {
        return (
            <div className="tab active">
                <Articles/>
            </div>
        );
    }
}

// BaseComponent.PropTypes = {
//     showUploadPanel: PropTypes.bool.isRequired
// };

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default RightSide;