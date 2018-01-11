import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from "./OptionModal"

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionToRemove)
        }))
    }
    handlePick = () => {
        const rndNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[rndNum]
        this.setState(() => ({
            selectedOption: option
        }))
    }
    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }
        this.setState(prevState => ({ options: prevState.options.concat(option) }))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) this.setState(() => ({ options }))
        } catch (e) {
            //  do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    render() {
        const subtitle = 'Put your life in the hands of computer'
        return (
            <div className="indecision-app">
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="option-box">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}