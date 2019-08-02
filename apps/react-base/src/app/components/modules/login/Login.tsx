import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../../redux/account.actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import './login.css';

class Login2 extends Component<any, any> {
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
                  <Link to={'/account'}>Account</Link>
                  <Link to={'/gateway'}>Gateway</Link>
                  <Link to={'/loom'}>Loom</Link>
                </Form>
              )}
            />
          {/* </div> */}
        </div>
        <div style={styles.right}>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginBottom: '50px' }}>
            <div
              className="animated scaleDownBlur"
              style={{ background: 'pink', height: '30px', width: '30px' }}>
            </div>
            <div
              className="animated comeIntoFocusFromFar"
              style={{ background: 'pink', height: '30px', width: '30px' }}>
            </div>
            <div
              className="animated scaleDownBlur"
              style={{ background: 'pink', height: '30px', width: '30px' }}>
            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginBottom: '50px' }}>
            {/* <div
              className="animated loseFocusCloser"
              style={{ background: 'pink', height: '20px', width: '20px' }}>
            </div> */}
            <div
              className="animated comeIntoFocusFromFar"
              style={{ background: 'pink', height: '20px', width: '20px' }}>
            </div>
            <div
              className="animated loseFocusCloser"
              style={{ background: 'pink', height: '20px', width: '20px' }}>
            </div>
          </div>

          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginBottom: '20px'  }}>
            <div
              className="animated comeIntoFocusFromFar"
              style={{ background: 'pink', height: '10px', width: '10px' }}>
            </div>
            <div
              className="animated loseFocusCloser"
              style={{ background: 'pink', height: '10px', width: '10px' }}>
            </div>
            <div
              className="animated comeIntoFocusFromFar"
              style={{ background: 'pink', height: '10px', width: '10px' }}>
            </div>
          </div>

          <h1 className="animated animated-fast fadeInDown" style={styles.displayTitle}>
            {"{ interchange }"}
            {/* interchange */}
          </h1>




          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginBottom: '50px'  }}>
            <div
              className="animated loseFocusCloser"
              style={{ background: 'pink', height: '10px', width: '10px' }}>
            </div>
            <div
              className="animated comeIntoFocusFromFar"
              style={{ background: 'pink', height: '10px', width: '10px' }}>
            </div>
            <div
              className="animated loseFocusCloser"
              style={{ background: 'pink', height: '10px', width: '10px' }}>
            </div>
          </div>

          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginBottom: '50px' }}>
            {/* <div
              className="animated loseFocusCloser"
              style={{ background: 'pink', height: '20px', width: '20px' }}>
            </div> */}
            <div
              className="animated loseFocusCloser"
              style={{ background: 'pink', height: '20px', width: '20px'}}>
            </div>
            <div
              className="animated comeIntoFocusFromFar"
              style={{ background: 'pink', height: '20px', width: '20px' }}>
            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginBottom: '50px' }}>
            <div
              className="animated comeIntoFocusFromFar"
              style={{ background: 'pink', height: '30px', width: '30px' }}>
            </div>
            <div
              className="animated scaleDownBlur"
              style={{ background: 'pink', height: '30px', width: '30px' }}>
            </div>
            <div
              className="animated comeIntoFocusFromFar"
              style={{ background: 'pink', height: '30px', width: '30px' }}>
            </div>
          </div>

          {/* <div className="animated fadeInDown" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>

            <h1 style={styles.displayTitle}>A</h1>
            <h1 style={styles.displayTitle}>B</h1>
            <h1 style={styles.displayTitle}>C</h1>
          </div> */}

          {/* <div
            className="animated fadeOutUp"
            style={{ background: 'pink', height: '30px', width: '30px' }}>
          </div> */}
        </div>
      </div>
    );
  }
}

class Login extends Component<any, any> {
  login(username: string, password: string) {
    this.props.login({ displayIdentifier: username, accessIdentifier: password });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
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
        </div>
        <div style={styles.right}>
          <h1 style={styles.displayTitle}>
            {"{ interchange }"}
          </h1>
        </div>
      </div>
    );
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
    minWidth: '440px',
    width: '440px',
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
    padding: '4px',
    width: '54%'
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

const mapStateToProps = (state) => {
  return {
    username: state.account.displayIdentifier
  }
}

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
