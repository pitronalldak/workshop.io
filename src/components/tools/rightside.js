import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SocialButtons from './socialbuttons';

class RightSide extends Component {


    render() {
        return (
            <div>
                <div className="place__forHeader"></div>
                <figure className="relative-bg tools__img"></figure>
                <SocialButtons />
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