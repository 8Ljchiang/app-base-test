import { FORM_SCHEMA_SITE_FEEDBACK_FORM, INITIAL_VALUES_SITE_FEEDBACK_FORM } from './site-feedback-form.validation';
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class SiteFeedbackForm extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false,
    }

    this.setIsSubmitted = this.setIsSubmitted.bind(this);
    this.resetIsSubmitted = this.resetIsSubmitted.bind(this);
  }

  setIsSubmitted() {
    this.setState({
      isSubmitted: true
    });
  }

  resetIsSubmitted() {
    this.setState({
      isSubmitted: false
    });
  }

  sendFeedback(values) {
    console.log('site-feedback-send');
  }

  renderForm() {
    return (
      <div>
        <p>For Route Path</p>
        <Formik
          initialValues={INITIAL_VALUES_SITE_FEEDBACK_FORM}
          validationSchema={FORM_SCHEMA_SITE_FEEDBACK_FORM}
          onSubmit={(values, actions) => {
            this.sendFeedback(values);
            actions.resetForm();
            this.setIsSubmitted();
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form className="form-container">
              <label>Issue Type</label>
              <Field component="select" name="issueType" className="form-field">
                <option value="bug">Bug</option>
                <option value="feedback">Feedback</option>
                <option value="featureRequest">Feature Request</option>
              </Field>

              <label>Subject</label>
              <Field type="text" name="appDomain" className="form-field"/>
              <ErrorMessage name="appDomain" component="div" />

              <label>Description</label>
              <Field type="textexttarea" name="desc" className="form-field"/>
              <ErrorMessage name="desc" component="div" />

              <label>Contact</label>
              <Field type="text" name="contact" className="form-field"/>
              <ErrorMessage name="contact" component="div" />

              <button type="submit" disabled={isSubmitting} className="form-submit-button">
                Submit
              </button>
            </Form>
          )}
        />
      </div>
    );
  }

  renderThanks() {
    return (
      <div>
        <h1>Thank You</h1>
        <p>Your feedback has been submitted.</p>
        <button onClick={this.resetIsSubmitted} >
          Back
        </button>
      </div>
    )
  }

  render() {
    const { isSubmitted } = this.state;
    return isSubmitted ? this.renderThanks() : this.renderForm();
  }
}

