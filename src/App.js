import { useState } from "react";
import styles from "./app.module.scss";
import DropdownOptions from "./components/DropdownOptions";

function App({ onChange, value, optionsArray }) {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    const searchResult = optionsArray.filter((value) => value.label === e.target.value);
    console.log("searchResult", searchResult);
    setSuggestions(searchResult);
    onChange(e);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <DropdownOptions optionsArray={suggestions} />
    </div>
  );
}

export default App;
