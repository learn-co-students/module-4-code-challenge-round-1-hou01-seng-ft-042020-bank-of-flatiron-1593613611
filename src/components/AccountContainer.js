import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: null,
    filtered: [], 
    // searchField: null
  }
  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res=>res.json())
    .then(data=> {
      console.log(data )
      this.setState({transactions: data, filtered: data})
    })
  }

  addTransaction = (transaction) =>{
    // console.log('transaction about to post', transaction)
    // console.log('adding',  transaction, [...this.state.transactions, transaction])
    // This should add a the new transaction to the table 
    // this.setState({transactions: [...this.transactions, transaction] })
    let options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    }

    fetch('http://localhost:6001/transactions', options)
    .then(res=>res.json())
    .then(data=> {
      // console.log([...this.state.transactions, data])
      this.setState({transactions: [...this.state.transactions, data], filtered: [...this.state.transactions, data]})
    })
  }

  filterSearch = (e) =>{
    
  let filteredOut = this.state.transactions.filter(transaction => {
    const lc = transaction.description.toLowerCase();
    const filterBy = e.target.value.toLowerCase();
    return lc.includes(filterBy);
  })
  this.setState({filtered: filteredOut})
}

  render() {
    return (
      <div>
        <Search filterSearch={this.filterSearch}/>
        <AddTransactionForm passAdd={this.addTransaction} />
        <TransactionsList transactions={this.state.filtered}/>
      </div>
    );
  }
}

export default AccountContainer;
