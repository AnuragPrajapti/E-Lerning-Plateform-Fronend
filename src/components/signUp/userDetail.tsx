import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { IRegister } from "../../interface/interface";
import { useState } from 'react';
import FormWrapper from "./formWrapperr";
// import '../signup.scss'



type AccountFormProps = IRegister & {
  updateFields: (fields: Partial<IRegister>) => void
}

const AccountForm = ({
  image,
  firstName,
  lastName,
  email,
  password,
  cPassword,
  age,
  updateFields,
}: AccountFormProps) => {


  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };


  return (
    <FormWrapper title="">

      <input
        type="file"
        name="image"
        required
        onChange={e => updateFields({ image : e.target.files })}
      />

      <input
        type="text"
        placeholder='Enter_Your_First_Name'
        value={firstName}
        required
        onChange={e => updateFields({ firstName: e.target.value })}
      />

      <input
        type="text"
        placeholder='Enter_Your_Last_Name'
        required
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />

      <input
        type="email"
        placeholder='test@gmail.com'
        required
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />

      <div className='password_Input '>
        <input
          required
          type={type}
          placeholder='password'
          value={password}
          onChange={e => updateFields({ password: e.target.value })}
        />
        <span onClick={handleToggle} ><Icon  style={{color : "white"}}  icon={icon} size={18} /></span>
      </div>

      <div className='password_Input'>
        <input
          required
          type={type}
          placeholder='Confirm_Password'
          value={cPassword}
          onChange={e => updateFields({ cPassword: e.target.value })}
        />
        <span onClick={handleToggle} ><Icon style={{color : "white"}} icon={icon} size={18} /></span>
      </div>

      <input
        required
        type="number"
        placeholder='Enter_Your_Age'
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />

    </FormWrapper>
  )
}




export default AccountForm;