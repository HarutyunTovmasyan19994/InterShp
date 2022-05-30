import React,{FC} from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './header.css'

const Header:FC =()=>{
    return(
        <Box className='headaer'>
            <Box>
             <Button><Link to='/form'>Form</Link></Button>
            <Button><Link to='/person-informetion'>Table</Link></Button>
            </Box>
           
        </Box>
    )
}

export default Header