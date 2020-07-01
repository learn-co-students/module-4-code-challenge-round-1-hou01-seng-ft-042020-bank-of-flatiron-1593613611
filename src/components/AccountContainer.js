import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const url = `http://localhost:6001`

class AccountContainer extends Component {
  
  state = {
    transactions: [],
    newT : {},
    searchTerm : '',
    filteredT: []
  }

  addTransaction = (e) => {
    
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(e)
    }
    fetch(`${url}/transactions`, options)
      .then( this.setState({
        transactions: [...this.state.transactions, e]
      }))
  }

  searchTransaction = (search) => {
      
    var results =  this.state.transactions.filter(function(t) {
      return t.description.includes(search);
    });
    console.log(results)
    this.setState({
      filteredT : results
    })
      
  }

  deleteTransaction = () => {

  }
  
  componentDidMount(){
    fetch(`${url}/transactions`)
      .then(res => res.json())
      .then(transactions => {
        this.setState({
          transactions: transactions,
          filteredT: transactions
        })
      })
  }

  render() {
    return (
      <div>
        <Search searching = {this.searchTransaction} />
        <AddTransactionForm adding = {this.addTransaction}/>
        <TransactionsList transactions = {this.state.filteredT}/>
      </div>
    );
  }
}

export default AccountContainer;
