import React, { Component } from "react";
import { actLoginRequest } from "../../actions";
import { connect } from 'react-redux';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassWord: '' 
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
       
        this.setState({
            [name]: value
        });
    }

    onLogin = (e) => {
        e.preventDefault();
        var {txtUserName, txtPassWord} = this.state;
        var authen = {
            userName : txtUserName,
            password : txtPassWord,
        };
        this.props.onLogin(authen);
    }
  render() {
    var {txtUserName, txtPassWord} = this.state;
    return (
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form onSubmit={this.onLogin}>
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                  <label className="text-info">
                    Username:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="txtUserName"
                    value={txtUserName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text-info">
                    Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    name="txtPassWord"
                    value={txtPassWord}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="remember-me" className="text-info">
                    <span>Remember me</span>&nbsp;
                    <span>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                    </span>
                  </label>
                  <br />
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    defaultValue="submit"
                  />
                </div>
                <div id="register-link" className="text-right">
                  <a href="#" className="text-info">
                    Register here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        authentication : state.authentication
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin : (authen) => {
            dispatch(actLoginRequest(authen));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

