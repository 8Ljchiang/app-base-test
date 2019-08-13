import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { bindActionCreators } from 'redux';
import { accountSignup } from '../../../redux/account.actions';

class SignupForm extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  signup(username, email, password, inviteToken) {
    this.props.actions.accountSignup({ displayIdentifier: username, email, accessIdentifier: password, inviteToken });
  }

  render() {
    return (
      <Formik
        initialValues={{ username: '', email: '', password: '', inviteToken: '' }}
        onSubmit={(values, actions) => {
          const { username, email, password, inviteToken } = values;
            this.signup(username, email, password, inviteToken);
            actions.setSubmitting(false);
            actions.resetForm();
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form style={styles.formContainer}>
            <h1 style={styles.formTitle}>Signup</h1>
            <Field type="text" name="username" placeholder="username" style={styles.formField} />
            <ErrorMessage name="username" component="div" />
            <Field type="email" name="email" placeholder="email" style={styles.formField} />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="password" style={styles.formField} />
            <ErrorMessage name="password" component="div" />
            <Field type="text" name="inviteToken" placeholder="token" style={styles.formField} />
            <ErrorMessage name="inviteToken" component="div" />
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
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    height: '500px',
    width: '80%',
  },
  formField: {
    marginBottom: '18px',
    padding: '5px',
    width: '54%'
  },
  formSubmitButton: {
    padding: '5px 16px',
    color: 'lightgray',
    borderRadius: '3px',
    // background: 'rgb(52, 165, 235)',
    // color: 'rgb(34, 44, 56)'
    background: 'rgb(34, 44, 56)',
    // color: 'rgb(52, 165, 235)'
  },
  formTitle: {
    marginBottom: '24px'
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      accountSignup
    }, dispatch)
  }
}

export const ConnectedSignupForm = connect(null, mapDispatchToProps)(SignupForm);
