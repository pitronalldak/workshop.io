import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftSide from './leftside';
import RightSide from './rightside';
class BaseComponent extends Component {

    render() {
        const {children} = this.props;
        return (
            <div className="previews">
                {this.props.children}
                <LeftSide />
                <RightSide />
            </div>
        );
    }
}

BaseComponent.PropTypes = {
    children: PropTypes.element.isRequired
};

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default BaseComponent;