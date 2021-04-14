import styles from "./index.module.scss";

function DropdownOptions({ optionsArray, key, label }) {
  return (
    <div className={`${styles.dropdownOptions}`}>
      {optionsArray?.map((data) => {
        return <ul name={data?.[key]}>{data?.[label]}</ul>;
      })}
    </div>
  );
}

export default DropdownOptions;
