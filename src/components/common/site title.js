import React, {Component, PropTypes} from 'react';

class SiteTitle extends Component {

    render() {
        return (
            <div>
                <div className="site__title"><h1>WorkShop</h1></div>
                {this.props.children}
            </div>
        );
    }
}

export default SiteTitle;