import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TestSelect } from '../units/test-select.component';
import { INITIAL_VALUES_CREATE_ACTIVITY, FORM_SCHEMA_CREATE_ACTIVITY } from './create-activity-form.validation';

export class CreateActivityForm extends Component<any, any> {
  constructor(props) {
    super(props);

    this.createActivity = this.createActivity.bind(this);
  }

  createActivity(info) {
    console.log('Create Activity', info);
  }

  render() {
    return(
      <Formik
        initialValues={INITIAL_VALUES_CREATE_ACTIVITY}
        validationSchema={FORM_SCHEMA_CREATE_ACTIVITY}
        onSubmit={(values, actions) => {
            this.createActivity(values);
            actions.resetForm();
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form className="form-container" autoComplete="off">
            <label>Community Visibility</label>
            <Field component="select" name="visibility" className="form-field">
              <option value="visible">Visible</option>
              <option value="hidden">Hidden</option>
            </Field>

            <label>Access</label>
            <Field component="select" name="access" className="form-field">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </Field>

            <label>Title</label>
            <Field className="form-field" type="text" placeholder="text" name="title" />
            <ErrorMessage name="title" component="div" />

            <label>Ref Link / Repository</label>
            <Field className="form-field" type="text" placeholder="text" name="repo" />
            <ErrorMessage name="description" component="div" />

            <label>Description</label>
            <Field className="form-field" type="text" placeholder="text" name="description" />
            <ErrorMessage name="description" component="div" />

            <label>Type</label>
            <Field component="select" name="type" className="form-field">
              <option value="pairing">Pairing</option>
              <option value="exploration">Exploration</option>
              <option value="brainstorm">Brainstorm</option>
              <option value="design">User Exerience Design</option>
              <option value="planning">Planning</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="type" component="div" />

            <label>Category</label>
            <Field component="select" name="category" className="form-field">
              <option value="project">Project</option>
              <option value="exercise">Exercise</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="category" component="div" />

            <label>Tags</label>
            <TestSelect/>
            <p>Insert React-Select Component here</p>
            <p>Customize to be able to create different types of categories within the dropdown menu</p>
            <ErrorMessage name="category" component="div" />

            <label>Domain</label>
            <TestSelect/>
            <p>Insert React-Select Component here</p>
            <p>Customize to be able to create different types of categories within the dropdown menu</p>
            <ErrorMessage name="category" component="div" />

            { /* TODO: Add react-select component here that adds values to an array */ }

            <button className="form-submit-button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    );
  }
}