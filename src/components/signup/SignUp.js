import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Header from '../PageHeader';

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
      phoneNumber: null,
      confirmPassword: null,
      formErrors: {
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      }
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    // if (formValid(this.state)) {
    //   console.log(`
    //     --SUBMITTING--
    //     First Name: ${this.state.firstName}
    //     Last Name: ${this.state.lastName}
    //     Email: ${this.state.email}
    //     Password: ${this.state.password}
    //   `);
    // } else {
    //   console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    // }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 6 ? 'Minimum 6 characaters required' : '';
        break;
      case 'lastName':
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
        <form onSubmit={this.handleSubmit}>
          <div className="form-info text-center">
            <img src={logo} alt="" className="logo-center" />
            <h2>Welcome to Slum Data!</h2>
            <p>Your one stop solution for slum related data.</p>
          </div>
          <div className="form-control">
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
          <div className="form-control">
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
          <div className="form-control">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              className={formErrors.phoneNumber.length > 0 ? 'error' : null}
              type="text"
              name="phoneno"
              placeholder="Phone Number"
              required
              formNoValidate
              onChange={this.handleChange}
            />
            {formErrors.phoneNumber.length > 0 && <span className="errorMessage">{formErrors.phoneNumber}</span>}
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
          <div className="form-control">
            <label htmlFor="role">Which role best describes you?</label>
            <select name="role">
              <option value="clicktoselect">Click To Select</option>
              <option value="reseacher">Researcher</option>
              <option value="enumerator">Enumerator</option>
              <option value="student">Student</option>
              onChange={this.handleChange}
            </select>
          </div>
          <div className="form-control">
            <input type="submit" value="CREATE ACCOUNT" />
            <small>
              Already have an account? <Link>Login</Link>
            </small>
          </div>
        </form>
      </main>
    );
  }
}

export default SignUp;
