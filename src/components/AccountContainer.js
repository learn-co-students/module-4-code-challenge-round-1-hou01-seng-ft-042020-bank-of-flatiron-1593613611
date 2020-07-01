import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions: [],
    // displayTransactiions: [],
    // filter: ''
  }

  componentDidMount (){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transactions => {this.setState({
      transactions: transactions,
      // displayTransactiions: transactions
    })})
  }

  createTransaction = (newTransaction) => {
    fetch('http://localhost:6001/transactions',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        date: newTransaction.date,
        description: newTransaction.description,
        category: newTransaction.category,
        amount: newTransaction.amount
      })
    })
     .then(res =>res.json())
     .then(postedTransaction => {
       this.setState({
         transactions: [...this.state.transactions, postedTransaction]
       })
     })
  }

  filterTransactions = (description) => {
    this.setState( {transactions: this.state.transactions.filter( t => t.description === description)} )
  }


  render() {
    return (
      <div>
        <Search filterTransactions={this.filterTransactions}/>
        <AddTransactionForm createTransaction={this.createTransaction}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
