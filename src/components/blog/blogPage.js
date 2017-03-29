import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftSide from './leftside';
import RightSide from './rightside';

class Blog extends Component {

    render() {

        return (
            <div className="previews">
                <div className="place__forHeader"></div>
                <LeftSide />
                <RightSide />
            </div>
        );
    }
}

// MainPage.PropTypes = {
//     showUploadPanel: PropTypes.bool.isRequired
// };

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new ProjectsActions,dispatch));

export default Blog;