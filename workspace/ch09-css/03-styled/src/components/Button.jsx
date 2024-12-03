import styles from "./Button.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["blue", "yellow", "red"]),
  bg: PropTypes.oneOf(["blue", "yellow", "gray", "red"]),
};

export default function Button({
  children,
  type = "button",
  onClick: clickHandler,
  color,
  bg,
}) {
  const colorStyle = classNames(styles.button, styles[`color-${bg}-${color}`]);

  return (
    <button
      className={`${styles.button} ${colorStyle}`}
      type={type}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
