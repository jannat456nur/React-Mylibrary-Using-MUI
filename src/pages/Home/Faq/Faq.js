import {
  Accordion,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import FAQ from '../../../Components/FAQ/FAQ'
import img from '../../../images/undraw_faq_re_31cw.svg'
import './Faq.css'

const Faq = () => {
  return (
    


    <Box sx={{ flexGrow: 1 }}>
        <Typography variant='h4' sx={{mt:5}}>FAQ</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
         <img src={img} alt='' className='faqImage'/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} >
       <Typography  sx={{mt:{sm:5,md:25,lg:25}}}>   <FAQ /></Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Faq
