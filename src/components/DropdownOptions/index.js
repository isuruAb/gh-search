import styles from "./index.module.scss";
import PropTypes from "prop-types";

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

DropdownOptions.propTypes = {
  optionsArray: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  dropdownWrapper: PropTypes.object
};

export default DropdownOptions;
