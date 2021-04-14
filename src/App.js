import logo from "./logo.svg";
import styles from "./App.scss";

function App({ onChange, value, optionsArray }) {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div className={`${styles.dropdownOptions} position-absolute`}>
        {optionsArray.map((data) => {
          return <ul name={data.key}>{data.label}</ul>;
        })}
      </div>
    </div>
  );
}

export default App;
