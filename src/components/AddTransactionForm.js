import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    inputDate: null,
    inputDescription: null,
    inputCategory: null,
    inputAmount: null
  }

  render() {
    // console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={(e) => this.setState({ inputDate: e.target.value})}/>
            <input type="text" name="description" placeholder="Description" onChange={(e) => this.setState({ inputDescription: e.target.value})}/>
            <input type="text" name="category" placeholder="Category" onChange={(e) => this.setState({ inputCategory: e.target.value})}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={(e) => this.setState({ inputAmount: e.target.value})}
            />
          </div>
          <button className="ui button" type="submit" onClick={(e)=>this.props.handleSubmit(e, this.state)}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
