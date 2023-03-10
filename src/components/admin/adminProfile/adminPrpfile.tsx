import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../services/useTypeSelector'
import { getAdminData, getUpdateAdminProfile } from '../../../services/authAdmin/adminSlice';
import './adminProfile.scss'
import { Col, Container, Row, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { FaEdit } from "react-icons/fa";

const AdminProfile = () => {
  const dispatch = useAppDispatch();
  const adminInfo = useAppSelector(state => state?.authAdminReducer?.adminData?.data)
  const { setValue, register, handleSubmit, formState: { errors }, } = useForm() as HTMLInputElement | any;
  const updateAdminProfileMessage = useAppSelector(state => state?.authAdminReducer?.updateProfileData)
  const getAdminMessage = useAppSelector(state => state?.authAdminReducer?.getAdminMessage)
  const getErrorAdminMessage = useAppSelector(state => state?.authAdminReducer?.getErrorAdminMessage)
  const [isLoading, setIsLoading] = useState(false);
  const [editProfile, setEditProfile] = useState<boolean>(false);

  const editProfileIcon = () => setEditProfile(true);

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
  }, [getAdminMessage, getErrorAdminMessage])

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

  const onSubmit = (data: any) => {
    const id = adminInfo?._id;
    const formData: any = new FormData(document.getElementById('formData') as HTMLInputElement | any);
    // const formData = new FormData()
    // formData.append('image', data?.image[0]);
    // formData.append('firstName', data?.firstName);
    // formData.append('lastName', data?.lastName);
    // formData.append('email', data?.email);
    // formData.append('phone', data?.phone);
    // formData.append('age', data?.age);
    // formData.append('gender', data?.gender);
    // formData.append('zip', data?.zip);
    // formData.append('address', data?.address);
    // formData.append('city', data?.city);
    // formData.append('state', data?.state);
    const updateProfile = { id, formData }
    dispatch(getUpdateAdminProfile(updateProfile))
    setEditProfile(false)
  }

  useEffect(() => {
    if (updateAdminProfileMessage) {
      toast.success(updateAdminProfileMessage, {
        position: 'top-center',
        autoClose: 1500,
      })
    }
  }, [updateAdminProfileMessage])


  return (
    <div className='wrapper'>
      <Container>
        <Row>
          <Col lg={12} className="header-section" >
            <h3>Admin Profile!</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='content-area' >
              <h3>Welcome to the E-Learning-Platform</h3>
              <h4>Lets start for make a new world!</h4>

              <h5>Understanding You</h5>
              <p>
                You are a person who has built considerable knowledge and
                abilities. You want to be able to use these strengths and skills
                in a job so you can be challenged and more engaged. Sadly, you
                keep ending up doing work that you hate because your resume
                doesn???t reflect all that you can or want to do. We help you find
                work you consider more rewarding with our unique candidate
                discovery and coaching process ??? it{" "}
                <strong>supports you every step of the way.</strong>{" "}
              </p>
              <p>
                "I'm grateful that I crossed paths with Dona. It was at a
                pivotal time in my life where I felt I had plateaued. She
                brought out the courage I needed to switch careers and taught me
                a different approach in regards to career planning--ultimately
                setting the foundation to build a life I love. With her advice,
                I landed a job that utilized my natural strengths where I
                experienced 'flow,' so I still have energy after work to do
                projects I love.???
              </p>
            </div>
          </Col>
          <Col>
            <Container>
              <Row>
                <div className='admin-details' >
                  <Form onSubmit={handleSubmit(onSubmit)} id='formData' >
                    <Row className='profileRow'>
                      <Col>
                        <div className='profile'>
                          {
                            editProfile === true ?
                            <input
                            type="file"
                            name="image"
                            {...register("image", {
                              required: true,
                            })}
                            required
                          /> 
                             : <img id='userProfile'
                              src={adminInfo?.image} alt=""
                            />
                          }
                          <FaEdit className='profile-edit-icon' onClick={editProfileIcon} />
                        </div>
                      </Col>
                    </Row>
                    <div className='field-area'>
                      <Row>
                        <Col lg={6} >
                          <input
                            className="form-control"
                            type="text"
                            placeholder="First Name"
                            {...register("firstName", {
                              required: true,
                            })}
                          />
                        </Col>
                        <Col lg={6}>
                          <input
                            className="form-control"
                            placeholder="Last Name"
                            type="text"
                            {...register("lastName", {
                              required: true,
                            })}
                            required
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} >
                          <input
                            className="form-control"
                            placeholder="Email"
                            type="text"
                            {...register("email", {
                              required: true,
                            })}
                            disabled
                          />
                        </Col>
                        <Col lg={6}>
                          <input
                            className="form-control"
                            placeholder='Number'
                            type="number"
                            {...register("phone", {
                              required: true,
                            })}
                            required
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} >
                          <input
                            className="form-control"
                            placeholder='Age'
                            type="text"
                            {...register("age", {
                              required: true,
                            })}
                            required
                          />
                        </Col>
                        <Col lg={6} >
                          <input
                            className="form-control"
                            placeholder='Gender'
                            type="text"
                            {...register("gender", {
                              required: true,
                            })}
                            required
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} >
                          <input
                            className="form-control"
                            placeholder="Address"
                            type="text"
                            {...register("address", {
                              required: true,
                            })}
                            required
                          />
                        </Col>
                        <Col lg={6} >
                          <input
                            className="form-control"
                            placeholder='City'
                            type="text"
                            {...register("city", {
                              required: true,
                            })}
                            required
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} >
                          <input
                            className="form-control"
                            placeholder="State"
                            type="text"
                            {...register("state", {
                              required: true,
                            })}
                            required
                          />

                        </Col>
                        <Col lg={6} >
                          <input
                            className="form-control"
                            type="number"
                            placeholder='PinCode'
                            {...register("zip", {
                              required: true,
                            })}
                            required
                          />
                        </Col>
                      </Row>
                    </div>
                    <Row>
                    </Row>
                    <Row>
                      <Col  >
                        <div className='justify-content-center d-flex' >
                          <button className='button'>Update</button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdminProfile 