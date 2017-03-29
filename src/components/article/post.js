import React, {Component, PropTypes} from 'react';
import Header from './header';
import { Author } from './author';
import { Content } from './content';

export default class Post extends React.Component {

    render() {
        const { article } = this.props;
        return (
            <article>
                <Header
                    id={article.id}
                    title={article.title}
                    date={article.date}
                />
                <Content text={article.text} />
                <Author link={article.link}/>
            </article>
        );
    }
}