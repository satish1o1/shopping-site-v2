import "./custom-button.styles.scss";
const BUTTON_TYPE = {
  google: "google-sign-in",
  inverted: "invert",
};

const CustomButton = ({ children, buttonType, ...otherButtonProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE[buttonType]}` } {...otherButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
