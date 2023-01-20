import { useEffect } from 'react'
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllUsersData } from '../../../services/authUser/userSlice';
import { useAppSelector } from '../../../services/useTypeSelector';
import './usersData.scss'
import DataTable from 'react-data-table-component';
import { BiBlock } from "react-icons/bi";
import { CgUnblock } from "react-icons/cg";

const columns = (clickHandler: any) => ([
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
    name: 'Block',
    cell: (row: any) => <BiBlock onClick={() => clickHandler(row._id)}
      style={{ fontSize: "24px", color: "red", alignItems: "center" }} />,
    width: '100px',
  },
  {
    name: 'UnBlock',
    cell: (row: any) => <CgUnblock onClick={() => clickHandler(row._id)}
      style={{ fontSize: "24px", color: "green", alignItems: "center" }} />,
    width: '100px',
  },
  // {
  //   name: 'Address',
  //   selector: (row: any) => row.address,
  //   // width: '100px',
  //   sortable: true
  // },
  // {
  //   name: 'City',
  //   selector: (row: any) => row.city,
  //   // width: '100px',
  //   sortable: true
  // },
  // {
  //   name: 'State',
  //   selector: (row: any) => row.state,
  //   sortable: true
  //   // width: '100px'
  // },
  // {
  //   name: 'Pincode',
  //   selector: (row: any) => row.zip,
  //   sortable: true
  //   // width: '100px'
  // },
]);

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

  const handleClick = (id: any) => {
    console.log(111, id);
  }

  return (
    <Container>
      <Row className='users-details-wrappers' >
        <Col>
          <p>Users Details</p>
          {
            isLoading === true ? <Spinner variant='border' />
              : <DataTable
                columns={columns(handleClick)}
                data={allUsersData}
                pagination
                selectableRows
              />
          }
        </Col>
      </Row>
    </Container>
  )
}

export default UsersData;