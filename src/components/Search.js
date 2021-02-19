import React from "react";

function Search({bakerSearch, setBakerSearch}) {

    return (
        <div className="searchbar">
          <label style={{ color:"#695d65" }} htmlFor="search">Search by Name</label>
          <input
            style={{ border:'none', padding:'8px', marginLeft:'6px' }}
            type="text"
            id="search"
            placeholder="Search..."
            value={bakerSearch}
            onChange={(e) => setBakerSearch(e.target.value)}
          />
        </div>
      );

}

export default Search