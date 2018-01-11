import React from 'react'

const Option = (props) => (
    <div className="option">
        <p className="option-text">{props.index + ". " + props.optionText}</p>
        <button 
        className="button button--remove" 
        onClick={() => props.handleDeleteOption(props.optionText)}
        >Remove</button>
    </div>
)

export default Option