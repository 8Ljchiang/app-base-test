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
    const { postContent } = this.state;
    return (
      <Formik
        initialValues={{ postContent }}
        onSubmit={(values, actions) => {
            this.createPost(values.postContent);
            actions.resetForm();
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form style={styles.formContainer}>
            <h1 style={styles.formTitle}>Login</h1>
            <label>Username</label>
            <Field style={styles.formField} type="text" name="postContent" />
            <ErrorMessage name="postContent" component="div" />
            <button style={styles.formSubmitButton} type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    );
  }
}

const styles = {
  formContainer: {

  },
  formTitle: {

  },
  formField: {

  },
  formSubmitButton: {

  }
}

export const ConnectedCreatePostForm = LoomCommunityCreatePostForm;
