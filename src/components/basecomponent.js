import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from './common/navigation';
class BaseComponent extends Component {
    paneDidMount = (node) => {
        if (node) {
            node.addEventListener('scroll', () => console.log('scroll!'));
        }
    };

    render() {

        return (
            <div ref={this.paneDidMount}>
                <Navigation/>
                {this.props.children}
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