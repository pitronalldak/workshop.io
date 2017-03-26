import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import {Fullpage, Slide, HorizontalSlider, Overlay} from 'fullpage-react';


import ProjectsActions from '../../actions/projects';
import ProjectComponent from './ProjectComponent';

const projects = (require('../../assets/json/projects.json'));

let fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 2,

    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: 2,
    scrollSpeed: 500,

    // when the final scroll is reached, this option allows the user to scroll backward to the original slide if they try to progress
    // similar to infinite but the user will see a longer & reversed animation
    resetSlides: true,
    // auto-apply styles to hide scrollbars
    hideScrollBars: true
};

const initialState = {
    active: {
        Fullpage: 0,
        horizontalSlider1: 0
    },
    previous: {
        Fullpage: 0,
        horizontalSlider1: 0
    }
};

class ProjectsScrollListComponent extends Component {

    state = initialState;

    onSlideChangeStart = (name, state) => {
        console.log('slide STARTED for', name, state.activeSlide);
        var sliderState = { previous: {} };
        sliderState.previous[name] = state.activeSlide;

    };

    onSlideChangeEnd = (name, state) => {
        console.log('slide ENDED for', name, state.activeSlide);
        var sliderState = { active: {} };
        sliderState.active[name] = state.activeSlide;
    };

    render () {

        return (
            <div >
                <Fullpage ref="fullPage" {...fullPageOptions} onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd}>
                    {projects.map(project =>
                        <Slide key={project.id}>
                            <ProjectComponent
                                title={project.title}
                                date={project.date}
                                description={project.description}
                                development={project.development}
                                technologies={project.technologies}
                                link={project.link}
                            />
                        </Slide>
                    )}
                </Fullpage>

            </div>
        );
    }
}

ProjectsScrollListComponent.PropTypes = {
    background: PropTypes.element.isRequired
};

const mapDispatchToProps = (dispatch) => bindActionCreators(new ProjectsActions, dispatch);

export default connect(undefined, mapDispatchToProps)(ProjectsScrollListComponent);