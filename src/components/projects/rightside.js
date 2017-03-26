import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {setProjectBackground} from '../../actions/actions';
import Project from './project';
import {Fullpage, Slide, changeFullpageSlide} from 'fullpage-react';
let projects = (require('../../assets/json/projects.json'));

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
                Fullpage: 0
            },
            previous: {
                Fullpage: 0
            }
        };
        this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
        this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
    }

    onSlideChangeStart(name, state) {
        console.log(this.props.ProjectBackground);
        const {setProjectBackground} = this.props;
        console.log('slide STARTED for', name, state.activeSlide);
        if (ij) {
            if (this.props.ProjectBackground == 'project1') {
                ij = 2
            } else {
                if (i == projects.length) {
                    ij = 1
                } else ij++
            }
        } else {
            var ij =1;
        }
        console.log('project'+ij);
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
            {projects.map(function(project, i) {
            return <Slide key={i}><Project key={i} i={i} title={project.title} date={project.date} description={project.description}
            development={project.development} technologies={project.technologies} link={project.link} /></Slide>
            })}
        </Fullpage>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ProjectBackground: state.ProjectBackground,
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({setProjectBackground: setProjectBackground}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RightSide);