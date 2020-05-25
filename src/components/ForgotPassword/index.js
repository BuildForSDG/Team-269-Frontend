
import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';
import Header from '../PageHeader';
import LandingFooter from '../PageFooter';


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: null,
      password: null,
      formErrors: {
        password: '',
        confirmPassword:''
      }
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'password':
        formErrors.password = value.length < 1 ? 'Password is a required field' : '';
        break;
      case 'confirmPassword':
        formErrors.confirmPassword = value !== password.value ? 'Enter the same password' : '';
        break;

    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    return (
      <main>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="form-info text-center">
            <img src={logo} alt="" className="logo-center" />
            <h2>Reset your Slum Data account password!</h2>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              className={formErrors.password.length > 0 ? 'error' : null}
              type="password"
              name="password"
              placeholder="Password"
              required
              formNoValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && <span className="errorMessage">{formErrors.password}</span>}
          </div>
          <div className="form-control">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              className={formErrors.confirmPassword.length > 0 ? 'error' : null}
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              required
              formNoValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length !== formErrors.confirmPassword.length && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="form-control">
            <input type="submit" value="RESET" />
            <small>
             Don't have an account? <Link>Sign Up</Link>
            </small>
          </div>
        </form>
        <div className="LandingPageFooter">
          <LandingFooter />
        </div>
      </main>
    );
  }
}

export default ForgotPassword;
