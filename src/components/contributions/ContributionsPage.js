import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class ContributionsPage extends Component {

    render() {
        return (
            <div>
                Contributions
            </div>
        );
    }
}

// MainPage.PropTypes = {
//     showUploadPanel: PropTypes.bool.isRequired
// };

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new ProjectsActions,dispatch));

export default ContributionsPage;