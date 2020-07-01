import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    newtransafction: [],
    search: "store"
  }
  changeSearch = (input) => {
    this.setState({
      search: input
    })
  }
  addDate = (input) => {
    this.setState({
      newtransafction: {
      date: input}
      })
  }

  addDescription = (input) => {
    this.setState({
      newtransafction:{
      description: input}
    })
  }

  addCategory = (input) => {
    this.setState({
      newtransafction:{
      category: input}
    })
  }

  addAmount = (input) => {
    this.setState({
      newtransafction:{
      amount: input}
    })
  }

  postIt = (e) => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        date: this.state.newtransafction.date,
        description: this.state.newtransafction.description,
        category: this.state.newtransafction.category,
        amount: this.state.newtransafction.amount
      })
    };
    fetch(`http://localhost:6001/transactions`,options)
    .then(res => res.json())
    .then(hello => {
      this.setState({
        transactions: [...this.state.transactions,hello]
      })
    })
    e.preventDefault()
  }


  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} 
        addDate={this.addDate}
        addDescription={this.addDescription}
        addCategory={this.addCategory}
        addAmount={this.addAmount}
        postIt={this.postIt}
        changeSearch={this.changeSearch}/>
      </div>
    );
  }
}

export default App;
