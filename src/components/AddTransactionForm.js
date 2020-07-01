import React, { Component } from "react";

class AddTransactionForm extends Component {
state = {
  amount: null,
  category: null,
  date: null,
  description: null,
  id: null
}

handleDate = (e) =>{
  this.setState({[e.target.name]: e.target.value});
}

handleDesc = (e) =>{
  this.setState({[e.target.name]: e.target.value});
}
handleCat = (e) =>{
  this.setState({[e.target.name]: e.target.value});
}
  handleSubmit = (e) =>  {
    // console.log('form submitted', e.target)
    e.preventDefault()
    this.props.passAdd(this.state)
  }
  render() {
    console.log(this.props)

    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={this.handleDate} type="date" name="date" />
            <input onChange={this.handleDesc} type="text" name="description" placeholder="Description" />
            <input onChange={this.handleCat} type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button  className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
