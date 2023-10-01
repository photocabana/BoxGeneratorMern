import React from 'react'

const Display = (props) => {
    const { boxColorArray } = props

    return (
        <div>
        {
            boxColorArray.map((color, index) => (
            <div key={index} style={{ 
                display: "inline-block", margin: "15px", height: "75px", width: "75px", backgroundColor: color}}>
            </div>
            ))
        }
        </div>
    )
}

export default Display