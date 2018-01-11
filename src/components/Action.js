import React from 'react'

const Action = (props) => (
    <div className="action">
        <button className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >What Should I Do?</button>
    </div>
)

export default Action