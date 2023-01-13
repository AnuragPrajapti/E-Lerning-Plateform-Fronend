import { FormEvent, useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useFileUpload } from 'use-file-upload'
import './user_details.scss'
import { useAppDispatch, useAppSelector } from '../../services/useTypeSelector';
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDeleteUserProfile, getUpdateUserProfile, getUserDetails } from '../../services/authUser/userSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IUserForm } from '../../interface/interface';


const validationSchema = yup.object().shape({
  image: yup.string()
    .required('Please_Select_Your_Profile'),

  firstName: yup.string()
    .required('First_Name_Is_Required')
    .min(3, 'First_Name_Must_Be_At_Least_6_Characters')
    .max(12, 'First_Name_Not_Exceed_40_Characters'),

  lastName: yup.string()
    .required('Last_Name_Is_Required')
    .min(3, 'Last_Name_Must_Be_At_Least_6_Characters')
    .max(12, 'Last_Name_Not_Exceed_40_Characters'),

  email: yup.string()
    .required('Email is required')
    .min(6, 'Email must be at least 6 characters')
    .max(40, 'Email not exceed 40 characters')
    .matches(/^([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([\w\-]+)((\.([c|o|m|i|n]){2,3})+)$/, "Email is invalid "),

  password: yup.string()
    .required('Password is required')
    .min(6, 'Password_must_Ee_At_Least_6_Characters')
    .max(40, 'Password_Not_Exceed_40_Characters'),

  cPassword: yup.string()
    .required('Confirm_Password_Is_Required')
    .min(6, 'Confirm_Password_must_Ee_At_Least_6_Characters')
    .max(40, 'Confirm_Password_Not_Exceed_40_Characters'),

  phone: yup.string()
    .required('Phone_Number_Is_Required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"),

  gender: yup.string()
    .required('Gender_Is_Required'),

  age: yup.number()
    .required('Age_Is_Required'),

  address: yup.string()
    .required('Address_Is_Required')
    .min(10, 'Address_Must_Be_At_Least_10_Characters')
    .max(50, 'Address_not_Exceed_50_Characters'),

  city: yup.string()
    .required('City_Is_Required'),

  state: yup.string()
    .required('State_Is_Required'),

  zip: yup.string()
    .required('Pincode_Is_Required')
    .min(6, 'Pincode_Must_Be_At_Least_6_Number')
    .max(6, 'Pincode_Must_Be_At_Least_6_Number')
})

const UserDetails = () => {


  const getSuccessMessage = useAppSelector(state => state?.authUserReducer?.message)

  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(getUserDetails())
  }, [])

  useEffect(() => {
    if (getSuccessMessage) {
      toast.success(getSuccessMessage, {
        position: 'top-center',
        autoClose: 1500,
      })
    }
  }, [getSuccessMessage]);

  const navigate = useNavigate();
  const [file, selectFile] = useFileUpload() as HTMLInputElement | any;
  const image: any = file;
  const { register, formState: { errors }, setValue, handleSubmit } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema)
  });
  const getUserProfileData: any = useAppSelector(state => state?.authUserReducer?.userData);
  const profileData = getUserProfileData?.details;
  const [handleEdit, setHandleEdit] = useState<boolean>(false);
  const UpserUpdateMessage = useAppSelector(state => state?.authUserReducer?.updateMessage)
  const errorMessateByGetUserData = useAppSelector(state => state?.authUserReducer?.errorMessage);
  const isLoading = useAppSelector(state => state?.authUserReducer?.loading)
  const successMesageToUserDelete = useAppSelector(state => state?.authUserReducer?.getUserDeleteMessage);
  const errorMessageToUserDelete = useAppSelector(state => state?.authUserReducer?.getDeleteErrorMsg);

  const handleLogout = () => {
    toast.error('User_Logout_Successfully', {
      position: 'top-center',
      autoClose: 1000,
    })
    setTimeout(() => {
      localStorage.removeItem('usersId');
      navigate('/')
    }, 1500);
  }

  const editUserProfile = (e: FormEvent) => {
    setHandleEdit(true)
  }

  useEffect(() => {
    if (profileData?._id) {
      setValue('firstName', profileData?.firstName)
      setValue('lastName', profileData?.lastName)
      setValue('email', profileData?.email)
      setValue('age', profileData?.age)
      setValue('gender', profileData?.gender)
      setValue('phone', profileData?.phone)
      setValue('address', profileData?.address)
      setValue('city', profileData?.city)
      setValue('state', profileData?.state)
      setValue('zip', profileData?.zip)
    }
  }, [profileData])

  const updateUserProfile = () => {

    const formData = new FormData(document.getElementById('form-data') as HTMLInputElement | any);
    formData.append('image', image.file);
    dispatch(getUpdateUserProfile(formData));
  }

  const deleteUserProfile = () => {
    const id = profileData?._id;
    if (id) {
      dispatch(getDeleteUserProfile(id));
    }
  }

  useEffect(() => {
    if (UpserUpdateMessage) {
      toast.success(UpserUpdateMessage, {
        position: 'top-center',
        autoClose: 1500,
      })
      setTimeout(() => {
        dispatch(getUserDetails())
        setHandleEdit(false);
      }, 1500)
    }
    if (errorMessateByGetUserData) {
      toast.error(errorMessateByGetUserData, {
        position: 'top-center',
        autoClose: 1000,
      })
    }
  }, [UpserUpdateMessage, errorMessateByGetUserData])

  useEffect(() => {
    if (successMesageToUserDelete) {
      toast.success(successMesageToUserDelete, {
        position: 'top-center',
        autoClose: 1500,
      })
      setTimeout(() => {
        navigate('/signup');
      }, 2000)
    }

    if (errorMessageToUserDelete) {
      toast.error(errorMessageToUserDelete, {
        position: 'top-center',
        autoClose: 1500,
      })
    }
  }, [successMesageToUserDelete, errorMessageToUserDelete])

  return (
    <div className='user-datails' >
      <Container>
        <p>User Profile Details...</p>
        <div className='logut-btn' >
          <Button className='btn btn-link' onClick={handleLogout} ><BiLogOut id='icon' />LogOut</Button>
        </div>
        {
          handleEdit === true ?
            <Form className='user-profile-form' id='form-data'>
              {isLoading ? <Spinner animation="border" variant="primary" /> : <div>
                <Row>
                  <Col>
                    <div className='user-profile-picture'>
                      <img id='userProfile' aria-required src={image?.source || profileData?.image} alt="" onClick={() => selectFile()} />
                    </div>
                  </Col>
                  <Col>
                    <div className='profile-name' >
                      <input
                        type="text"
                        placeholder="First Name"
                        {...register("firstName", {
                          required: true,
                        })}
                      />
                      <span style={{ color: "red" }}>{errors?.firstName?.message}</span>
                      <input
                        placeholder="Last Name"
                        type="text"
                        {...register("lastName", {
                          required: true,
                        })}
                      />
                      <span style={{ color: "red" }}>{errors?.lastName?.message}</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className='inputs' >


                      <input
                        placeholder="Email"
                        type="text"
                        {...register("email", {
                          required: true,
                        })}
                      //   disabled
                      />
                      <span style={{ color: "red" }}>{errors?.email?.message}</span>
                      <input
                        placeholder="Age"
                        type="text"
                        {...register("age", {
                          required: true,
                        })}
                      />
                      <span style={{ color: "red" }}>{errors?.age?.message}</span>
                      <input
                        placeholder="Address"
                        type="text"
                        {...register("address", {
                          required: true,
                        })}
                      />
                      <span style={{ color: "red" }}>{errors?.address?.message}</span>
                      <input
                        placeholder="State"
                        type="text"
                        {...register("state", {
                          required: true,
                        })}
                      />
                      <span style={{ color: "red" }}>{errors?.state?.message}</span>
                    </div>

                  </Col>
                  <Col>
                    <div className='handle-input-button'>
                      {/* <input
                      placeholder='Gender'
                      type="text"
                      {...register("gender", {
                        required: true,
                      })}
                    /> */}
                      <Form.Select
                        required
                        aria-label="Default select example"
                        className="select_Option"
                        style={{ backgroundColor: 'transparent' }}
                        {...register("gender", {
                          required: true,
                        })}
                      >
                        <option>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Form.Select>
                      <span style={{ color: "red" }}>{errors?.gender?.message}</span>
                      <input
                        placeholder='Number'
                        type="number"
                        {...register("phone", {
                          required: true,
                        })}
                      />
                      <span style={{ color: "red" }}>{errors?.phone?.message}</span>
                      <input
                        placeholder='City'
                        type="text"
                        {...register("city", {
                          required: true,
                        })}
                      />
                      <span style={{ color: "red" }}>{errors?.city?.message}</span>
                      <input
                        type="number"
                        placeholder='PinCode'
                        {...register("zip", {
                          required: true,
                        })}
                      />
                      <span style={{ color: "red" }}>{errors?.lastName?.message}</span>
                      <Button className='btn btn-success' onClick={updateUserProfile} >Update</Button>
                      <Button className='btn btn-danger' onClick={deleteUserProfile} >Delete_Profile</Button>
                    </div>
                  </Col>
                </Row>
              </div>}

            </Form> :
            <div className='user-details-show-only' >
              <Row>
                <Col>
                  <img src={profileData?.image} alt="user-picture" />
                  <Button onClick={(e) => editUserProfile(e)} >Edit_User_Profile</Button>
                </Col>
                <Col>
                  <ul>
                    <li><span>User_Id :</span>{profileData?._id}</li>
                    <li><span>Full_Name :</span> {profileData?.firstName} {profileData?.lastName}</li>
                    <li><span>Email :</span>{profileData?.email}  </li>
                    <li><span>Age :</span>{profileData?.age}</li>
                    <li><span>Gender :</span>{profileData?.gender}</li>
                    <li><span>Phone : </span> {profileData?.phone}</li>
                    <li><span>Address :</span>{profileData?.address}</li>
                    <li><span>City :</span>{profileData?.city}</li>
                    <li><span>State :</span>{profileData?.state}</li>
                    <li><span>Pincode :</span>{profileData?.zip}</li>

                  </ul>
                </Col>
              </Row>
            </div>
        }
      </Container>
    </div>
  )
}

export default UserDetails;