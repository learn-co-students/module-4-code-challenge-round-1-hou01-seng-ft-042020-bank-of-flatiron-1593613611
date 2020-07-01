import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state ={
    transactions: [],
    loaded: false, 
    newTrans: {
      date: null,
      description: null,
      category: null,
      amount: null
    }
  }

  updateNewTrans = (e) => {
    console.log(e.target.date.value)
     this.setState({newTrans: {
      date: e.target.date.value,
      description: e.target.description.value,
      category: e.target.category.value,
      amount: e.target.amount.value
    }})
  }
  addTransaction = (e) => {
    this.setState({transactions: [...this.state.transactions, this.state.newTrans]})
    console.log(this.state)

    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        
      )
    })
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({transactions: data, loaded: true})
    })
  }

  render() {
    if(!this.state.loaded){
      return <h3>Loading...</h3>
    }else{
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.addTransaction} updateNewTrans={this.updateNewTrans}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )}
  }
}

export default AccountContainer;
