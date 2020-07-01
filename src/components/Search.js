import React from "react";

class Search extends React.Component {

  state = {
    searchField: ""
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={(e) => {
            console.log("Searching...");
            this.handleChange(e)
          }}
        />
        <i onClick={()=> this.props.searchDescription(this.state.searchField)} className="circular search link icon"></i>
      </div>
    );
  }

};

export default Search;
