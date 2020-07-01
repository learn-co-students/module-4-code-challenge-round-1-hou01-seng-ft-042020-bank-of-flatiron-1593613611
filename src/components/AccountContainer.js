import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: null,
    transactionsDisplayed: null,
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then(res => res.json())
      .then(transactions => {
        this.setState({
          transactions: transactions,
          transactionsDisplayed: transactions
        })
      })
  }

  createTransaction = (e, transactionInfo) => {
    e.preventDefault()
    const {date, description, category, amount} = transactionInfo
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount
      })
    })
    .then(res => res.json())
    .then(transaction => {
      console.log(transaction)
      this.setState(prevState => ({
        transactionsDisplayed: [transaction, ...prevState.transactionsDisplayed]
      }))
    })
  }

  searchDescription = (searchTerm) => {
    let results = [];
    searchTerm === '' 
      ? results = this.state.transactions 
      : results = this.state.transactions.filter(transaction => transaction.description === searchTerm) 
    this.setState({
      transactionsDisplayed: results 
    })
  }

  render() {
    if (this.state.transactions === null) return <h1>Loading...</h1>
    return (
      <div>
        <Search searchDescription={this.searchDescription} />
        <AddTransactionForm createTransaction={this.createTransaction} />
        <TransactionsList transactions={this.state.transactionsDisplayed} />
      </div>
    );
  }
}

export default AccountContainer;

// {
  // "id": 1,
  // "date": "2019-12-01",
  // "description": "Paycheck from Bob's Burgers",
  // "category": "Income",
  // "amount": 1000
// },