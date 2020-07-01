import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {


  constructor() {

    super()
    this.state = {
      transactions: [],
      displayTransactions: [],
      filterTransactions: []
    }
  }

  addTransaction = (transaction) => {
    // debugger
    this.setState({
      displayTransactions: [...this.state.displayTransactions, transaction]
    })

    fetch('http://localhost:6001/transactions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
      })
    }
    )
  }


  filterTransactions = (desc) => {
    // debugger
    let filtered = this.state.transactions.filter(trans => trans.description === desc)
    this.setState({
      filterTransactions: filtered
    })
  }


  sortByCategory = () => {
    // debugger
    let sorted = this.state.transactions.sort((a, b) => a.category > b.category ? 1 : -1)
    this.setState({
      transactions: sorted
    })
  }


  sortByDescription = () => {
    // debugger
    let sorted = this.state.transactions.sort((a, b) => a.description > b.description ? 1 : -1)
    this.setState({
      transactions: sorted
    })
  }


  componentDidMount() {

    fetch('http://localhost:6001/transactions')
      .then(res => res.json())
      .then(transactions => {
        this.setState({
          transactions: transactions,
          displayTransactions: transactions
        })
      })

  }
  render() {
    return (
      <div>
        <Search filterTransactions={this.filterTransactions} />
        <AddTransactionForm add={this.addTransaction} sortByCategory={this.sortByCategory} sortByDescription={this.sortByDescription}/>
        <TransactionsList showTransactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
