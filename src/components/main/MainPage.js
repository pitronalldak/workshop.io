import React, {Component, PropTypes} from 'react';
import  FooterComponent from './FooterComponent';

class MainPage extends Component {

    render() {
        return (
            <div className="previews">
                <figure className="absolute-bg preview__img"></figure>
                <div className="title__container">
                    <span>Welcome to</span>
                    <h1>WorkShop</h1>
                    <span>Best solution for your ideas</span>
                </div>
                <div>
                    <div className="place__forHeader"></div>
                    <figure className="relative-bg tools__img"></figure>
                    <FooterComponent />
                </div>
            </div>
        );
    }
}

MainPage.PropTypes = {
    children: PropTypes.element.isRequired
};

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new ProjectsActions,dispatch));

export default MainPage;