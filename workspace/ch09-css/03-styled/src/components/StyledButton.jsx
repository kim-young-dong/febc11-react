import PropTypes from "prop-types";
import styled from "styled-components";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  rest: PropTypes.shape({
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["blue", "yellow", "red"]),
    bg: PropTypes.oneOf(["blue", "yellow", "gray", "red"]),
  }),
};

export default function Button({ children, type = "button", ...rest }) {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => props.bg || "#4caf50"}; /* Green background */
  border: none; /* Remove borders */
  color: ${(props) => props.color || "white"}; /* White text */
  padding: 6px 18px; /* Padding */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Display as inline-block */
  font-size: 16px; /* Font size */
  margin: 4px 2px; /* Margin */
  cursor: pointer; /* Cursor pointer */
  border-radius: 6px; /* Border radius */
`;
