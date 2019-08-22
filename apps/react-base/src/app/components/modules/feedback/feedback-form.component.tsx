import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class FeedbackForm extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false
    }
  }

  resetIsSubmitted() {
    this.setState({
      isSubmitted: false
    });
  }

  setIsSubmitted() {
    this.setState({
      isSubmitted: true
    });
  }

  sendFeedback(values) {
    console.log('feedback');
    console.log(values);
  }

  renderForm() {
    return (
      <div style={styles.container}>
        <h1 style={styles.formTitle}>Submit an Issue</h1>
        <Formik
          initialValues={{
            contact: '',
            subject: '',
            issueType: '',
            desc: '',
          }}
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

              {/* <label>Issue Type</label>
              <Field type="text" name="issueType" className="form-field"/>
              <ErrorMessage name="issueType" component="div" /> */}

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
      <div style={styles.container}>
        <h1 style={styles.formTitle}>Thank You</h1>
        <p>Your feedback has been submitted.</p>
        <button style={styles.formSubmitButton} onClick={this.resetIsSubmitted.bind(this)} >
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

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    width: '500px',
    padding: '20px',
    // border: '1px solid black'
    // boxShadow: '0 0 4px 4px rgb(80, 80, 80)',
    // borderRadius: '3px',
    // background: 'gray',
    // display: 'flex',
    // flexFlow: 'column',
    // padding: '10px',
    // alignItems: 'center'
  },
  formField: {
    marginBottom: '18px',
    padding: '4px',
    width: '100%'
  },
  formSubmitButton: {
    padding: '4px',
    color: 'lightgray',
    // background: 'rgb(52, 165, 235)',
    // color: 'rgb(34, 44, 56)'
    background: 'rgb(34, 44, 56)',
    // color: 'rgb(52, 165, 235)'
  },
  formTitle: {
    marginBottom: '24px'
  },
  displayTitle: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(52, 165, 235)',
    // boxShadow: '0 0 6px 6px rgb(80, 80, 80)'
    // color: 'rgb(235, 52, 149)'
  }
}
