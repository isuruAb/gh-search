import styles from "./index.module.scss";

function DropdownOptions({ optionsArray, value, label }) {
  return (
    <div className={`${styles.dropdownOptions}`}>
      {optionsArray?.map((data,index) => {
        return <ul key={index} name={data?.[value]}>{data?.[label]}</ul>;
      })}
    </div>
  );
}

export default DropdownOptions;
