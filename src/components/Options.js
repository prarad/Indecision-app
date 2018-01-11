import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div className="">
        <div className="option-bar">
            <h2 >Your Options</h2>
            <button
                className="button button--remove"
                onClick={props.handleDeleteOptions}>
                Remove All </button>
        </div>
        {!props.options.length && <p className="message">Please add an option to get started!</p>}
        {props.options.map((cur,i) => (
            <Option className="option"
                key={cur}
                index={i + 1}
                optionText={cur}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </div>
)

export default Options