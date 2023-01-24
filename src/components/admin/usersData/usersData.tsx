import { useEffect, useState } from 'react'
import { Container, Row, Col, Spinner, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllUsersData, getDeleteUserProfile } from '../../../services/authUser/userSlice';
import { useAppSelector } from '../../../services/useTypeSelector';
import './usersData.scss'
import DataTable from 'react-data-table-component';
import { BiBlock } from "react-icons/bi";
import { CgUnblock } from "react-icons/cg";
import { IRegister } from '../../../interface/interface';
import { AiFillDelete } from "react-icons/ai";


const columns = (clickHandler: any) => ([
  {
    name: 'ID',
    selector: (row: any) => row._id,
    width: '200px',
    sortable: true
  },
  {
    name: 'Profile_Picture',
    cell: (row: any) => <img src={row.image} width={50} style={{ padding: "7px", height: "50px" }} alt={row.name} />,
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
    name: 'Contact_phone',
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
    cell: (row: any) => <BiBlock onClick={() => clickHandler(row?.email)}
      style={{ fontSize: "24px", color: "red", alignItems: "center", marginLeft: "10px" }} />,
    width: '100px',
  },
  {
    name: 'UnBlock',
    cell: (row: any) => <CgUnblock onClick={() => clickHandler(row?.email)}
      style={{ fontSize: "24px", color: "green", alignItems: "center", marginLeft: "15px" }} />,
    width: '100px',
  },
  {
    name: 'Delete-User',
    cell: (row: any) => <AiFillDelete onClick={() => clickHandler(row?._id)}
      style={{ fontSize: "24px", color: "red", alignItems: "center", marginLeft: "25px" }} />,
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
  const getDeleteUserMessage = useAppSelector(state => state?.authUserReducer?.getUserDeleteMessage)
  const [loader, setLoader] = useState(isLoading)
  const [filterData, setFilterData] = useState<IRegister | null>();
  const [inpval, setInpVal] = useState<any>({
    name: "",
    email: "",
    phone: "",
  })
  useEffect(() => {
    dispatch(getAllUsersData())
    if (getAllUsersMessage) {
      toast.success(getAllUsersMessage, {
        position: 'top-center',
        autoClose: 1500,
      })
    }
  }, [getAllUsersMessage])

  const handleClick = (data: any) => {
    dispatch(getDeleteUserProfile(data))
    if (getDeleteUserMessage) {
      toast.success(getDeleteUserMessage, {
        position: 'top-center',
        autoClose: 1500,
      })
    }
    setTimeout(()=>{
      dispatch(getAllUsersData())
    },2000)
  }

  const handelSearch = () => {
    const newDAta = allUsersData.filter((value: IRegister) => {
      return value?.firstName.toLocaleLowerCase() === inpval?.name.toLocaleLowerCase() ||
        value?.email === inpval?.email ||
        value?.phone == inpval?.phone;
    })
    setFilterData(newDAta);
  }

  const handleReset = () => {
    setInpVal({
      name: "",
      email: "",
      phone: "",
    })
    setFilterData(null);
  }

  const handleChange = ({ selectedRows }: IRegister | any) => {
    console.log(selectedRows);
  };

  setTimeout(() => {
    setLoader(false);
  }, 10000)

  return (
    <Container>
      <Row className='users-details-wrappers' >
        <Col>
          <p>Users Details</p>
          <Form >
            <Row className='search-bar-wrapper' >
              <Col className='search-bar' sm={6} lg={6} md={6} >
                <input
                  type="text"
                  className='form-control'
                  placeholder='search_by_name'
                  value={inpval.name}
                  onChange={(e) => setInpVal({ ...inpval, name: e.target.value })}
                />
                <input
                  type="email"
                  className='form-control'
                  placeholder='search_by_email'
                  value={inpval.email}
                  onChange={(e) => setInpVal({ ...inpval, email: e.target.value })}
                />
                <input
                  type="number"
                  className='form-control'
                  value={inpval.phone}
                  placeholder='search_by_phone'
                  onChange={(e) => setInpVal({ ...inpval, phone: e.target.value })}
                />
              </Col>
              <Col className='search-bar-button' sm={6} lg={6} md={6} >
                <Button onClick={() => handelSearch()} >Search</Button>
                <Button onClick={() => handleReset()}  >Reset</Button>
              </Col>
            </Row>
          </Form>
          {
            loader === true ? <Spinner variant='border' />
              : <DataTable
                columns={columns(handleClick)}
                data={filterData ? filterData : allUsersData}
                pagination
                selectableRows
                onSelectedRowsChange={handleChange}
                className="userds-table"
              />
          }
        </Col>
      </Row>
    </Container>
  )
}

export default UsersData;