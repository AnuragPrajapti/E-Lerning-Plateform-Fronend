import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../services/useTypeSelector'
import { getAdminData, getUpdateAdminProfile } from '../../../services/authAdmin/adminSlice';
import './adminProfile.scss'
import { Col, Container, Row, Form, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useFileUpload } from 'use-file-upload'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [file, selectFile] = useFileUpload() as HTMLInputElement | any;
  const adminInfo = useAppSelector(state => state?.authAdminReducer?.adminData?.data)
  const { setValue, register, handleSubmit, formState: { errors }, } = useForm();
  const image: any = file;
  const updateAdminProfileMessage = useAppSelector(state => state?.authAdminReducer?.updateProfileData)
  const getAdminMessage = useAppSelector(state => state?.authAdminReducer?.getAdminMessage)
  const getErrorAdminMessage = useAppSelector(state => state?.authAdminReducer?.getErrorAdminMessage)
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => { 
    dispatch(getAdminData());
  }, [])

  useEffect(() => {
    if (getAdminMessage) {
      toast.success(getAdminMessage, {
        position: 'top-center',
        autoClose: 1500,
      })
    }
    if (getErrorAdminMessage) {
      toast.error(getErrorAdminMessage, {
        position: 'top-center',
        autoClose: 1500,
      })
    }
  }, [getAdminMessage , getErrorAdminMessage ])

  useEffect(() => {
    if (adminInfo) {
      setValue('firstName', adminInfo?.firstName)
      setValue('lastName', adminInfo?.lastName)
      setValue('email', adminInfo?.email)
      setValue('gender', adminInfo?.gender)
      setValue('phone', adminInfo.phone)
      setValue('city', adminInfo?.city)
      setValue('age', adminInfo?.age)
      setValue('state', adminInfo?.state)
      setValue('address', adminInfo?.address)
      setValue('zip', adminInfo?.zip)
    }
  }, [adminInfo])

  const onsubmit = (data: any) => {
    const id = adminInfo?._id;
    const formData: any = new FormData(document.getElementById('formData') as HTMLInputElement | any);
    formData.append('image', image?.file);
    const updateProfile = { id, formData }
    dispatch(getUpdateAdminProfile(updateProfile))
  }

  useEffect(() => {
    if (updateAdminProfileMessage) {
      toast.success(updateAdminProfileMessage, {
        position: 'top-center',
      })
    }
  }, [updateAdminProfileMessage])

  const handleLogout = () => {
    navigate('/')
    localStorage.removeItem("authToken")
  }

  return (
    <div className='wrapper'>
      <Container>
        <Row>
          <h3>Admin Profile!</h3>
          <button onClick={handleLogout}>Logout</button>
        </Row>
        <Form onSubmit={handleSubmit(onsubmit)} id='formData' >
          <Row className='profileRow'>
            <Col >
              <div className='profile'>
                <img id='userProfile' src={image?.source || adminInfo?.image} alt="" onClick={() => selectFile()} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col >
              <div className='inputs' >
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: true,
                  })}
                />

                <input
                  placeholder="Email"
                  type="text"
                  {...register("email", {
                    required: true,
                  })}
                  required
                  disabled
                />

                <input
                  placeholder="Age"
                  type="text"
                  {...register("age", {
                    required: true,
                  })}
                  required
                />

                <input
                  placeholder="Address"
                  type="text"
                  {...register("address", {
                    required: true,
                  })}
                  required
                />

                <input
                  placeholder="State"
                  type="text"
                  {...register("state", {
                    required: true,
                  })}
                  required
                />

              </div>

            </Col>
            <Col >
              <div className='inputs'>
                <input
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", {
                    required: true,
                  })}
                  required
                />

                <input
                  placeholder='Gender'
                  type="text"
                  {...register("gender", {
                    required: true,
                  })}
                  required
                />
                <input
                  placeholder='Number'
                  type="number"
                  {...register("phone", {
                    required: true,
                  })}
                  required
                />
                <input
                  placeholder='City'
                  type="text"
                  {...register("city", {
                    required: true,
                  })}
                  required
                />

                <input
                  type="number"
                  placeholder='PinCode'
                  {...register("zip", {
                    required: true,
                  })}
                  required
                />
              </div>
            </Col>
          </Row>
          <button className='button' >Update</button>
        </Form>
      </Container>
    </div>
  )
}

export default AdminProfile