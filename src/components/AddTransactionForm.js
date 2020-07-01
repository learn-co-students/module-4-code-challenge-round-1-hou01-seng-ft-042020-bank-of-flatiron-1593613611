import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: null,
    description : null,
    category: null, 
    amount: null
  }
  
  addingForm = (e) =>{
    e.preventDefault()
    this.props.adding(this.state)

  }
  
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.addingForm(e)} >
          <div className="inline fields">
            <input type="date" name="date" onChange = {(event)=> this.setState({date: event.target.value})}/>
            <input type="text" name="description" placeholder="Description" onChange = {(event)=> this.setState({description: event.target.value})}/>
            <input type="text" name="category" placeholder="Category" onChange = {(event)=> this.setState({category: event.target.value})}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange = {(event)=> this.setState({amount: event.target.value})}
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
