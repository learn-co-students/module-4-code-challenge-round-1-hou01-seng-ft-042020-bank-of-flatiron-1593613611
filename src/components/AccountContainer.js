import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search handleSearch={this.props.handleSearch} />
        <AddTransactionForm handleForm={this.props.handleForm} handleSubmit={this.props.handleSubmit} />
        <TransactionsList handleSort={this.props.handleSort} handleDelete={this.props.handleDelete} transactions={this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
