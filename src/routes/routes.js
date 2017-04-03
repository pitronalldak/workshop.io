import React from 'react';
import { Route, IndexRoute, hashHistory } from 'react-router';
import BaseComponent from '../components/BaseComponent';
import MainPage from '../components/main/MainPage';
import Projects from '../components/projects/ProjectsPage';
import Contributions from '../components/contributions/ContributionsPage';
import Blog from '../components/blog/BlogPage';
import NotFoundComponent from '../components/common/NotFoundPage';
import ArticlePage from '../components/blog/article/ArticlePage';

export const urls = {
    index: {
        path: '/'
    },
    projects: {
        path: '/projects'
    },
    contributions: {
        path: '/contributions'
    },
    blog: {
        path: '/blog'
    },
    article: {
        path: '/blog/:id'
    }
};

export default (
    <Route>
        <Route path={urls.index.path} component={BaseComponent}>
            <IndexRoute component={MainPage}/>
            <Route path={urls.projects.path} component={Projects} />
                /*<Route path={urls.contributions.path} component={Contributions} />*/
            <Route path={urls.blog.path} component={Blog} />
            <Route path={urls.article.path} component={ArticlePage}/>
        </Route>
        <Route path="*" component={NotFoundComponent} />r
    </Route>
);