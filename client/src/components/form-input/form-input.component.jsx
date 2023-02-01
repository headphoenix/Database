import "./form-input.style.scss";

const INPUT_TYPE_CLASSES = {
    login: "login",
    member: "member",
  };

const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;