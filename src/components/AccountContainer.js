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
  
  compare = (a, b, key) => {
    let comparison = 0;
    if (a[key] > b[key]) {
      comparison = 1;
    } else if (a[key] < b[key]) {
      comparison = -1;
    }
    return comparison;
  }

  filterAlphabetically = (colName) => {
    console.log(colName)
    const map = {
      "description": () => this.state.transactionsDisplayed.sort((a, b) => this.compare(a, b, "description")),
      "category": () => this.state.transactionsDisplayed.sort((a, b) => this.compare(a, b, "category")) 
    }
    this.setState({
      transactionsDisplayed: map[colName]()
    })
  }

  deleteTransaction = (transactionId) => {
    fetch(`http://localhost:6001/transactions/${transactionId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(() => {
      const newList = this.state.transactions.map(transaction => {
        if (transaction.id !== transactionId) return transaction
      })
      this.setState({
        transactionsDisplayed: newList,
        transactions: newList
      })
    })
  }

  render() {
    console.log(this.state)
    if (this.state.transactions === null) return <h1>Loading...</h1>
    return (
      <div>
        <Search searchDescription={this.searchDescription} />
        <AddTransactionForm createTransaction={this.createTransaction} />
        <TransactionsList 
          transactions={this.state.transactionsDisplayed}
          filterAlphabetically={this.filterAlphabetically}
          deleteTransaction={this.deleteTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;