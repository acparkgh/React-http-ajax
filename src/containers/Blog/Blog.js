import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}
                            <li>
                              <NavLink to='/' 
                                       exact 
                                       activeClassName="my-active"
                                       activeStyle={{
                                           color: '#fa923f',
                                           textDecoration: 'underline'
                                       }}
                                >
                                    Home
                              </NavLink>
                            </li>
                            {/* <li><Link to="/">Home</Link></li> */}
                            <li>
                              <NavLink to={{ pathname: '/new-post',
                                             hash: '#submit',
                                             search: '?quick-submit=true'

                                }}>
                                New Post
                              </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={ () => <h1>Home</h1> }/>
                <Route path="/" render={ () => <h1>Home1</h1> }/> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;