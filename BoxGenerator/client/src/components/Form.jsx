import React, { useState } from 'react'

const Form = (props) => {
    const { boxColorArray, setBoxColorArray } = props
    const [ color, setColor] = useState("")
    const submitHandler = (event) => {
        event.preventDefault()
        setBoxColorArray([ ...boxColorArray, color ])
    }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <div>
                    <label htmlFor="firstName">Color:  </label>
                    <input type="text" onChange={(e) => setColor(e.target.value)}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form