import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Project1 from './project1';
import Project2 from './project2';
import {Fullpage, Slide, changeFullpageSlide} from 'fullpage-react';

let fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 2,

    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: 2,
    scrollSpeed: 500,
    resetSlides: true,
    hideScrollBars: true
};

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: {
                Fullpage: 0,
                horizontalSlider1: 0
            },
            previous: {
                Fullpage: 0,
                horizontalSlider1: 0
            }
        };

        this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
        this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
    }

    onSlideChangeStart(name, state) {
        console.log('slide STARTED for', name, state.activeSlide);
        var sliderState = { previous: {} };
        sliderState.previous[name] = state.activeSlide;
        this.setState(sliderState);
    }

    onSlideChangeEnd(name, state) {
        console.log('slide ENDED for', name, state.activeSlide);
        var sliderState = { active: {} };
        sliderState.active[name] = state.activeSlide;
        this.setState(sliderState);
    }


    render() {
        return (
        <Fullpage className="tab" onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>

            <Slide><Project1 /></Slide>
            <Slide><Project2 /></Slide>
        </Fullpage>
        );
    }
}

// BaseComponent.PropTypes = {
//     showUploadPanel: PropTypes.bool.isRequired
// };

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default RightSide;