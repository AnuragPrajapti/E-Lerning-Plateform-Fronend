import { FormEvent, useEffect, useState } from "react"
import { useMultistepForm } from "./useMultipleForm"
import { IRegister } from "../../interface/interface"
import AccountForm from "./userDetail"
import { AddressForm } from "./addressFrom"
import './signup.scss'
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import img from '../../assets/signup/signup.jpg';
import { useAppDispatch, useAppSelector } from "../../services/useTypeSelector";
import { getRegisterUser } from "../../services/auth/authSlice";
import { toast } from "react-toastify"

const Signup = () => {
  function updateFields(fields: Partial<IRegister>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const getRegisterSuccessMessage = useAppSelector(state => state?.authReducer?.message);
  const [loader, setLoader] = useState<boolean>(false);
  const [data, setData] = useState<IRegister>({
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
    phone: "",
    gender: "",
    age: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  })
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AccountForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    const list: any = JSON.parse(localStorage.getItem('registerData')!);
    const newData = list ? list : []
    localStorage.setItem('registerData', JSON.stringify([...newData, data]));
    dispatch(getRegisterUser(data));
    setLoader(true);
    setData({
      image: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cPassword: "",
      phone: "",
      gender: "",
      age: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    })
  }

  useEffect(() => {
    if (getRegisterSuccessMessage) {
      toast.success(getRegisterSuccessMessage, {
        position: 'top-center',
      })
      setTimeout(() => {
        navigate('/signin');
      }, 4000)
    }
  }, [getRegisterSuccessMessage])

  //Spinner Functionality
  setTimeout(() => {
    setLoader(false);
  }, 3000);

  return (
    <div className="signup-wrapper">
      <Container>
        <Row className="register">
          <Col className="registerImage">
            <img src={img} alt="img" />
          </Col>
          <Col className="register-form">
            <Form id='form' className='flex flex-col' onSubmit={onSubmit}>
              <h3>Register Here!!</h3>
              {/* {currentStepIndex + 1} / {steps.length} */}
              {step}

              {!isFirstStep && (
                <div className="prev-btn">
                <button type="submit" className='btn' onClick={back}>
                  Back
                </button>
                </div>
              )}
              {
                loader ? <Spinner animation="border" /> : 
                <div className="nxt-btn"><button className='btn'>{isLastStep ? "Register" : "Next"}</button></div>
              }
              <p className='mt-3 quotes'>Alredy Have an Accout ? <span><NavLink to="/signin" > Login...</NavLink></span> </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup;