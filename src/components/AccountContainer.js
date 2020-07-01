import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: "",
  };

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          transactions: data,
        })
      );
  }

  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions, transaction],
    });
  };

  handleSearch = (e) => {
    this.setState({
      ...this.state,
      searchTerm: e.target.value,
    });
  };
  render() {
    // console.log(this.state.transactions);
    // tried doing transaction.description below didn't work
    const searchTransaction = this.state.transactions.filter((transaction) =>
      transaction.category.includes(this.state.searchTerm)
    );
    return (
      <div>
        <Search onChange={this.handleSearch} />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={searchTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
