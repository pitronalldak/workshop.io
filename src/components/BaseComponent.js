import React, {Component, PropTypes} from 'react';

import HeaderComponent from './HeaderComponent';


class BaseComponent extends Component {

    paneDidMount = (node) => {
        if (node) {
            node.addEventListener('scroll', () => console.log('scroll!'));
        }
    };

    render() {

        return (
            <div ref={this.paneDidMount}>
                <HeaderComponent />
                {this.props.children}
            </div>
        );
    }
}

BaseComponent.PropTypes = {
    children: PropTypes.element.isRequired
};

export default BaseComponent;