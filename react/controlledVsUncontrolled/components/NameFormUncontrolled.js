import React, { Component, createRef } from "react";



export default class NameFormUncontrolled extends Component {
    constructor(props) {
        super(props)

        this.input = createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(this)
    //     // alert(`A name was submited ${this.input.current.value}`)
    // }

    handleSubmit(event) {
        // event.preventDefault()
        console.log(this)
        alert(`A name was submited ${this.input.current.value}`)
    }



    render() {

        console.log(this.input)
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <input ref={this.input} type='text' />
                </label>
                <input type='submit' />

            </form>
        )
    }
}

// import React, { useRef } from 'react'

// function NameFormUncontrolled() {
//     const inputRef = useRef('')

//     const handleSubmit = () => {
//         alert(`My name is ${inputRef.current.value}`)
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit} >
//                 <label>
//                     Name:
//                     <input ref={inputRef} type='text' />
//                 </label>
//                 <input type='submit' />

//             </form>
//         </div>
//     )
// }

// export default NameFormUncontrolled