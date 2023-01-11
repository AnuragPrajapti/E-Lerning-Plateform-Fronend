import { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllUsersData } from '../../../services/authUser/userSlice';
import { useAppSelector } from '../../../services/useTypeSelector';
// import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './usersData.scss'
import Pagination from './pagination';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'ID',
    selector: (row: any) => row._id,
    width: '200px',
    sortable: true
  },
  {
    name: 'Profile_Picture',
    cell: (row: any) => <img src={row.image} width={50} alt={row.name}></img>,
    selector: (row: any) => row.coverimage,
    width: '100px'
  },
  {
    name: 'FullName',
    selector: (row: any) => row.firstName + row.lastName,
    width: '200px',
    sortable: true
  },
  {
    name: 'Email',
    selector: (row: any) => row.email,
    width: '250px',
    sortable: true
  },
  {
    name: 'Age',
    selector: (row: any) => row.age,
    width: '80px',
    sortable: true
  },
  {
    name: 'Contact_Number',
    selector: (row: any) => row.phone,
    width: '150px',
    sortable: true
  },
  {
    name: 'Gender',
    selector: (row: any) => row.gender,
    // width: '100px',
    sortable: true
  },
  {
    name: 'Address',
    selector: (row: any) => row.address,
    // width: '100px',
    sortable: true
  },
  {
    name: 'City',
    selector: (row: any) => row.city,
    // width: '100px',
    sortable: true
  },
  {
    name: 'State',
    selector: (row: any) => row.state,
    sortable: true
    // width: '100px'
  },
  {
    name: 'Pincode',
    selector: (row: any) => row.zip,
    sortable: true
    // width: '100px'
  },
];

const UsersData = () => {

  const dispatch = useDispatch();
  const getAllUsersMessage = useAppSelector(state => state?.authUserReducer?.getUserMessage)
  const allUsersData = useAppSelector(state => state?.authUserReducer?.AllUserData?.details)
  const isLoading: boolean = useAppSelector(state => state?.authUserReducer?.loading)

  useEffect(() => {
    dispatch(getAllUsersData())
    if (getAllUsersMessage) {
      toast.success(getAllUsersMessage, {
        position: 'top-center',
        autoClose: 1500,
      })
    }
  }, [getAllUsersMessage])

  return (
    <Container>
      <Row className='users-details-wrappers' >
        <Col>
          <p>Users Details</p>
          {
            isLoading === true ? <Spinner variant='border' />
              : <DataTable
                columns={columns}
                data={allUsersData}
                pagination
              />
          }
        </Col>
      </Row>
    </Container>
  )
}

export default UsersData;