import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { bindActionCreators } from 'redux';
import { accountSignup } from '../../../redux/account.actions';

export class SignupForm extends Component<any, any> {
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
          <Form className="form-container" autoComplete="off">
            <h1 className="form-title">Signup</h1>
            <Field type="text" name="username" placeholder="username" className="form-field" />
            <ErrorMessage name="username" component="div" />
            <Field type="email" name="email" placeholder="email" className="form-field" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="password" className="form-field" />
            <ErrorMessage name="password" component="div" />
            <Field type="text" name="inviteToken" placeholder="token" className="form-field" />
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
