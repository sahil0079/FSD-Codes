import React, { Component } from 'react'

export default class NameFormControlled extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)


    }

    handleSubmit(event) {
        event.preventDefault()
        alert(`My name is ${this.state.email}`)

    }
    handleChange(event) {

        this.setState({
            value: event.target.value

        })

    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input onChange={this.handleChange} type='text' />

                </label>
                <label>
                    <input onChange={this.handleEmailChange} type='email' placeholder='email' />

                </label>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}