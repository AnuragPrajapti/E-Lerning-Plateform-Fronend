import { Col, Container, Row, Modal } from 'react-bootstrap';
import "./style.scss"
import { CiSettings } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { BiKey } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';


const AdminProfileMidal = ({ show, handleClose, adminInfo }: any) => {

  const navigate = useNavigate()

  const handleClickIcon = (e: string) => {
    if (e === "add") {
      navigate('/signup')
    } else if (e === "logout") {
      localStorage.removeItem("authToken");
      navigate("/")
    } else {
      return null;
    }
  }

  return (
    <>
      <Modal size="sm" show={show} onHide={handleClose}>
        <div className='admin-profile-wrapper' >
          <Container>
            <Row className='header-section' >
              <Col lg={12} sm={12} md={12} sx={12} className='justify-content-center d-flex' >
                <img src={adminInfo?.image} alt="admin-image-logo" />
              </Col>
              <Col lg={12} sm={12} md={12} sx={12} >
                <p>{adminInfo?.firstName}{" "}{adminInfo?.lastName}</p>
                <span>{adminInfo?.email}</span>
              </Col>
              <Col lg={12} sm={12} md={12} sx={12} className='justify-content-center d-flex'>
                <BiKey className='react-icons' />
                <MdOutlinePayment className='react-icons' />
                <a href="https://www.google.com/maps" target="_blank" style={{ display: 'contents', color: 'black' }}  >
                  <GoLocation className='react-icons' />
                </a>
              </Col>
            </Row>

            <Row className='middle-section' >
              <Col>
                <p onClick={() => {
                  navigate('/admin_index/settings')
                  handleClose()
                }}>
                  <CiSettings className='icon-logo' /> {"   "} Manage your settings
                </p>
                <p>

                  <FcGoogle className='icon-logo' /> {" "} Manage your google account
                </p>
              </Col>
            </Row>
          </Container>
          <div className='footer-section'>
            <Container>
              <Row>
                <Col>
                  <p>Other Profile <span><CgProfile className='other-profile-icon' /></span></p>
                  <p onClick={(e: any) => handleClickIcon(e.target.id)} id="add" >
                    <AiOutlinePlus className='icon-logo' />{" "} Add
                  </p>
                  <p onClick={(e: any) => handleClickIcon(e.target.id)} id="logout">
                    <BiLogOut className='logout-icon' />{" "} Logout
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

      </Modal>
    </>
  );
}

export default AdminProfileMidal;