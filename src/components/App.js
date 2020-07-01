import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

constructor(){
  super();
  this.state = {
    transactions: [],
    searchTerm: ""
  }
}

componentDidMount(){
  fetch("http://localhost:6001/transactions/")
  .then( res => res.json() )
  .then( data => {
    this.setState({
      transactions: [...data]
    })
  })
}

postTransaction(transactionObj){
  const newTransaction = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({...transactionObj})
  }
  fetch("http://localhost:6001/transactions/", newTransaction)
  // .then( res => res.json() )
  // .then( data => {
  //   this.setState({
  //     transactions: [data]
  //   })
  // })

  // Here I wanted the page to update the DOM with a new fetch being called by the Transaction form,
  // but somewhere I went wrong and I can't call this.setState from down the hierarchy so I'm just letting
  // the page re-render whenever I submit the form
}


changeSearchTerm = (term) => {
  this.setState({
    searchTerm: term
  })
}

fetchTransactions = () => {
  fetch("http://localhost:6001/transactions/")
  .then( res => res.json() )
  .then( data => {
    this.setState({
      // I would love to find a way to make a clean .include method to show partial equality of a search term
      // but I ran out of time
      transactions: data.filter(transaction => transaction.description === (this.state.searchTerm))
    })
  })
}


  render() {
    return (
      <div className="ui raised segment">
        
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
          transactions={this.state.transactions} 
          postTransaction={this.postTransaction} 
          changeSearchTerm={this.changeSearchTerm}
          fetchTransactions={this.fetchTransactions}
        />
      </div>
    );
  }
}

export default App;
