import Button from "components/button/button.component";
import FormInput from "components/form-input/form-input.component";
import "./fellowship-data.styles.scss";

const { useState } = require("react");

const defaultFormField = {
  date: "",
  number: "",
};

const FellowshipData = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { date, number } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="data-container">
      <div className="data-box">
        <div className="heading">
          <h2>Add Fellowship Data</h2>
        </div>
        <div className="data-inputField">
          <form onSubmit={submitHandler}>
        <FormInput
        label="Attendance"
        inputOptions={{
          type: "number",
          name: "number",
          required: true,
          onChange: handleChange,
          value: number,
        }}
        />
          <FormInput
          label="Income"
          inputOptions={{
            type: "number",
            name: "money",
            required: true,
            onChange: handleChange,
            value: number,
            step: 0.5
          }}
          />
            <div className="data-group">
              <label className="data-form-input-label" for="name">Date: </label>
              <input
                type="date"
                name="dates"
                value={date}
                onChange={handleChange}
                className="date-input"
              />
            </div>
            <div className="buttons-container">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FellowshipData;
