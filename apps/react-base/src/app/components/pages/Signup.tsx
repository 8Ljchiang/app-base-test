import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountSignup } from '../../redux/account.actions';
class SignUp extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  signup(username, email, password, inviteToken) {
    this.props.actions.accountSignup({ displayIdentifier: username, email, accessIdentifier: password, inviteToken });
  }

  render() {
    return (
      <div style={styles.container}>
        <h3>Sign Up</h3>
        {/* <input type="text" placeholder="username"/>
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input type="text" placeholder="invite token"/>
        <button onClick={}>Submit</button> */}
        <Formik
          initialValues={{ username: '', email: '', password: '', inviteToken: '' }}
          onSubmit={(values, actions) => {
            const { username, email, password, inviteToken } = values;
              this.signup(username, email, password, inviteToken);
              actions.setSubmitting(false);
              actions.resetForm();
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form style={styles.form}>
              <Field type="text" name="username" placeholder="username"/>
              <ErrorMessage name="username" component="div" />
              <Field type="email" name="email" placeholder="email"/>
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" placeholder="password"/>
              <ErrorMessage name="password" component="div" />
              <Field type="text" name="inviteToken" placeholder="token"/>
              <ErrorMessage name="inviteToken" component="div" />
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

const styles = {
  container: {
    borderRadius: '3px',
    background: 'gray',
    display: 'flex',
    flexFlow: 'column',
    padding: '10px',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexFlow: 'column',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      accountSignup
    }, dispatch)
  }
}

export const ConnectedSignup = connect(null, mapDispatchToProps)(SignUp);
