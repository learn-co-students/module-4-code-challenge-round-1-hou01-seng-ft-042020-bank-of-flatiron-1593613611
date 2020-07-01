import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: null,
    searchTerm: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
      .then( res => res.json())
      .then( transactions => this.setState({transactions: transactions}))
  }

  handleSubmit = (e, props) => {
    e.preventDefault()
    console.log(props.inputDate)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        date: props.inputDate,
        description: props.inputDescription,
        category: props.inputCategory,
        amount: props.inputAmount
      })
    }

    fetch('transactions', options)
    .then(res => res.json())
    .then(obj => {
      this.setState({
        transactions: [...this.state.transactions, obj]
      })
    })

  }

  searchTransactions = (props) => {
    this.setState({ searchTerm: props})
  }

  render() {
    if (this.state.transactions === null) {
      return <h1> Loading... </h1>
    }
    // console.log('state in app:', this.state.transactions)
    let filteredTransactions = this.state.transactions.filter(
      transaction => transaction.description.startsWith(this.state.searchTerm)
    )
    
    return (
      <div>
        <Search search={this.searchTransactions}/>
        <AddTransactionForm handleSubmit={this.handleSubmit}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
