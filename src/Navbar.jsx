import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <nav className="nav-bar">
      <a href="/" id="News">News.</a>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search News"
          id="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button id="search-button" onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
