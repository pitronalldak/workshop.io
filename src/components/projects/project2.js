import React, {Component, PropTypes} from 'react';
import { Watch } from 'scrollmonitor-react';
import Actions from '../../actions/actions';

export default Watch(class Project2 extends React.Component {
    state = {
        active: false
    };


    render() {
        const {setProjectBackground} = this.props;
        if (this.props.isInViewport) {
            setProjectBackground('project2');
        }

        return (
            <li className="preview preview__next">
                <h2>TicketCloud</h2>
                <span className="preview__date">06/2016 - 07/2016</span>
                <br/><br/>
                <h3 className="preview__header">Project description</h3>
                <p className="preview__excerpt">Custom Blockchain (DLT) technology
                    products and consulting <br/> Chain.Cloud works in partnership with its clients,
                    advising them how to use/integrate Blockchain technology in order to meet
                    their business objectives or overcome problems. </p>
                <h3 className="preview__header">Development</h3>
                <p className="preview__excerpt">
                    <ul>
                        <li>Front end development, include: </li>
                        <li>blockchain implementation, include: </li>
                        <li>back end development, include: </li>
                    </ul>
                </p>
                <h3 className="preview__header">Implemented technologies</h3>
            </li>
        );
    }
})