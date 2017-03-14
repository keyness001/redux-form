import React, {Component, PropTypes} from 'react';
import {reduxForm, Field } from 'redux-form';
import {createPost} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required a title !!!';
  }
  if (!values.categories) {
    errors.categories = 'Required a categories !!!';
  }
  if (!values.content) {
    errors.content = 'Required a content !!!';
  }
  return errors;
}

const renderField = ({ input, label, textarea, type, meta: { touched, invalid, error } }) => (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label>{label}</label>
    <div>
      {textarea ? <textarea {...input} placeholder={label} type={type} className="form-control" /> : <input {...input} placeholder={label} type={type} className="form-control" />}
      {touched && (error && <span className="error text-danger">{error}</span>)}
    </div>
  </div>
)

class AddPost extends Component {

  static contextTypes = {
    router : PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props)
    .then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <h1>Create a post</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field type="text" component={renderField} label="Title:" name="title" />
          <Field type="text" component={renderField} label="Categories:" name="categories" />
          <Field component={renderField} textarea={true} label="Content:" name="content" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

AddPost = reduxForm({
  form: 'PostNewForm',
  validate
})(AddPost);
AddPost = connect(null, {createPost})(AddPost);

export default AddPost;
