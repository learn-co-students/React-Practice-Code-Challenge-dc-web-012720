import React from 'react'

const Wallet = (props) => {
    return (<div>
        <form onSubmit = {props.handleSubmit}>
        <label htmlFor = "walletForm">Add Money:</label>
        <input name = "walletForm" type = "text" value = {props.typedBudget} onChange = {props.handleOnChange}></input>
        <input type="submit"></input>
        </form>
    </div>)
}

export default Wallet