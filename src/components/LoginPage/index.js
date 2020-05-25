import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import Header from '../PageHeader';
import LandingFooter from '../PageFooter';

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: '',
        password: ''
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
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Invalid email address';
        break;
      case 'password':
        formErrors.password = value.length < 1 ? 'Password is a required field' : '';
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
            <h2>Login to Slum Data!</h2>
            <p>Your one stop solution for slum related data.</p>
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
            <input type="submit" value="LOGIN" />
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

export default Login;
