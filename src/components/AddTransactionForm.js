import React, { Component } from "react";

class AddTransactionForm extends Component {

  state ={
    date: "",
    description: "",
    category: " ",
    amount: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTransaction(this.state)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input  onChange={this.handleChange} value={this.state.date}  type="date" name="date" />
            <input  onChange={this.handleChange}  value={this.state.description} type="text" name="description" placeholder="Description" />
            <input  onChange={this.handleChange} value={this.state.category} type="text" name="category" placeholder="Category" />
            <input  onChange={this.handleChange} value={this.state.amount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button  onClick={this.handleSubmit}  className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
