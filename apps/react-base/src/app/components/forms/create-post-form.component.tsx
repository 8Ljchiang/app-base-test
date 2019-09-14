import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { INITIAL_VALUES_CREATE_POST, FORM_SCHEMA_CREATE_POST } from './create-post-form.validation';
import { ICreatePostFormInput } from '../../core/services/mocks/mock-posts.service';
import { bindActionCreators } from 'redux';
import { createPost } from '../../redux/posts.actions';

class CreatePostForm extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  createPost(postContent: ICreatePostFormInput) {
    if (postContent) {
      this.props.actions.createPost(postContent);
    }
  }

  render() {
    return (
      <Formik
        initialValues={INITIAL_VALUES_CREATE_POST}
        validationSchema={FORM_SCHEMA_CREATE_POST}
        onSubmit={(values, actions) => {
            this.createPost(values);
            actions.resetForm();
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form className="form-container" autoComplete="off">
            <label htmlFor="type">Post Type</label>
            <Field component="select" id="type" name="type" className="form-field">
              <option value="message">Request</option>
              <option value="resource">Resource</option>
              <option value="tip">Tip</option>
              <option value="story">Story</option>
            </Field>
            <ErrorMessage name="issueType" component="div" />

            <label htmlFor="title">Title</label>
            <Field className="form-field" type="text" name="title" />
            <ErrorMessage name="title" component="div" />

            <label htmlFor="message"></label>
            <Field className="form-field" type="text" name="message" />
            <ErrorMessage name="message" component="div" />

            <button className="form-submit-button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createPost
    }, dispatch)
  }
}

export const ConnectedCreatePostForm = connect(null, mapDispatchToProps)(CreatePostForm);
