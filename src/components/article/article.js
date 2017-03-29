import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/projects';
import Post from './post';
import { Next } from './next';
let articles = require('../../assets/json/articles.json');
let chosenArticle = {};
let nextArticle = {};
class Article extends React.Component {

    componentWillMount() {
        let path = this.context.router.getCurrentLocation().pathname;
        console.log(path);
        let splittedPath = path.split("/");
        let id = splittedPath[(splittedPath.length -1)]
        console.log(id);
        articles.map((article) => {
            if (article.id == id) {
                chosenArticle = article;
                console.log(chosenArticle);
            } else if (article.id == (parseInt(id) + 1)) {
                nextArticle = article;
                console.log(nextArticle);
                console.log(nextArticle.title);
            } else if (nextArticle == {}) {
                nextArticle = articles[0];
                console.log(nextArticle);
                console.log(nextArticle.title);
            }
        })
    }

    render() {
        return (
            <div>
                <div className="place__forHeader"></div>
                <Post
                    id={chosenArticle.id}
                    title={chosenArticle.title}
                    date={chosenArticle.date}
                    text={chosenArticle.text}
                    technologies={chosenArticle.technologies}
                    link={chosenArticle.link}
                />
                <Next
                    id={nextArticle.id}
                    title={nextArticle.title}
                />
            </div>
        );
    }
}


Article.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        ArticleBackground: state.ArticleBackground,
    }
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Article);