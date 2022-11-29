import React, { useState, useEffect } from 'react'
import { posturl } from './Config'

const Register = () => {
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

  const addinpdata = async (e) => {
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
    const res = await fetch(posturl, {
      method: 'POST',
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

    const data = await res.json()
    console.log(data)

    if (res.status === 404 || !data) {
      alert('error')
      console.log('error')
    } else {
      alert('Data Added Successfully')
    }
  }

  return (
    <header>
      <div className='Auth-form-container1'>
        <form className='Auth-form1'>
          <div className='Auth-form-content1'>
            <h3 className='title1'>New Tour Booking</h3>
            <br></br>

            <div className='row'>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Customer Code:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter CustCode'
                  id='ExampleInputName'
                  value={inpval.CustomerCode}
                  onChange={setdata}
                  name='CustomerCode'
                />
              </div>
              1
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Customer Name:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter CustName'
                  id='ExampleInputName'
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
                    onClick={addinpdata}
                    className='btn btn-primary'
                  >
                    SUBMIT
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

export default Register
