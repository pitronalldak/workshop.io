import React, {Component, PropTypes} from 'react';
import { browserHistory } from 'react-router'
import { urls } from '../routes/routes'

class HeaderComponent extends Component {


    goToIndex = () => {
        browserHistory.push(urls.index.path);
    };

    goToProjects = () => {
        browserHistory.push(urls.projects.path);
    };

    goToContributions = () => {
        browserHistory.push(urls.contributions.path);
    };

    goToBlog = () => {
        browserHistory.push(urls.blog.path);
    };

    render() {
        let path = this.context.router.location.pathname;
        return (
            <header className="nav__buttons">
                <div className="nav__wrapper">
                    <ul className="tabs">
                        <li onClick={this.goToIndex} className={path == urls.index.path ? 'tabs__item active': 'tabs__item'}>Tools</li>
                        <li onClick={this.goToProjects} className={path == urls.projects.path ? 'tabs__item active': 'tabs__item'}>Projects</li>
                        <li onClick={this.goToContributions} className={path == urls.contributions.path ? 'tabs__item active': 'tabs__item'}>Contributions</li>
                        <li onClick={this.goToBlog} className={path == urls.blog.path ? 'tabs__item active': 'tabs__item'}>Blog</li>
                    </ul>
                </div>
            </header>
        );
    }
}

HeaderComponent.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

export default HeaderComponent;