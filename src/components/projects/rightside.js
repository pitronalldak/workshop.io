import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Project1 from './project1';
import Project2 from './project2';

class RightSide extends Component {


    render() {
        return (
            <div className="tab" id="portfolio">
                <ul>
                    <Project1 />
                    <Project2 />
                </ul>
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