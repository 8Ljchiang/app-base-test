import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../redux/account.actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class LoginForm extends Component<any, any> {
  login(username: string, password: string) {
    this.props.login({ displayIdentifier: username, accessIdentifier: password });
  }

  render() {
    return (
      <Formik
        initialValues={{ firstField: '', secondField: '' }}
        onSubmit={(values, actions) => {
            this.login(values.firstField, values.secondField);
            actions.resetForm();
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form style={styles.formContainer} autoComplete="off">
            <h1 style={styles.formTitle}>Login</h1>
            <label>Username</label>
            <Field style={styles.formField} type="text" name="firstField" />
            <ErrorMessage name="firstField" component="div" />
            <label>Password</label>
            <Field style={styles.formField} type="password" name="secondField" />
            <ErrorMessage name="secondField" component="div" />
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

const mapStateToProps = (state) => {
  return {
    username: state.account.displayIdentifier
  }
}

const mapDispatchToProps = {
  login
}

export const ConnectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
