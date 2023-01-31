import Button from "components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import { useGetAddMemberQuery } from "../../state/api";
import "./add-member.styles.scss";
import { useState } from "react";



const defaultFormField = {
  email: "",
};
const AddMember = () => {
  const { data } = useGetAddMemberQuery();
  console.log("data", data);
  const [formField, setFormField] = useState(defaultFormField);
  const { email  } = formField;
  const [firstName, setFirstName ] = useState('');
  const [lastName, setLastName ] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="add-member-container">
      <div className="add-member-box">
        <div className="heading">
          <h2>Add Member</h2>
        </div>
        <div className="inputField">
        <form onSubmit={submitHandler}>
          <FormInput
            label="First Name"
            inputOptions={{
              type: "text",
              name: "first-name",
              required: true,
              onChange: (e)=> setFirstName(e.target.value),
              value: firstName,
            }}
          />
          <FormInput
            label="Last Name"
            inputOptions={{
              type: "text",
              name: "text",
              required: true,
              onChange: (e)=> setLastName(e.target.value),
              value: lastName,
            }}
          />
          <FormInput
            label="Email"
            inputOptions={{
              type: "email",
              name: "email",
              required: true,
              onChange: handleChange,
              value: email,
            }}
          />
            <label className="dropdown-label" for="role-name">Choose Role: </label>
            <select name="role-name" className="dropdown-select">
              <option>--select--</option>
              <option>Bacenta Leader</option>
              <option>Pastor</option>
              <option>Shepard</option>
            </select>

          <div className="buttons-container">
            <Button>submit</Button>
          </div>
        </form>
      </div>
      </div>    
    </div>
  );
};

export default AddMember;
