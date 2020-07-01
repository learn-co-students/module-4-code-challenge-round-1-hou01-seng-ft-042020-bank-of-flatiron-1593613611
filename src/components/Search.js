import React from "react";

const Search = (props) => {
  // console.log(props)
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => props.search(e.target.value)}
        // value={null}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
