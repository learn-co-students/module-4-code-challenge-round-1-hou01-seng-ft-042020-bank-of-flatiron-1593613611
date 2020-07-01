import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.handleSubmit} >
          <div className="inline fields">
            <input type="date" name="date" onChange={(e) => this.props.handleForm("date", e.target.value)} />
            <input type="text" name="description" placeholder="Description" onChange={(e) => this.props.handleForm("description", e.target.value)} />
            <input type="text" name="category" placeholder="Category" onChange={(e) => this.props.handleForm("category", e.target.value)}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={(e) => this.props.handleForm("amount", e.target.value)}
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
