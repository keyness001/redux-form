import React, {Component} from 'react';
import {fetchPost} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class ShowPost extends Component {

  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    if(!this.props.post) {
      return <h1>Loading...</h1>
    }

    return(
      <div>
        <Link to="/">Back to post</Link>
        <h1>{this.props.post.title}</h1>
        <h2>{this.props.post.categories}</h2>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost})(ShowPost);
