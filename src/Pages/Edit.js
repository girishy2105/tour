import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { puturl, geturl } from './Config'

const Edit = () => {
  const [inpval, setINP] = useState({
    CustomerCode: '',
    CustomerName: '',
    Tourselected: '',
    start: '',
    end: '',
    people: '',
    payment: '',
  })

  const setdata = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      }
    })
  }

  const { id } = useParams('')
  console.log(id)

  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    console.log(data)

    if (res.status === 422 || !data) {
      console.log('error ')
    } else {
      setINP(data)
      console.log('get data')
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  // GETTING EMP CODE FOR DROPDOWN
  const [getuserdata, setUserdata] = useState([])
  console.log(getuserdata)

  const getcustdata = async (e) => {
    const res = await fetch(geturl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    console.log(data)

    if (res.status === 404 || !data) {
      console.log('error')
    } else {
      setUserdata(data)
      console.log('getempdata')
    }
  }

  useEffect(() => {
    getcustdata()
  }, [])

  const updateuser = async (e) => {
    e.preventDefault()

    const {
      CustomerCode,
      CustomerName,
      Tourselected,
      start,
      end,
      people,
      payment,
    } = inpval

    const res2 = await fetch(puturl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CustomerCode,
        CustomerName,
        Tourselected,
        start,
        end,
        people,
        payment,
      }),
    })

    const data2 = await res2.json()
    console.log(data2)

    if (res2.status === 422 || !data2) {
      alert('fill the data')
    } else {
      alert('data updated')
    }
  }

  return (
    <header>
      <div className='Auth-form-container1'>
        <form className='Auth-form1'>
          <div className='Auth-form-content1'>
            <h3 className='Auth-form-title1'>UPDATE USER</h3>

            <div className='row'>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Customer Code:
                </label>
                <select
                  className='form-control'
                  value={inpval.CustomerCode}
                  onChange={setdata}
                  name='CustomerCode'
                >
                  <option selected> Select Customer code</option>
                  {getuserdata.map((element, id) => {
                    return (
                      <>
                        <option> {element.CustomerCode}</option>
                      </>
                    )
                  })}
                </select>
              </div>

              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword' class=' form=label'>
                  Customer Name:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter UserName'
                  id='ExampleInputPassword'
                  value={inpval.CustomerName}
                  onChange={setdata}
                  name='CustomerName'
                />
              </div>

              <div className='row'>
                <div className='mb-3 col-lg-3 col-md-3 col-12'>
                  <label for='ExampleInputPassword1' class=' form=label'>
                    Select Your Tour:
                  </label>
                  <select
                    className='form-control'
                    value={inpval.Tourselected}
                    onChange={setdata}
                    name='Tourselected'
                  >
                    <option selected> Select Tour</option>
                    <option>BALI</option>
                    <option>AUSTRALIA</option>
                    <option>SINGAPORE</option>
                  </select>
                </div>

                <div className='mb-3 col-lg-3 col-md-3 col-12'>
                  <label for='ExampleInputPassword1' class=' form=label'>
                    Date of Start:
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    placeholder='Enter Start Date of Tour'
                    id='ExampleInputstart'
                    value={inpval.start}
                    onChange={setdata}
                    name='start'
                  />
                </div>

                <div className='mb-3 col-lg-3 col-md-3 col-12'>
                  <label for='ExampleInputPassword1' class=' form=label'>
                    Date of End:
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    placeholder='Enter End Date of Tour'
                    id='ExampleInputend'
                    value={inpval.end}
                    onChange={setdata}
                    name='end'
                  />
                </div>

                <div className='mb-3 col-lg-3 col-md-3 col-12'>
                  <label for='ExampleInputPassword1' class=' form=label'>
                    Total Number of People Travelling
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Enter count of people'
                    id='ExampleInputpeople'
                    value={inpval.people}
                    onChange={setdata}
                    name='people'
                  />
                </div>

                <div className='mb-3 col-lg-3 col-md-3 col-12'>
                  <label for='ExampleInputPassword1' class=' form=label'>
                    Mode of Payment:
                  </label>
                  <select
                    className='form-control'
                    value={inpval.payment}
                    onChange={setdata}
                    name='payment'
                  >
                    <option selected> Select Mode of Payment</option>
                    <option>UPI</option>
                    <option>CASH</option>
                    <option>Online Banking</option>
                  </select>
                </div>

                <div className='d-grid gap-2 mt-3'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={updateuser}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Edit
