import { useState, useEffect, useRef } from "react";
import DropdownOptions from "./components/DropdownOptions";
import { getData } from "./utils/api";

function Dropdown({ onChange, dropdownStyles, dropdownBoxStyle }) {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectName, setSelectName] = useState(false);

  const handleChange = (e) => {
    if (e?.currentTarget?.dataset?.id) {
      onChange(e?.currentTarget?.dataset?.id);
      setSearchTerm(e?.currentTarget?.dataset?.id);
    }
    if (e?.target?.value) {
      onChange(e?.target?.value);
      setSearchTerm(e?.target?.value);
      setSelectName(false);
    }
  };

  const handleSelect = (e) => {
    setSelectName(true);
    setToggleDropdown(false);
    handleChange(e);
  };

  // Send API request 0.5 seconds after user stop typing
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm && !selectName) {
        const params = [{ key: "q", value: searchTerm }];
        const searchResult = await getData({ params });
        setSuggestions(searchResult?.items);
        setToggleDropdown(true);
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectName]);

  // Close the dropdown on clicking outside
  const useOutsideClick = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleDropdown(false);
        }
      };
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={dropdownBoxStyle}
      />
      {toggleDropdown && (
        <div ref={wrapperRef}>
          <DropdownOptions
            optionsArray={suggestions}
            onClick={handleSelect}
            value="login"
            label="login"
            dropdownWrapper={dropdownStyles}
          />
        </div>
      )}
    </div>
  );
}

export default Dropdown;
