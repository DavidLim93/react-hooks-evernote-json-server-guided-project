import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes By Title Or Body Content" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default Search; 