
import React from 'react'


export default class CreateUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emailValue: "",
            passValue: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();

        var that = this
        firebase.auth().createUserWithEmailAndPassword(that.state.emailValue, that.state.passValue).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)

        });
    }

    render() {
        return (
            <div className="container login-container ">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Create User</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className="form-control"
                                    onChange={(e) =>  this.setState({ emailValue: e.target.value }) }
                                    type="text"
                                    placeholder="Your Email *"
                                    value={this.state.emailValue} />
                            </div>
                            <div className="form-group">
                                <input className="form-control"
                                    onChange={(e) => this.setState({ passValue: e.target.value })}
                                    type="password"
                                    placeholder="Your Password *"
                                    value={this.state.passValue} />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Create User" />
                            </div>

                            {/* <button onClick={() => this.setState({loginPage:false})} type="button" className="btn btn-primary">Primary</button> */}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


