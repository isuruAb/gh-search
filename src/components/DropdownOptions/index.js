import styles from "./index.module.scss";

function DropdownOptions({ optionsArray, value, label, onClick, dropdownWrapper }) {
  return (
    <div className={`${styles.dropdownOptions} ${dropdownWrapper}`} >
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
