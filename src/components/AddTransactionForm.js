import React, { Component } from "react";

class AddTransactionForm extends Component {

  constructor() {
    super()
    this.state = {
      transaction: {
        date: '', 
        description: '', 
        category: '', 
        amount: null}
        // name: '', 
        // value: ''}
    }
  }

  // handleChange = (e, {name, value}) => {
  //   this.setState({[name]: value})
  // }

  render() {
    let {date, description, category, amount} = this.state
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.props.addTransaction(e, this.state)} className="ui form">
          <div className="inline fields">
            <input 
              onChange={this.handleChange} 
              type="date" 
              name="date"
              value={date} />
            <input 
              onChange={this.handleChange} 
              type="text" 
              name="description" 
              value={description}
              placeholder="Description" />
            <input 
              onChange={this.handleChange} 
              type="text" 
              name="category"
              value={category}
              placeholder="Category" />
            <input 
              onChange={this.handleChange}
              type="number"
              name="amount"
              value={amount}
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
