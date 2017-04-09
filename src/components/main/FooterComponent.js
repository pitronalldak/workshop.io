import React, {Component, PropTypes} from 'react';

class SocialButtons extends Component {

    render() {
        return (
            <footer className="section-padding--sm footer">
                <ul className="footer__social">
                    <li>
                        <a href="mailto:pavlovandrew@mail.ru" title="mailto:pavlovandrew@mail.ru">
                            <i className="fa fa-lg fa-envelope-o" />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" title="slack.com">
                            <i className="fa fa-lg fa-slack" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/pitronalldak" target="_blank" title="github.com/pitronalldak">
                            <i className="fa fa-lg fa-github" />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <i className="fa fa-lg fa-medium"  title="medium.com"/>
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default SocialButtons;