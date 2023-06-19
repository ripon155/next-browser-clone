import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}

export default SearchLayout;
