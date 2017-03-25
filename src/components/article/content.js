import React, {Component, PropTypes} from 'react';
import { Watch } from 'scrollmonitor-react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/actions';
import Header from './header';
import Content from './content';
import Next from './next';

class Article extends React.Component {

    render() {
        const {setProjectBackground} = this.props;
        // if (this.props.isInViewport) {
        //     () => setProjectBackground('project1');
        // }

        return (
            <div>1.5</div>
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