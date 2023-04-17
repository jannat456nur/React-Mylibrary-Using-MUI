import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: 'black',
          // backgroundColor: '#201B1B',

          color: '#fff',
          padding: 5,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            {/* discription section */}
            <div>
              <p>MyLibrary</p>

              <p>
                They also provide patron portals, allowing library patrons to
                easily access or reserve library resources.{' '}
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            {/* subscribe section */}
            <div>
              <p>Subcribe to get impportant updates</p>
              <div>
                <form action="#" className="form">
                  <input
                    className="input"
                    type="email"
                    required
                    autoComplete="off"
                    placeholder="Email"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="subscribeButton"
                  />
                </form>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            {/* social links */}

            {/* <div> */}
            <p>Follow me</p>

            <div className="footerIcons">
              <div className="circleDiv">
                <a>
                  <i class="fa-brands insta fa-instagram"></i>
                </a>
              </div>
              <div className="circleDiv">
                <a>
                  <i class="fa-brands fb fa-facebook"></i>
                </a>
              </div>
              <div className="circleDiv">
                <a>
                  <i class="fa-brands linkedin fa-linkedin"></i>
                </a>
              </div>
              <div className="circleDiv">
                <a>
                  <i class="fa-brands youtube fa-youtube"></i>
                </a>
              </div>
            </div>
            {/* </div> */}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            {/* contact section */}
            <div>
              <p>Call me</p>
              <p>+999 999 999</p>
            </div>
          </Grid>
        </Grid>
        <hr className="hr" />
        <p>© copyright 2023</p>
      </Box>
    </div>
  )
}

export default Footer
