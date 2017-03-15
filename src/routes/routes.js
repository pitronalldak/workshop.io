import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainPage from '../components/mainpage';
import BaseComponent from '../components/basecomponent';
import Portfolio from '../components/portfolio';
import Contributions from '../components/contributions';
import Blog from '../components/blog';
import NotFoundComponent from '../components/notfoundcomponent';

export const urls = {
    index: {
        path: '/'
    },
    portfolio: {
        path: 'portfolio'
    },
    contributions: {
        path: 'contributions'
    },
    blog: {
        path: 'blog'
    }
};

export default (
    <Route>
        <Route path={urls.index.path} component={BaseComponent} />
            <IndexRoute component={MainPage} />
            <Route path={urls.portfolio.path} component={Portfolio} />
            <Route path={urls.contributions.path} component={Contributions} />
            <Route path={urls.blog.path} component={Blog} />
        <Route path="*" component={NotFoundComponent} />
    </Route>
);