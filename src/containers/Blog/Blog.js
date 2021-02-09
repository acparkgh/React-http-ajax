import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from "axios";

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount () {
    // fetch ('https://jsonplaceholder.typicode.com/posts')
        // .then( response => response.json() )
        // .then( data => this.setState({ posts: data }));
      axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(response => { console.log(response.data) })
        .then(response => { 
            const posts = response.data.slice(0, 4)
            // console.log(posts)
            const updatedPosts = posts.map(post => {
                return { ...post, author: "Max" }
            })
          this.setState({ posts: updatedPosts }) 
        });
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post title={post.title} 
                         key={post.id}
                         author={post.author} 
                   />
        })
        return (
            <div>
                <section className="Posts">
                {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;