import { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { options } from './settingData';
import { FaEdit } from "react-icons/fa";
import './settings.scss'
import { useAppSelector } from '../../../services/useTypeSelector';

const Settings = () => {

  const [visibleOptions, setVisibleOptions] = useState(options);
  const adminInfo = useAppSelector(state => state?.authAdminReducer?.adminData?.data)
  const navigate = useNavigate()
  const onChange = (e: any) => {
    e.preventDefault();
    const value = e.target.value

    if (value.trim().length === 0) {
      setVisibleOptions(options);
      return;
    }
    const returnedItem: any = [];

    visibleOptions.forEach((option, index) => {
      const foundOptions = option.values.filter(item => {
        return item.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1 || item.description.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1;
      })

      returnedItem[index] = {
        header: {
          name: option.header.name
        },
        values: foundOptions,
      }

      if (option.header.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1) {
        returnedItem[index] = {
          header: {
            name: option.header.name
          },
          values: options[index].values,
        }
      }
    })
    setVisibleOptions(returnedItem)
  }

  return (
    <div className='setting-wrapper' >
      <Container>
        <Row>
          <Col>
            <div className='setting-header' >
              <h1>
                <span>
                  <NavLink to='/admin_index'>
                    <Button className='btn btn-secondary'>
                      Black
                    </Button>
                  </NavLink>{" "}{" "}
                  Settings
                </span>
              </h1>
              <input type="search"
                placeholder='Serach Here'
                className='form-control mt-5'
                style={{ width: "100%" }}
                onChange={onChange}
              />
              <p>Go To Home Page <Link to="/">{" "} Home</Link></p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className='middle-section' >
              <ul className='list-group'>
                <li className='list-group-item' >
                  <p>{adminInfo?.firstName}{" "}{adminInfo?.lastName}</p>
                  <p>{adminInfo?.email}</p>
                  <span><FaEdit onClick={()=> navigate('/admin_index/admin-profile')} /></span>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
          <div className='middle-section' >
              <ul className='list-group'>
                <li className='list-group-item' >
                  <p>Phone : {adminInfo?.phone}</p>
                  <p>{adminInfo?.address}</p>
                  <p>{adminInfo?.city}</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
{/* 
        <div>
          {
            visibleOptions.map(option =>
              <div key={option.header.name} className="mt-5 mt-2">
                <h3>{option.header.name}</h3>
                <div>
                  {option.values.map((value) => (
                    <div key={value.name}>
                      <ul className='list-group'>
                        <li className='list-group-item mb-2 ' >
                          <h6 className='font-weight-bold' >{value.name}</h6>
                          <p>{value.description}</p>
                        </li>
                      </ul>
                    </div>))}
                </div>
              </div>)
          }
        </div> */}
      </Container>
    </div>
  )
}

export default Settings;