import React from 'react';

const RequestBoxesDisplay = (props) => {
    const { requestBoxesArray } = props;

    return (
        <div>
        {
            requestBoxesArray.map((box, index) => (
            <div key={index} style={{ 
                display: "inline-block", margin: "15px", height: box.size, width: box.size, backgroundColor: box.color}}>
            </div>
            ))
        }
        </div>
    )
}

export default RequestBoxesDisplay;