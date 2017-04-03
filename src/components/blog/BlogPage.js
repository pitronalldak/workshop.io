import React, {Component} from 'react';
import BlogArticlesComponent from './BlogArticlesComponent';

class BlogPage extends Component {

    render() {

        return (
            <div className="previews no-margin-left">
                <div className="place__forHeader"></div>
                <BlogArticlesComponent />
            </div>
        );
    }
}

export default BlogPage;