
import React from 'react'
import firebase from 'firebase'

import BookList from './containers/book-list'
import BookDetail from './containers/book-detail'
import Login from './Login'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userIsLoggedIn: false
        }
    }

    componentDidMount() {
        var that = this
        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {

                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                that.setState({ userIsLoggedIn: true })
            } else {
                // User is signed out.
                that.setState({ userIsLoggedIn: false })
            }
        });
    }



    render() {

        if (this.state.userIsLoggedIn) {
            console.log("is Logged in")
            return (
                <div>
                    <h3>Test 3</h3>
                    <BookList />
                    <BookDetail />
                </div>
            )
        } else {
            console.log("Not logged in")
            return (
                <Login />
            )
        }
    }
}

