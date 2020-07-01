import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(desc) => { props.filterTransactions(desc)
          console.log("Searching...");
        }}
      />
      <i className="circular search link icon"></i>
      <label>
        <input type="radio" value="Price" checked={null} onChange={() => props.sortByPrice()}/>
        Price
      </label>
    </div>
  );
};

export default Search;
