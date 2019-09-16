import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { INITIAL_VALUES_CREATE_EXERCISE, FORM_SCHEMA_CREATE_EXERCISE} from './create-exercise-form.validation';

export class CreateExerciseForm extends Component<any, any> {
  constructor(props) {
    super(props);

    this.createExercise = this.createExercise.bind(this);
  }

  createExercise(info) {
    console.log('create exercise', info);
  }

  render() {
    return (
      <Formik
        initialValues={INITIAL_VALUES_CREATE_EXERCISE}
        validationSchema={FORM_SCHEMA_CREATE_EXERCISE}
        onSubmit={(values, actions) => {
          this.createExercise(values);
          actions.resetForm();
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form className="form-container" autoComplete="off">
            <label htmlFor="title">Title</label>
            <Field component="text" id="title" name="title" className="form-field"/>
            <ErrorMessage name="title" component="div" />

            <label htmlFor="desc">Description</label>
            <Field component="text" id="desc" name="desc" className="form-field"/>
            <ErrorMessage name="desc" component="div" />

            <label htmlFor="repo">Repo / Reference</label>
            <Field component="text" id="repo" name="repo" className="form-field"/>
            <ErrorMessage name="repo" component="div" />

            <button className="form-submit-button" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      />
    );
  }
}
