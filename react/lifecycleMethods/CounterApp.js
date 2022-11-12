import React from "react";



class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor called')
        this.state = {
            count: 0
        }

    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')

    }
    componentDidMount() {
        console.log('componentDidMount')
        console.log('----------------------------')

    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
        console.log('----------------------------')


    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        console.log('----------------------------')


    }
    render() {
        console.log('render called')

        return (
            <div>
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.handleClick} >increment</button>
            </div>
        )
    }
}

export default CounterApp