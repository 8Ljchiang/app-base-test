import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/account.actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class Login extends Component<any, any> {
  login(username: string, password: string) {
    this.props.login({ displayIdentifier: username, accessIdentifier: password });
  }

  render() {
    return (
      <div style={{ border: '1px solid blue', padding: '10px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
        <h3>Login</h3>
        <p>{this.props.username}</p>
        <Formik
          initialValues={{ firstField: '', secondField: '' }}
          onSubmit={(values, actions) => {
            // if (
            //   values.firstField
            //   || values.secondField
            //   || values.firstField.trim() !== ''
            //   || values.secondField.trim() !== ''
            // ) {
              actions.setSubmitting(true);
              this.login(values.firstField, values.secondField);
            // }
            // actions.setSubmitting(false);
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form>
              <Field type="text" name="firstField" />
              <ErrorMessage name="firstField" component="div" />
              <Field type="password" name="secondField" />
              <ErrorMessage name="secondField" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.account.displayIdentifier
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
