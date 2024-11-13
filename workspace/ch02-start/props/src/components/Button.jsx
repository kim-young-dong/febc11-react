import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ children, type = "button", color, onClick }) {
  const classes = ["rounded-button"];

  switch (color) {
    case "primary":
      classes.push("button-primary");
      break;
    case "secondary":
      classes.push("button-secondary");
      break;
    case "warning":
      classes.push("button-warning");
      break;
    case "danger":
      classes.push("button-danger");
      break;
    default:
      break;
  }

  return (
    <button
      className={classes.map((c) => styles[c]).join(" ")}
      type={type}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
