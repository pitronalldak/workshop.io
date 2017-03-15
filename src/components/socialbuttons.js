import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import {Icon} from 'react-fa';

class SocialButtons extends Component {

    render() {
        return (
            <footer className="section-padding--sm footer">
                <ul className="footer__social">
                    <li><Link to="mailto:pavlovandrew@mail.ru"><Icon name="fa fa-lg fa-envelope-o" /></Link></li>
                    <li><Link to="" target="_blank"><i className="fa fa-lg fa-slack"></i></Link></li>
                    <li><Link to="https://github.com/pitronalldak" target="_blank"><i className="fa fa-lg fa-github"></i></Link></li>
                    <li><Link to="" target="_blank"><i className="fa fa-lg fa-medium"></i></Link></li>
                </ul>
            </footer>
        );
    }
}

// BaseComponent.PropTypes = {
//     showUploadPanel: PropTypes.bool.isRequired
// };

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default SocialButtons;