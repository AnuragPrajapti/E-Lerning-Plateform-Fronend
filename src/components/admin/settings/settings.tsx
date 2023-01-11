import { useState } from 'react'
import { Container , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { options } from './settingData';

const Settings = () => {
 
  const [visibleOptions, setVisibleOptions] = useState(options);
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
      <Container>
        <h1>
          <span>
            <NavLink to='/admin_index'>
              <Button className='btn btn-secondary'>
                <span>&lt;</span> Black
              </Button></NavLink>
            Settings
          </span>
        </h1>
        <input type="search"
          placeholder='Serach Here'
          className='form-control mt-5'
          style={{ width: "100%" }}
          onChange={onChange}
        />
        <br />
        <p style={{ float: "right" }}>Go To Home Page <Link to="/">Home</Link></p>
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
        </div>
      </Container>
  )
}

export default Settings;