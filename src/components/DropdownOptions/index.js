import styles from "./index.module.scss";

function DropdownOptions({ optionsArray }) {
  return (
    <div className={`${styles.dropdownOptions}`}>
      {optionsArray.map((data) => {
        return <ul name={data.key}>{data.label}</ul>;
      })}
    </div>
  );
}

export default DropdownOptions;
