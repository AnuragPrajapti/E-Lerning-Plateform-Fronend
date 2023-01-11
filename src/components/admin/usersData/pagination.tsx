import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';


const columns = [
  {
    name: 'ID',
    selector: (row : any) => row.id,
    // width: '100px'
  },
  {
    name: 'Profile_Picture',
    cell:  (row : any) => <img src={row.coverimage} width={50} alt={row.name}></img>,
    selector:  (row : any) => row.coverimage,
    // width: '100px'
  },
  {
    name: 'FullName',
    selector: (row : any) => row.name,
    // width: '200px'
  },
  {
    name: 'Email',
    selector:  (row : any)=> row.detail,
    // width: '500px'
  },
  {
    name: 'Age',
    selector:  (row : any)=> row.latitude,
    // width: '100px'
  },
  {
    name: 'Contact_Number',
    selector:  (row : any) => row.longitude,
    // width: '100px'
  },
  {
    name: 'Action',
    selector:  (row : any) => row.longitude,
    // width: '100px'
  },
];


const Pagination = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);


  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage])

  const fetchData = async (page: any, per_page: any) => {
    fetch(`https://www.mecallapi.com/api/attractions?page=${page}&per_page=${per_page}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          setTotalRows(result.total);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const handlePageChange = (page: any) => {
    fetchData(page, perPage);
  }

  const handlePerRowsChange = async (newPerPage: any) => {
    setPerPage(newPerPage);
  }

  if (error as any) {
    return <div>Error:
       {/* {error.message} */}
       </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <DataTable
          columns={columns}
          data={items}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
        />
      </div>
    );
  }
}

export default Pagination;