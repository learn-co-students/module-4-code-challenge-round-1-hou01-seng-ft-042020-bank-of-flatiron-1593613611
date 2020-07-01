import React, { Component } from "react";

class AddTransactionForm extends Component {

  constructor(){
    super();
    this.state = {
      date: "",
      description: "",
      category: "",
      amount: 0
    }
  }

  handleDate = event => {
    this.setState({
      date: event.target.value
    })
  }

  handleDescription = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleCategory = event => {
    this.setState({
      category: event.target.value
    })
  }

  handleAmount = event => {
    this.setState({
      amount: event.target.value
    })
  }

  handleSubmit = event => {
    // event.preventDefault()
    this.props.postTransaction(this.state)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={event => this.handleSubmit(event)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={event => this.handleDate(event)} value={this.state.date}/>
            <input type="text" name="description" placeholder="Description" onChange={event => this.handleDescription(event)} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={event => this.handleCategory(event)} value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={event => this.handleAmount(event)} value={this.state.amount}
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
