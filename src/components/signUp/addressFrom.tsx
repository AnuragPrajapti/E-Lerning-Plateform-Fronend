import { IRegister } from "../../interface/interface"
import Form from "react-bootstrap/Form";
import FormWrapper from "./formWrapperr";

type AddressFormProps = IRegister & {
  updateFields: (fields: Partial<IRegister>) => void
}

export function AddressForm({
  phone,
  address,
  city,
  state,
  gender,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <Form.Select
        required
        aria-label="Default select example"
        className="select_Option"
        value={gender}
        onChange={e => updateFields({ gender: e.target.value })}
        style={{ backgroundColor : 'transparent' }}
      >
        <option>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Form.Select>

      <input
        required
        type="number"
        placeholder='Enter_Mobile_Number'
        value={phone}
        onChange={e => updateFields({ phone: e.target.value })}
      />

      <input
        required
        type="text"
        placeholder='Enter_Your_Address'
        value={address}
        onChange={e => updateFields({ address: e.target.value })}
      />

      <input
        required
        type="text"
        placeholder='Enter_Your_City'
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      />

      <input
        required
        type="text"
        placeholder='Enter_Your_Sate'
        value={state}
        onChange={e => updateFields({ state: e.target.value })}
      />

      <input
        required
        type="number"
        placeholder='Pincode'
        value={zip}
        onChange={e => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  )
}