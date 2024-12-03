import styles from "./Button.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    "blue",
    "yellow",
    "red",
    "gray",
    "green",
    "black",
    "white",
  ]),
  bg: PropTypes.oneOf(["blue", "yellow", "gray", "red", "green"]),
  size: PropTypes.oneOf(["sm", "base", "lg"]),
};

export default function Button({
  children,
  type = "button",
  onClick: clickHandler,
  color = "black",
  bg = "green",
  size = "base",
}) {
  const bgColor = {
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    gray: "bg-gray-500",
    red: "bg-red-500",
    green: "bg-green-500",
  };

  const textColor = {
    black: "text-black",
    white: "text-white",
    blue: "text-blue-500",
    yellow: "text-yellow-500",
    gray: "text-gray-500",
    red: "text-red-500",
    green: "text-green-500",
  };

  const btnSize = {
    sm: "px-2 py-1 text-sm",
    base: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      className={`${bgColor[bg]} ${textColor[color]} ${btnSize[size]} px-4 py-2 text-base m-1 rounded-md`}
      type={type}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
