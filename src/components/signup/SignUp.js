import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Header from '../PageHeader';
import LandingFooter from '../PageFooter';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
//Add the telephone regex
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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      confirmPassword: null,
      formErrors: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.confirmPassword
    };
    console.log("Here")
    console.log(userData)



  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'fullname':
        formErrors.lastName = value.length < 6 ? 'Minimum 6 characaters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Invalid email address';
        break;
      case 'password':
        formErrors.password = value.length < 6 ? 'Minimum 8 characaters required' : '';
        break;
      case 'confirmPassword':
        formErrors.confirmPassword = value.length !== formErrors.password ? 'Enter the same password' : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    return (
      <main>
        <Header />
        <div className="wrapper">

        <form onSubmit={this.handleSubmit}>
          <div className="form-info text-center">
            <img src={logo} alt="" className="logo-center" />
            <h2>Welcome to Slum Data!</h2>
            <p>Your one stop solution for slum related data.</p>
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              className={formErrors.fullName.length > 0 ? 'error' : null}
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
            />
            {formErrors.fullName.length > 0 && <span className="errorMessage">{formErrors.firstName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              className={formErrors.email.length > 0 ? 'error' : null}
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            {formErrors.email.length > 0 && <span className="errorMessage">{formErrors.email}</span>}
          </div>
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="password">Confirm password</label>
            <input
              className={formErrors.password.length > 0 ? 'error' : null}
              type="password"
              name="password"
              placeholder="Confirm password"
              required
              formNoValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length !== formErrors.confirmPassword.length && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="form-group">
            <input type="submit" value="CREATE ACCOUNT" className="btn btn-success btn-block" />
            <small>
              Already have an account? <Link>Login</Link>
            </small>
          </div>
        </form>
        </div>
        <div className="LandingPageFooter">
          <LandingFooter />
        </div>
      </main>


    );
  }
}

export default SignUp;
