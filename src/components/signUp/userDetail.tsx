import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { IRegister } from "../../interface/interface";
import { useState } from "react";
import FormWrapper from "./formWrapperr";
import { Col, Form, Row } from "react-bootstrap";
// import '../signup.scss'

type AccountFormProps = IRegister & {
  updateFields: (fields: Partial<IRegister>) => void;
};

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
  const [confimType, setConfimType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [icon1, setIcon1] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleToggleConfim = () => {
    if (confimType === "password") {
      setIcon1(eye);
      setConfimType("text");
    } else {
      setIcon1(eyeOff);
      setConfimType("password");
    }
  };

  return (
    <FormWrapper title="">
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <input
              type="file"
              name="image"
              required
              onChange={(e) => updateFields({ image: e.target.files })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter_Your_First_Name"
              value={firstName}
              required
              onChange={(e) => updateFields({ firstName: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter_Your_Last_Name"
              required
              value={lastName}
              onChange={(e) => updateFields({ lastName: e.target.value })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="test@gmail.com"
              required
              value={email}
              onChange={(e) => updateFields({ email: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="password_Input ">
            <Form.Group className="mb-3">
              <Form.Control
                required
                type={type}
                placeholder="password"
                value={password}
                onChange={(e) => updateFields({ password: e.target.value })}
              />
              <span className="iconStyle" onClick={handleToggle}>
                <Icon style={{ color: "white" }} icon={icon} size={18} />
              </span>
            </Form.Group>
          </div>
        </Col>
        <Col md={6}>
          <div className="password_Input">
            <Form.Group className="mb-3">
              <Form.Control
                required
                type={confimType}
                placeholder="Confirm_Password"
                value={cPassword}
                onChange={(e) => updateFields({ cPassword: e.target.value })}
              />
              <span className="iconStyle" onClick={handleToggleConfim}>
                <Icon style={{ color: "white" }} icon={icon1} size={18} />
              </span>
            </Form.Group>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              required
              type="number"
              placeholder="Enter_Your_Age"
              value={age}
              onChange={(e) => updateFields({ age: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>
    </FormWrapper>
  );
};

export default AccountForm;
