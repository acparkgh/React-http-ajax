import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {

  state = {
    posts: [],
    // selectedId: null,
    // error: false,
}

componentDidMount () {
  // console.log(this.props)
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
          console.log(error)
          // this.setState({ error: true })

      });
  }

  postSelectedHandler = (id) => {
    // debugger
  // this.setState({ selectedId: id });
    // this.props.history.push({pathname: '/posts/' + id});
    this.props.history.push('/posts/' + id);
  }

  render() {

    let posts = <p style={{ textAlign: 'center' }} >Something went wrong!</p>
    if(!this.state.error) {  
        posts = this.state.posts.map(post => {
            return (
              // <Link to={'/posts/' + post.id} key={post.id}>
                <Post key={post.id}
                      title={post.title} 
                      author={post.author}
                      clicked={ () => this.postSelectedHandler(post.id) } 
                      />
              // </Link>
            )
        })
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        {/* <Route path="/posts/:id" component={FullPost} /> */}
        <Route path={this.props.match.url + '/:id'} component={FullPost} />
      </div>
    )
  }

}

export default Posts;