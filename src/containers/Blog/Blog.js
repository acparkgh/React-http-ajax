import React, { Component } from 'react';

// import Post from '../../components/Post/Post';
// import FullPost from '../FullPost/FullPost';
// import NewPost from '../NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css';

// import axios from "axios";
// import axios from '../../axios'

class Blog extends Component {

    // state = {
    //     posts: [],
    //     selectedId: null,
    //     error: false,
    // }

    // componentDidMount () {
    //   axios.get('/posts')
    //     .then(response => { 
    //         const posts = response.data.slice(0, 4)
    //         const updatedPosts = posts.map(post => {
    //             return { ...post, author: "Max" }
    //         })
    //       this.setState({ posts: updatedPosts }) 
    //     })
    //     .catch(error => {
    //         this.setState({ error: true })
    //     });
    // }

    // postSelectedHandler = (id) => {
    //     // debugger
    //   this.setState({ selectedId: id });
    // }

    render () {
        // let posts = <p style={{ textAlign: 'center' }} >Something went wrong!</p>
        // if(!this.state.error) {  
        //     posts = this.state.posts.map(post => {
        //         return <Post title={post.title} 
        //         key={post.id}
        //         author={post.author}
        //         clicked={ () => this.postSelectedHandler(post.id) } 
        //         />
        //     })
        // }

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
                {/* <section className="Posts">
                {posts}
                </section> */}
                {/* <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
                <Posts />
            </div>
        );
    }
}

export default Blog;