import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class LoomCommunityCreatePostForm extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  createPost(postContent: string) {
    if (postContent) {
      // this.props.createPost(postContent);
    }
  }

  render() {
    return (
      <Formik
        initialValues={{ postContent: '' }}
        onSubmit={(values, actions) => {
            this.createPost(values.postContent);
            actions.resetForm();
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form className="form-container" autoComplete="off">
            <Field className="form-field" type="text" placeholder="text" name="postContent" />
            <ErrorMessage name="postContent" component="div" />
            <button className="form-submit-button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    );
  }
}

export const ConnectedCreatePostForm = LoomCommunityCreatePostForm;
