import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
// import SortCat from "./SortCat"

class AccountContainer extends Component {

  state={
    transactions: [],
    displayTransactions:[],
    searchTerm: "default"
  }

  searchTransaction=(term)=>{
    let display = this.state.transactions.filter(transaction=> transaction.description===term)
    this.setState({
      displayTransactions: display
    })
    if(term === ""){
      this.setState({
        displayTransactions: this.state.transactions
      })
    }
  }

  sortCat=(e)=>{
   e.preventDefault();
  let sort= this.state.displayTransactions.sort((a, b)=>{ return (a.category.localeCompare(b.category))})
  this.setState({
    displayTransactions: sort
  })
  }

  sortDescription=(e)=>{
    e.preventDefault();
   let sort= this.state.displayTransactions.sort((a, b)=>{ return (a.description.localeCompare(b.description))})
   this.setState({
     displayTransactions: sort
   })
   }

  addTransaction=(date, description, cat, amount)=>{
    console.log(date, description, cat, amount)
    let options={
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify({
        date: date,
        description: description,
        category: cat,
        amount: amount
      })
    }
    fetch('http://localhost:3000/transactions', options)
    .then(res=>res.json())
    .then(transaction => this.setState({
      displayTransactions: [...this.state.displayTransactions, transaction]
    }))
    
  }

  componentDidMount(){
    fetch('http://localhost:3000/transactions')
    .then(res=>res.json())
    .then(transactions => 
      this.setState({
        transactions: transactions, 
        displayTransactions: transactions
      }))
  }

  render() {
    return (
      <div>
        <Search searchTransaction={this.searchTransaction}/>
        <AddTransactionForm addTransaction={this.addTransaction} sortCat={this.sortCat} sortDescription={this.sortDescription}/>

        <TransactionsList transactions={this.state.displayTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
