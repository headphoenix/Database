import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  login: "login",
  enter: "enter",
};

const Button = ({ children, buttonType, ...inputOptions }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...inputOptions}
    >
      {children}
    </button>
  );
};

export default Button;