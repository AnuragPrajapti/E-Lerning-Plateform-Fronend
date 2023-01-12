import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import "./signin.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../services/useTypeSelector";
import { getAdminProfile, getLoginAdmin } from "../../services/authAdmin/adminSlice";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import login_From_Image from '../../assets/signin/login_Form_Image.jpg'
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from "react-router-dom";
import { ILoginForm } from "../../interface/interface";
import { toast } from 'react-toastify';
import { getLoginUser } from "../../services/authUser/userSlice";

const validationSchema = yup.object().shape({
  email: yup.string()
    .required('Email is required')
    .min(6, 'Email must be at least 6 characters')
    .max(40, 'Email not exceed 40 characters')
    .matches(/^([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([\w\-]+)((\.([c|o|m|i|n]){2,3})+)$/, "Email is invalid "),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password not exceed 40 characters')
});

const Signin = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors }, } = useForm<ILoginForm>({
    resolver: yupResolver(validationSchema)
  });
  const [loader, setLoader] = useState<any>(false);

  useEffect(() => {
    dispatch(getAdminProfile())
  }, [])

  const getDataByAdmin: any = useAppSelector(state => state?.authAdminReducer?.getAdminProfileData);
  const adminEmail = getDataByAdmin?.email ? getDataByAdmin?.email[0] : '';

  const onSubmit = (data: any) => {
    if (adminEmail === data.email) {
      dispatch(getLoginAdmin(data))
      setLoader(true);
      reset()
    } else if (data?.email !== '') {
      dispatch(getLoginUser(data))
      setLoader(true);
      reset()
    } else {
      alert('user not found please register now')
      navigate('/signup')
    }
  };

  const successMessageAdminLogin = useAppSelector(state => state?.authAdminReducer?.adminLogin?.success);
  const successMessageUserLogin = useAppSelector(state => state?.authUserReducer?.message);

  useEffect(() => {
    if (successMessageAdminLogin) {
      toast.success(successMessageAdminLogin, {
        position: 'top-center',
        autoClose: 1500,
      })
      setTimeout(() => { navigate('/admin_index') }, 2000)
    }
  }, [successMessageAdminLogin])

  useEffect(() => {
    if (successMessageUserLogin) {
      toast.success(successMessageUserLogin, {
        position: 'top-center',
        autoClose: 1500,
      })
      setTimeout(() => { navigate('/user_details') }, 2000)
    }
  }, [successMessageUserLogin])


  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = (e: any) => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  setTimeout(() => {
    setLoader(false);
  }, 3000);

  return (
    <div className="loginWrapper">
      <div className="loginAppText">
        login Application
      </div>
      <Container>
        <Row className="loginForm" >
          <Col lg={6}>
            <div className="formWrapper" >
              <form
                id="form"
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h2>Login Here!!</h2>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="test@gmail.com"
                />
                <p style={{ color: "red" }}>{errors?.email?.message}</p>

                <div className="password_Input_Field">
                  <input
                    type={type}
                    {...register("password", { required: true, maxLength: 8 })}
                    placeholder="Password"
                  />
                  <span onClick={handleToggle}>
                    <Icon className="icon_eys" icon={icon} size={18} />
                  </span>
                  <p style={{ color: "red" }}>{errors?.password?.message}</p>
                </div>

                {loader ? (
                  <Spinner animation="border" />
                ) : (
                  <button className="btn">Login</button>
                )}
                <p className='mt-3'>Don't Have an Accout?{"  "}<span><NavLink to="/signup" >Register Now</NavLink></span> </p>
                <p>Back to home page ?{"  "}<span><NavLink to="/" >Home Page</NavLink></span></p>
              </form>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex align-content-between flex-column align-items-end position-relative">
              <div className="bannerImageWrapper">
                {/* <img src={login_From_Image} /> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;