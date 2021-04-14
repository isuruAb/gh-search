import { useState, useEffect } from "react";
import DropdownOptions from "./components/DropdownOptions";
import { getData } from "./utils/api";

function App({ onChange, value, optionsArray }) {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm) {
        const params = [{ key: "q", value: searchTerm }];
        const searchResult = await getData({ params });
        setSuggestions(searchResult?.items);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <DropdownOptions optionsArray={suggestions} value="login" label="login" />
    </div>
  );
}

export default App;
