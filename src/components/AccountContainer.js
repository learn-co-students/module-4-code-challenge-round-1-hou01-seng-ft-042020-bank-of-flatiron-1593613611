import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search changeSearchTerm={this.props.changeSearchTerm} fetchTransactions={this.props.fetchTransactions}/>
        <AddTransactionForm postTransaction={this.props.postTransaction}/>
        <TransactionsList transactions={this.props.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
