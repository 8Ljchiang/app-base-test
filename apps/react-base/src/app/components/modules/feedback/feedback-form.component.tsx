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

  login(username: string, password: string) {
    this.props.login({ displayIdentifier: username, accessIdentifier: password });
  }

  renderForm() {
    return (
      <div style={styles.container}>
        <h1 style={styles.formTitle}>Submit an Issue</h1>
        <Formik
          initialValues={{
            contact: '',
            appDomain: '',
            issueType: '',
            desc: '',
          }}
          onSubmit={(values, actions) => {
            actions.resetForm();
            this.setIsSubmitted();
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form>
              <label>Contact</label>
              <Field style={styles.formField} type="text" name="contact" />
              <ErrorMessage name="contact" component="div" />

              <label>Description</label>
              <Field style={styles.formField} type="textexttarea" name="desc" />
              <ErrorMessage name="desc" component="div" />

              <label>App Domain</label>
              <Field style={styles.formField} type="text" name="appDomain" />
              <ErrorMessage name="appDomain" component="div" />

              <label>Issue Type</label>
              <Field style={styles.formField} type="text" name="issueType" />
              <ErrorMessage name="issueType" component="div" />

              <button style={styles.formSubmitButton} type="submit" disabled={isSubmitting}>
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
