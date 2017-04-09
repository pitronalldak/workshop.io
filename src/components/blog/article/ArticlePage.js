import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

import Actions from '../../../actions/projects';
import AuthorComponent from './AuthorComponent';
import HeaderComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let articles = require('../../../assets/json/articles.json');

class ArticlePage extends Component {

    componentDidUpdate() {
        window.scrollTo(0,0);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        const article  = articles.find(a => a.id == this.props.params.id);
        const nextArticle = articles[articles.indexOf(articles.find(a => a.id == this.props.params.id)) + 1];
        const aBackground = {
            backgroundImage: 'url(../src/assets/img/article' + article.id + '.png)'
        };
        return (
            <div>
                <ReactCSSTransitionGroup
                    key={article.id}
                    transitionName="visible__project"
                    transitionEnterTimeout={10e3}
                    transitionLeaveTimeout={10e3}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                >
                    <div className="place__forHeader"></div>
                    <article>
                        <HeaderComponent
                            id={article.id}
                            title={article.title}
                            date={article.date}
                        />
                        <ContentComponent
                            text={article.text}
                        />
                        <AuthorComponent
                            link={article.link}
                        />
                    </article>
                </ReactCSSTransitionGroup>
                {nextArticle ?
                    <section className="next">
                        <Link
                            className="next__link"
                            to={"/blog/" + nextArticle.id}
                            style={aBackground}
                            title="Next article in the blog"
                        >
                            <div className="next__container">
                                <span>Read Next</span>
                                <h2>{nextArticle.title}</h2>
                            </div>
                        </Link>
                    </section> : null
                }
            </div>
        );
    }
}


ArticlePage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(null, mapDispatchToProps)(ArticlePage);