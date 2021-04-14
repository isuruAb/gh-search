import { useState, useEffect } from "react";
import DropdownOptions from "./components/DropdownOptions";
import { getData } from "./utils/api";

function App({ onChange, dropdownStyles, dropdownBoxStyle }) {
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
        const params = [{ key: "q", value: searchTerm }];
        const searchResult = await getData({ params });

        setSuggestions(searchResult?.items);
        setToggleDropdown(true);
      }
      setSelectName(false);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectName]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} className={dropdownBoxStyle} />
      {toggleDropdown && (
        <DropdownOptions optionsArray={suggestions} onClick={handleSelect} value="login" label="login" dropdownWrapper={dropdownStyles} />
      )}
    </div>
  );
}

export default App;
