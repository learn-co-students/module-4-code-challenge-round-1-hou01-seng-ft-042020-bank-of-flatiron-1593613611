import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    newTrans: {},
    searchTerm: "",
    sort: ""
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then(res => res.json())
      .then(results => this.setState({ transactions: results}))
  }

  handleForm = (key, value) => {
    this.setState({
      newTrans: {...this.state.newTrans, [key]: value}
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { date, description, category, amount } = this.state.newTrans
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount
      })
    }
    fetch('http://localhost:6001/transactions', options)
      .then(res => res.json())
      .then(result => 
        this.setState({
          transactions: [...this.state.transactions, result],
          newTrans: {}
        })
      )
    e.target.reset()
  }

  handleSearch = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  handleSort = (term) => {
    this.setState({
      sort: term
    })
  }

  updatedTrans = () => {
    let transactions = [...this.state.transactions]
    if (this.state.searchTerm !== "") {
      console.log("not")
      transactions = transactions.filter(trans => trans.description.includes(this.state.searchTerm))
    } else {
      console.log("empty")
    }

    switch (this.state.sort) {
      case "Date":
        return transactions = transactions.sort((a, b) => {return b.date - a.date})
      case "Description":
        return transactions = transactions.sort((a, b) => {if(a.description < b.description) {return -1} else if (a.description > b.description) {return 1} else {return 0}})
      case "Category":
        return transactions = transactions.sort((a, b) => {if(a.category < b.category) {return -1} else if (a.category > b.category) {return 1} else {return 0}})
      case "Amount":
        return transactions = transactions.sort((a, b) => {return b.amount - a.amount})
      default:
        return transactions
    }
  }

  handleDelete = (deltrans) => {
    fetch(`http://localhost:6001/transactions/${deltrans.id}`, {method: "DELETE"})
      .then(() => this.setState({
        transactions: this.state.transactions.filter(trans => trans.id !== deltrans.id )
      }))
  }

  render() {
    // const termSearch = _.debounce(() => {
    //   this.updatedTrans();
    // }, 1000);
    let transactions = this.updatedTrans()
    console.log(transactions)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer handleSort={this.handleSort} handleDelete={this.handleDelete} handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} handleForm={this.handleForm} transactions={transactions} />
      </div>
    );
  }
}

export default App;
