import React from 'react'
import CreateUser from './containers/CreateUser'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailValue: "",
            passValue: "",
            loginPage: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Do Firebase Login check stuff here
        firebase.auth().signInWithEmailAndPassword(this.state.emailValue, this.state.passValue).catch(function(error) {
            // Handle Errors here.
            console.log(error.message)
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    }

  

    render() {
        
        if (this.state.loginPage) {
        return (
            <div className="container login-container ">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Login</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className="form-control"  
                                onChange={(e) => this.setState({emailValue: e.target.value})} 
                                type="text" 
                                placeholder="Your Email *" 
                                value={this.state.emailValue} />
                            </div>
                            <div className="form-group">
                                <input className="form-control"
                                onChange={(e) => this.setState({passValue: e.target.value})}
                                type="password" 
                                placeholder="Your Password *" 
                                value={this.state.passValue} />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div>
                            <div className="form-group">
                                <a href="#" className="ForgetPwd">Forget Password?</a>
                            </div>
                            <button onClick={() => this.setState({loginPage:false})} type="button" className="btn btn-primary">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        )
        } else {
            return (
                <CreateUser />
            )
        }
    }
}






export default Login