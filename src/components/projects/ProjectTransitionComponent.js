import React, {Component, PropTypes, findDOMNode} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class ProjectTransitionComponent extends React.Component {

    render() {

        const {imgPath} = this.props;

        return (
            <div className="image__scroll">
                <ReactCSSTransitionGroup
                    key={imgPath}
                    transitionName="visible__project"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                >
                    <img className="leftSide__img__projects" src={`src/assets/img/${imgPath}`}/>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}