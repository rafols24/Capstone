import React from 'react'
import './Footer.css'
import Box from '@material-ui/core/Box';
const Footer = () => {
    return (
        <div className="footerWrapper">
            <Box display='flex'>
            <p className='footerText1'> Copyright</p>
            <span className='copyRight' dangerouslySetInnerHTML={{ "__html": "&copy;" }} />  
            <p className='footerText2'> 2021 USC Library System</p>
            </Box> 
   
 </div>
    )
}

export default Footer
