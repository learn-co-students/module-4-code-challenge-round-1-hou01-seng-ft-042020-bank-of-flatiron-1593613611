import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor(){
    super()
    this.state={
      transactions: [],
      displayTrans: []

    }
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res=>res.json())
    .then(trans =>{
      this.setState({
        transactions: trans,
        displayTrans: trans
      })
    })  
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList trans={this.state.displayTrans}/>
      </div>
    );
  }
}

export default AccountContainer;
