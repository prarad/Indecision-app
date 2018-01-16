import React from 'react'

export default class AddOption extends React.Component {
    state = { error: undefined }
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <form action="" onSubmit={this.handleAddOption}>
                    <div className="add-option">
                        <input className="add-option__input" type="text" name="option" placeholder="option..."/>
                        <button className="button">Add Option</button>
                    </div>
                </form>
            </div>
        )
    }
}
