import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {

    state = {
        auth: false,
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}
                            <li>
                              <NavLink to='/posts/' 
                                       exact 
                                       activeClassName="my-active"
                                       activeStyle={{
                                           color: '#fa923f',
                                           textDecoration: 'underline'
                                       }}
                                >
                                    Posts
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
                <Switch>
                    {/* <Route path="/" exact component={Posts} /> */}
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route render={ () => <h1>Page Not Found</h1> } />
                    {/* <Route path="/:id" component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;