import React, { useState } from 'react'

const RequestForm = (props) => {
    const { requestBoxesArray, setRequestBoxesArray } = props
    const [ color, setColor] = useState("")
    const [ size, setSize] = useState(50)
    const submitHandler = (event) => {
    event.preventDefault()

    setRequestBoxesArray([ ...requestBoxesArray, { color: color, size: size + "px",}])
    setColor("")
    setSize(50)
    }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <div>
                    <label>Color:  </label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div>
                    <label>height & width:  </label>
                    <input type="text" value={size} onChange={(e) => setSize(e.target.value)}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default RequestForm