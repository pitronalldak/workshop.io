import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions/projects';
import BlogArticleComponent from './BlogArticleComponent';
let articles = require('../../assets/json/articles.json');

class BlogArticlesComponent extends Component {

    render() {
            return (
                <div className="tab active no-margin-left">
                    <ul>
                        {articles.map((article, i) =>
                             <BlogArticleComponent
                                    key={i}
                                    id={article.id}
                                    title={article.title}
                                    date={article.date}
                                    excerpt={article.excerpt}
                                    articleLink={article.articleLink}
                            />
                        )}
                    </ul>
                </div>
            );
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(null, mapDispatchToProps)(BlogArticlesComponent);