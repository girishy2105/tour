import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

const Navbar = () => {
  return (
    <header>
      <div className='navbutton'>
        <a
          class='btn btn-primary'
          data-bs-toggle='offcanvas'
          href='#offcanvasExample'
          role='button'
          aria-controls='offcanvasExample'
        >
          <MenuIcon />
        </a>
      </div>
      <div
        class='offcanvas offcanvas-start'
        tabindex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div class='offcanvas-header'>
          {/* <div className='welcome'>
            <h5> </h5>
          </div> */}
          <button
            type='button'
            class='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>

        <div class='d-grid gap-2 col-6 mx-auto'>
          <a class='btn btn-secondary' href='home' type='button'>
            Back To Home Page
          </a>
          <a class='btn btn-secondary' href='details' type='button'>
            Tour Details
          </a>
          <a class='btn btn-secondary' href='booking' type='button'>
            Booking History
          </a>
        </div>

        <div class='offcanvas-body'>
          <div className='dropdown'>
            <button
              class='btn btn-secondary dropdown-toggle'
              type='button'
              data-bs-toggle='dropdown'
            >
              Contact Us
            </button>
            <ul class='dropdown-menu'>
              <li>
                <a class='dropdown-item' href='#'>
                  Email
                </a>
              </li>
              <li>
                <a class='dropdown-item' href='#'>
                  Phone Number
                </a>
              </li>
              <li>
                <a class='dropdown-item' href='#'>
                  Address
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
