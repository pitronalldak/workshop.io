import React, {Component, PropTypes} from 'react';
import { Watch } from 'scrollmonitor-react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/actions';
let projects = (require('../../assets/json/projects.json'));

export /*default Watch(*/class Project1 extends React.Component {

    render() {
        const {setProjectBackground} = this.props;
        if (this.props.isInViewport) {
            () => setProjectBackground('project1');
        }
        return (
            <li className="preview" onMouseOver={() => this.props.setProjectBackground('project1')}>
                <h2 className="project__title">{projects[0].title}</h2>
                <span className="preview__date">{projects[0].date}</span>
                <br/><br/>
                <h3 className="preview__header">Project description</h3>
                <p className="preview__excerpt">{projects[0].description}</p>
                <h3 className="preview__header">Development</h3>
                <div className="preview__excerpt">
                    <ul>
                        <li>Front end development, include: </li>
                        <li>blockchain implementation, include: </li>
                        <li>back end development, include: </li>
                    </ul>
                </div>
                <h3 className="preview__header">Implemented technologies</h3>
                <figure className="project__technology project__technology__react" />
                <figure className="project__technology project__technology__typescript" />
                <figure className="project__technology project__technology__node" />
                <h3 className="project__link__title"><Link className='project__link' href="http://chain.cloud/" target="_blank">http://chain.cloud/</Link></h3>
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ProjectBackground: state.ProjectBackground,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Project1);