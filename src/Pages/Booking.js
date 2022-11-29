import React from 'react'
import { geturl } from './Config'
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from 'react-router-dom'
// import { CSVLink } from 'react-csv'
import { useState, useEffect } from 'react'

const Booking = () => {
  const [getuserdata, setUserdata] = useState([])
  console.log('Booking getuserdata - ', getuserdata)

  const getdata = async (e) => {
    const res = await fetch(geturl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log('data - ', data)

    if (res.status === 404 || !data) {
      console.log('error')
    } else {
      setUserdata(data)
      console.log('getdata')
    }
  }
  useEffect(() => {
    getdata()
  }, [])

  let filteredresult
  const handleSearch = (event) => {
    let searchtext = event.target.value
    console.log('handleSearch searchtext', searchtext)
    console.log('handleSearch getuserdata', getuserdata)
    filteredresult = getuserdata.filter((item) =>
      item.Employeename.toLowerCase().includes(searchtext.toLowerCase())
    )
    setUserdata(filteredresult)
    console.log('filteredresult', filteredresult)
  }

  const [getsortdata, setsortdata] = useState([])
  const handleSort = (event) => {
    let sortedData
    let sorted = event.target.value

    sortedData = getuserdata
    console.log('sortedData', getuserdata)
    if (sortedData !== null) {
      sortedData.sort((a, b) => {
        if (a['CustomerCode'].toLowerCase() < b['CustomerCode'].toLowerCase()) {
          return -1
        }
        if (a['CustomerCode'].toLowerCase() > b['CustomerCode'].toLowerCase()) {
          return 1
        }
      })
      setsortdata(sortedData)
      // setUserdata(sortedData)
      console.log('sortedData', sortedData)
    }
  }

  const deleteuser = async (CustomerCode) => {
    const res2 = await fetch(
      `https://zfpid3tm0m.execute-api.us-east-1.amazonaws.com/${CustomerCode}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const data2 = await res2.json()
    console.log('data2', data2)

    if (res2.status === 422 || !data2) {
      console.log('error')
    } else {
      console.log('user deleted')
      getdata()
    }
  }

  return (
    <header>
      <div className='head'>
        <h3>Booking History</h3>
      </div>

      <div className='add'>
        {/* <div className='add_btn mt-2'> */}
        <NavLink to='/register' className='btn btn-primary'>
          BOOK YOUR TOUR
        </NavLink>
        {/* </div> */}
        {/* <input
          id='search'
          type='text'
          placeholder='search by name'
          onChange={handleSearch}
        /> */}
      </div>

      <table
        id='dtOrderExample'
        class='table table-striped table-bordered table-sm'
        cellspacing='0'
        width='100%'
      >
        <thead>
          <tr>
            <th class='th-sm'>Customer Code</th>
            <th class='th-sm'>Customer Name</th>
            <th class='th-sm'>Tour Selected</th>
            <th class='th-sm'>Date of Trip Start</th>
            <th class='th-sm'>Date of Trip End</th>
            <th class='th-sm'>Total People Travelling</th>
            <th class='th-sm'>Mode of Payment</th>
          </tr>
        </thead>
        <tbody>
          {getuserdata.map((element, id) => {
            console.log('inside map', element)
            return (
              <>
                <tr>
                  <th scope='row'>{element.CustomerCode}</th>
                  <td>{element.CustomerName}</td>
                  <td>{element.Tourselected}</td>
                  <td>{element.start}</td>
                  <td>{element.end}</td>
                  <td>{element.people}</td>
                  <td>{element.payment}</td>

                  <td className='d-flex justify-content-between'>
                    {/* <NavLink to={`/details/${element.EmployeeCode}`}>
                      <button className='btn btn-success'>VIEW</button>
                    </NavLink> */}
                    {/* <NavLink to={`/edit/${element.CustomerCode}`}>
                      <button className='btn btn-primary'>EDIT</button>
                    </NavLink> */}

                    {/* <button
                      className='btn btn-danger'
                      onClick={() => deleteuser(element.CustomerCode)}
                    >
                      DELETE
                    </button> */}
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </header>
  )
}

export default Booking
