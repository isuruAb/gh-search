import styles from "./index.module.scss";

function DropdownOptions({ optionsArray, value, label, onClick }) {
  return (
    <div className={`${styles.dropdownOptions}`}>
      {optionsArray?.map((data, index) => {
        return (
          <ul key={index} data-id={data?.[value]} onClick={onClick}>
            {data?.[label]}
          </ul>
        );
      })}
    </div>
  );
}

export default DropdownOptions;
