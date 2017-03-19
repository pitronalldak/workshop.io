import React from 'react';
import { Route, IndexRoute, hashHistory } from 'react-router';
import BaseComponent from '../components/basecomponent';
import Tools from '../components/tools/tools page';
import Projects from '../components/projects/projects page';
import Contributions from '../components/contributions/contributions page';
import Blog from '../components/blog/blog page';
import NotFoundComponent from '../components/404/notfoundcomponent';

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
    }
};

export default (
    <Route>
        <Route path={urls.index.path} component={BaseComponent}>
            <IndexRoute component={Tools}/>
            <Route path={urls.projects.path} component={Projects} />
            <Route path={urls.contributions.path} component={Contributions} />
            <Route path={urls.blog.path} component={Blog} />
        </Route>
        <Route path="*" component={NotFoundComponent} />
    </Route>
);