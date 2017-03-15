import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

class Navigation extends Component {


    render() {
        return (
            <div>
                <ul className="tabs">
                    <li className="tabs__item"><Link to="/">Tools</Link></li>
                    <li className="tabs__item"><Link to="portfolio">Portfolio</Link></li>
                    <li className="tabs__item"><Link to="contributions">Contributions</Link></li>
                    <li className="tabs__item"><Link to="blog">Blog</Link></li>
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

export default Navigation;