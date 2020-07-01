import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    name = "",
    date = "",
    description = "",
    amount = ""
  }


  handleChange = () => {
    debugger
  }

  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.add}>
          <div className="inline fields">
            <input type="date" name="date" onChange={() => this.handleChange} value={this.state.name}/>
            <input type="text" name="description" placeholder="Description" onChange={() => this.handleChange} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={() => this.handleChange} value={this.state.category}/>
            <input
              onChange={() => this.handleChange} value={this.state.amount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <label>
            <input type="radio" value="Category" checked={null} onChange={() => this.props.sortByCategory()}/>
            Category
          </label>
          <label>
            <input type="radio" value="Description" checked={null} onChange={() => this.props.sortByDescription()}/>
            Description
          </label>

          <button className="ui button" type="submit" onClick={this.props.add}>
            Add Transaction
          </button>          
        </form>
        
       
      </div>
      
    );
  }
}

export default AddTransactionForm;
