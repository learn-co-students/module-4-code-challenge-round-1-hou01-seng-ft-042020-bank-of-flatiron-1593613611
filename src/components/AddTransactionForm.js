import React, { Component } from "react";

class AddTransactionForm extends Component {

  state={
    date: null,
    description: null, 
    category: null,
    amount: null
  }

  addTransaction=(e)=>{
    e.preventDefault();
    this.props.addTransaction(this.state.date, this.state.description, this.state.category, this.state.amount)
  }

  addDate=(e)=>{
    console.log(e)
    this.setState({
      date: e
    })
  }

  addDescription=(e)=>{
    console.log(e)
    this.setState({
      description: e
    })
  }

  addCat=(e)=>{
    console.log(e)
    this.setState({
      category: e
    })
  }

  addAmount=(e)=>{
    console.log(e)
    this.setState({
      amount: e
    })
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={(e)=>this.addDate(e.target.value)}/>
            <input type="text" name="description" placeholder="Description"  onChange={(e)=>this.addDescription(e.target.value)}/>
            <input type="text" name="category" placeholder="Category"  onChange={(e)=>this.addCat(e.target.value)}/>
            <input onChange={(e)=>this.addAmount(e.target.value)}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit" onClick={(e)=>this.addTransaction(e)}>
            Add Transaction
          </button>
          <button className="ui button" type="submit" onClick={(e)=>{this.props.sortCat(e)}}>
            Sort Transactions by Category
          </button>
          <button className="ui button" type="submit">
            Sort Transactions by Description
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
