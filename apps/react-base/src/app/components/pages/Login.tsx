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
        <div style={styles.left}>
          {/* <div style={styles.formContainer}> */}
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
                <Form style={styles.formContainer}>
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
          {/* </div> */}
        </div>
        <div style={styles.right}>
          <h1 style={styles.displayTitle}>{"{ connect: interchange }"}</h1>
        </div>
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
    height: '100%',
    width: '100%',
    display: 'flex',
    // boxShadow: '0 0 4px 4px rgb(80, 80, 80)',
    // borderRadius: '3px',
    // background: 'gray',
    // display: 'flex',
    // flexFlow: 'column',
    // padding: '10px',
    // alignItems: 'center'
  },
  left: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '520px',
    background: 'rgb(210, 212, 214)',
  },
  right: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    background: 'rgb(34, 44, 56)',
  },
  formContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    height: '500px',
    width: '80%',
    // border: '1px solid black',
  },
  formField: {
    marginBottom: '18px',
    padding: '4px'
  },
  formSubmitButton: {
    padding: '4px'
  },
  formTitle: {
    marginBottom: '24px'
  },
  displayTitle: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(52, 165, 235)'
    // color: 'rgb(235, 52, 149)'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
