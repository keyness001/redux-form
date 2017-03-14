import {Route, IndexRoute} from 'react-router';
import React from 'react';

import App from './components/app';
import PostIndex from './components/post-index';
import AddPost from './components/add-post';
import ShowPost from './components/show-post';


export default (
  <Route path='/' component={App} >
    <IndexRoute component={PostIndex} />
    <Route path='posts/new' component={AddPost} />
    <Route path='posts/:id' component={ShowPost} />
  </Route>
);
