const { default: FormInput } = require("components/form-input/form-input.component");
const { useState } = require("react");

const defaultFormField = {
    date: "",
  };

const FellowshipData = () => {
    const [formField, setFormField] = useState(defaultFormField);
  const { date } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <FormInput
                label="date"
                inputOptions={{
                    type: "date",
                    name: "date",
                    required: true,
                    onChange: handleChange,
                    value: date,
                  }}/>
            </form>
        </div>
    )
}

export default FellowshipData;