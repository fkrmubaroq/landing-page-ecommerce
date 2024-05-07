import SearchIcon from "../icons/Search";
import "./SearchInput.scss";

export default function SearchInput() {
  return (
    <div className="search-input">
      <div className="search-input__icon">
        <SearchIcon />
      </div>
      <input placeholder="Search something here!" />
    </div>
  );
}