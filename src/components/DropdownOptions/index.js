import styles from "./index.module.scss";

function DropdownOptions({
  optionsArray,
  value,
  label,
  onClick,
  dropdownWrapper
}) {
  return (
    <div className={`${styles.dropdownOptions} ${dropdownWrapper}`}>
     <ul>
      {optionsArray?.map((data, index) => {
        return (
          <li key={index} data-id={data?.[value]} onClick={onClick}>
            {data?.[label]}
          </li>
        );
      })}
      </ul>
    </div>
  );
}

export default DropdownOptions;
