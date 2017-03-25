import React, {Component, PropTypes} from 'react';
import { Watch } from 'scrollmonitor-react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/actions';

class Article extends React.Component {

    render() {
        const {setProjectBackground} = this.props;
        // if (this.props.isInViewport) {
        //     () => setProjectBackground('project1');
        // }

        return (
            <div>
                <Header />
                <Content />
                <Next />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ArticleBackground: state.ArticleBackground,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Article);