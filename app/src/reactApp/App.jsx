
import React, {Suspense} from 'react'
import firebase from 'firebase'

import Login from './Login'


const BookList = React.lazy(() => import('./containers/book-list'))
const BookDetail = React.lazy(() => import('./containers/book-detail')) 

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
            console.log(user)
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

logOutPressed() {
    console.log("logout")
    firebase.auth().signOut();
    this.setState({userIsLoggedIn: false})

}

    render() {
        if (this.state.userIsLoggedIn) {
            console.log("is Logged in")
            return (
                <div>
                    <button onClick={() => this.logOutPressed()} type="button" className="btn btn-primary">Logout</button>
                    <h3>Test 3</h3>
                    <Suspense fallback={<div>Loading Book list...</div>}>
                    <BookList />
                </Suspense>

                <Suspense fallback={<div>Loading Book detail...</div>}>
                    <BookDetail />
                    </Suspense>
                    
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

