import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Project2 extends Component {


    render() {
        return (
            <li className="preview preview__next">
                <h2>TicketCloud</h2>
                <span className="preview__date">06/2016 - 07/2016</span>
                <br/><br/>
                <h3 className="preview__header">Project description</h3>
                <p className="preview__excerpt">Custom Blockchain (DLT) technology
                    products and consulting <br/> Chain.Cloud works in partnership with its clients,
                    advising them how to use/integrate Blockchain technology in order to meet
                    their business objectives or overcome problems. </p>
                <h3 className="preview__header">Development</h3>
                <p className="preview__excerpt">
                    <ul>
                        <li>Front end development, include: </li>
                        <li>blockchain implementation, include: </li>
                        <li>back end development, include: </li>
                    </ul>
                </p>
                <h3 className="preview__header">Implemented technologies</h3>
            </li>
        );
    }
}

// BaseComponent.PropTypes = {
//     showUploadPanel: PropTypes.bool.isRequired
// };

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default Project2;