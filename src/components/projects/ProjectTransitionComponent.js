import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class ProjectTransitionComponent extends React.Component {

    render() {

        const {imgPath} = this.props;

        return (
            <div className="image__scroll">
                <ReactCSSTransitionGroup
                    transitionName="visible__project"
                    transitionEnterTimeout={3e3}
                    transitionLeaveTimeout={3e3}
                    transitionAppear={true}
                >
                    <img className="leftSide__img__projects" src={`src/assets/img/${imgPath}`}/>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}