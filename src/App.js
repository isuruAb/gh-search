import { useState,  } from "react";
import DropdownOptions from "./components/DropdownOptions";

function App({ onChange, value, optionsArray }) {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onChange(e);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <DropdownOptions optionsArray={suggestions} key="login" label="login" />
    </div>
  );
}

export default App;
