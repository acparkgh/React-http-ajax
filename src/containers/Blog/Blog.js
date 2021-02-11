import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import axios from "axios";
import axios from '../../axios'

class Blog extends Component {

    state = {
        posts: [],
        selectedId: null,
        error: false,
    }

    componentDidMount () {
    // fetch ('https://jsonplaceholder.typicode.com/posts')
        // .then( response => response.json() )
        // .then( data => this.setState({ posts: data }));
      axios.get('/posts')
        // .then(response => { console.log(response.data) })
        .then(response => { 
            const posts = response.data.slice(0, 4)
            // console.log(posts)
            const updatedPosts = posts.map(post => {
                return { ...post, author: "Max" }
            })
          this.setState({ posts: updatedPosts }) 
        })
        .catch(error => {
            // console.log(error)
            this.setState({ error: true })

        });
    }

    postSelectedHandler = (id) => {
        // debugger
      this.setState({ selectedId: id });
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }} >Something went wrong!</p>
        if(!this.state.error) {  
            posts = this.state.posts.map(post => {
                return <Post title={post.title} 
                key={post.id}
                author={post.author}
                clicked={ () => this.postSelectedHandler(post.id) } 
                />
            })
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                {posts}
                </section>
                {/* <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;