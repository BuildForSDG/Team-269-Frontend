import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import Header from '../PageHeader';
import LandingFooter from '../PageFooter';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

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
      },
      error: ''

    };
  }

  componentDidMount() {
    // remove the current state from local storage
    // so that when a person logs in they dont encounter
    // the previous state which wasnt cleared
    localStorage.removeItem('state');
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const userLoginData = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
    .post('http://b4sdg-team269.herokuapp.com/api/v1/auth/login', userLoginData)
    .then((res) => {

      localStorage.setItem('token', res.token);
      // Push the user to their dashboard
      // window.location.href = `/users/${res.id}/dashboard`;

      console.log(res.data)
    }).catch((error) => {
      console.log(error)
      this.setState({

        error: 'Unsuccessful Login Attempt'
      });
    });

  this.setState({email: '', password: ''})

  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Invalid email address';
        this.setState({ email: value, error:'' })
        break;
      case 'password':
        formErrors.password = value.length < 1 ? 'Password is a required field' : '';
        this.setState({ password: value, error:'' })
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors, error } = this.state;
    return (
      <main>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="form-info text-center">
            <img src={logo} alt="" className="logo-center" />
            <h2>Login to Slum Data!</h2>
            <p>Your one stop solution for slum related data.</p>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              className={formErrors.email.length > 0 ? 'error' : null}
              type="email"
              name="email"
              placeholder="Email Address"
              required
              formNoValidate
              onChange={this.handleChange}
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
          <br/>
          {error && (
              <span className="errorMessage">{error}</span>
                )}
          <div className="form-group">

            <input type="submit" value="LOGIN" className="btn btn-success btn-block" />



            <small>
              <b>Don't have an account? <Link to={"/register"}>Sign Up</Link></b>
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
