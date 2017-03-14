import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {

    if(!this.props.posts) {
      return <h1>Loading...</h1>;
    }

    return(
      <div className="row">
        <div className='col-md-10'>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary"><Link to="/posts/new">Add Post</Link></button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {posts: state.posts.all};
};

export default connect(mapStateToProps, {fetchPosts})(PostIndex);
