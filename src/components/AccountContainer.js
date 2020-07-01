import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: '',
      displayTransactions: [],
      filter: null,
      transaction: {
        date: '',
        description: '',
        category: '',
        amount: null
      },
      isLoading: true
    }
  }

  componentDidMount() {
    // fetch('http://localhost:6001/transactions')
    // .then(res => res.json())
    // .then(transactions => {
    //   this.setState({
    //     transactions: transactions,
    //     displayTransactions: transactions,
    //     isLoading: false
    //   })
    // })
    this.fetch()
  }
  
  fetch = () => {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        transactions: transactions,
        displayTransactions: transactions,
        isLoading: false
      })
    })
  }


  addTransaction = (e, resetTransaction) => {
    // debugger
    e.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        transaction: {
          date: e.target[0].value,
          description: e.target[1].value,
          category: e.target[2].value,
          amount: parseInt(e.target[3].value)
        }
      })
    }
    fetch('http://localhost:6001/transactions', options)
      .then(res => res.json())
      .then(transaction => {
        // console.log(transaction)
        this.setState({
          transactions: [...this.state.transactions, transaction]
        })
      }, () => this.fetch())
      // e.target.reset()
      // this.setState({transaction: resetTransaction})
  }

  filterTransactions= (type) => {
    this.setState({
      displayTransactions: this.state.transactions.filter(tran => tran.type === type)
    })
  }

  render() {
    return (
      <div>{this.state.isLoading 
        ? <h4> Loading ... </h4>
        : <div>
            <Search filter={this.filterTransactions}/>
            <AddTransactionForm addTransaction={this.addTransaction}/>
            <TransactionsList transactions={this.state.transactions}/>
          </div>
        }
      </div>
    );
  }
}

export default AccountContainer;
