import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        if (!this.props.activeBook) {
            return (
                <div></div>
            )
        } else {
            return (
                <div>
                    <h2>Title: {this.props.activeBook.title}</h2>
                    <h4>Pages: {this.props.activeBook.pages}</h4>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)