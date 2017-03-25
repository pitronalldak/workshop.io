import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import LeftSide from './leftside';
import RightSide from './rightside';

class Projects extends Component {

    render() {
        return (
            <div className="previews">
                <LeftSide />
                <RightSide />
            </div>
        );
    }
};

export default Projects;