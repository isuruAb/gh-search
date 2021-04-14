import { useState, useEffect } from "react";
import DropdownOptions from "./components/DropdownOptions";
import { getData } from "./utils/api";

function App({ onChange, value }) {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectName, setSelectName] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e?.target?.value || e?.currentTarget?.dataset?.id);
    onChange(e?.target?.value || e?.currentTarget?.dataset?.id);
  };

  const handleSelect = (e) => {
    setToggleDropdown(false);
    setSelectName(true);
    handleChange(e);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm && !selectName) {
        setToggleDropdown(true);
        const params = [{ key: "q", value: searchTerm }];
        const searchResult = await getData({ params });
        setSuggestions(searchResult?.items);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      {toggleDropdown && <DropdownOptions optionsArray={suggestions} onClick={handleSelect} value="login" label="login" />}
    </div>
  );
}

export default App;
