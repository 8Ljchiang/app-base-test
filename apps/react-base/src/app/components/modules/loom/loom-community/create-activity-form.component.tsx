import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class CreateActivityForm extends Component<any, any> {
  constructor(props) {
    super(props);

    this.createActivity = this.createActivity.bind(this);
  }

  createActivity(info) {
    console.log('Create Activity', info);
  }

  render() {
    const initialValues = {
      title: '',
      description: '',
      visibility: '',
      access: '',
      languages: '',
      type: '',
      category: '',
      tags: [],
      domains: [],
      requirements: [],
      refs: [],
      repo: '',
    };
    return(
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            this.createActivity(values);
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
