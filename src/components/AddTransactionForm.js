import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: "",
  };

  handleChange = ({ name, value }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        date: e.target[0].value,
        description: e.target[1].value,
        category: e.target[2].value,
        amount: e.target[3].value,
      }),
    };

    fetch("http://localhost:6001/transactions", options)
      .then((res) => res.json())
      .then((transaction) => {
        this.props.addTransaction(transaction);
      });
    e.target.reset();
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange} />
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange}
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
