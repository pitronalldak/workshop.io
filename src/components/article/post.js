import React, {Component, PropTypes} from 'react';
import Header from './header';
import { Author } from './author';
import { Content } from './content';

export default class Post extends React.Component {

    render() {

        return (
            <article>
                <Header
                    id={this.props.id}
                    title={this.props.title}
                    date={this.props.date}
                />
                <Content text={this.props.text} />
                <Author link={this.props.link}/>
            </article>
        );
    }
}