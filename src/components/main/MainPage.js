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
                    <div>
                        <p className="main-text">We are team of web developers, passionate about our job.</p>
                        <p className="main-text">We create web, mobile and desktop applications based on stack of technologies you can find below.</p>
                    </div>
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