import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/actions';

class LeftSide extends Component {


    render() {
        return (
            <div className="image__scroll">
                <div className="site__title"><h1>WorkShop</h1></div>
                <img className="leftSide__img__projects" src={'src/assets/img/' + this.props.ProjectBackground + '.png'}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ProjectBackground: state.ProjectBackground,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);