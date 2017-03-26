import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

class SocialButtons extends Component {

    render() {
        return (
            <footer className="section-padding--sm footer">
                <ul className="footer__social">
                    <li>
                        <a href="mailto:pavlovandrew@mail.ru">
                            <i className="fa fa-lg fa-envelope-o" />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <i className="fa fa-lg fa-slack" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/pitronalldak" target="_blank">
                            <i className="fa fa-lg fa-github" />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <i className="fa fa-lg fa-medium"/>
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}

// BaseComponent.PropTypes = {
//     showUploadPanel: PropTypes.bool.isRequired
// };

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new ProjectsActions,dispatch));

export default SocialButtons;