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
      <div style={styles.container}>
        <h3>Login</h3>
        <Formik
          initialValues={{ firstField: '', secondField: '' }}
          onSubmit={(values, actions) => {
            // if (
            //   values.firstField
            //   || values.secondField
            //   || values.firstField.trim() !== ''
            //   || values.secondField.trim() !== ''
            // ) {
              this.login(values.firstField, values.secondField);

              actions.resetForm();
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

const styles = {
  container: {
    boxShadow: '0 0 4px 4px rgb(80, 80, 80)',
    borderRadius: '3px',
    background: 'gray',
    display: 'flex',
    flexFlow: 'column',
    padding: '10px',
    alignItems: 'center'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
