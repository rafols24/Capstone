import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from '@material-ui/core'
import './style.css'
import usc1 from '../Images/usc1.png'
import americanlogo from '../Images/use-philippines-seal.png'

const useStyles = makeStyles((theme) => {

})

const Header = () => {
    
    return (
        <div>
        <div className='Navbarwrapper'>
        
                    <img className='Americanlogo' src={americanlogo} alt="Logo" /> 
        
                    <img className='logo' src={usc1} alt="Logo" /> 
  
                    <p className='headerText'>Bernard Bonks Library -  American Corner </p>
                
                    <p className='headerText2'>2nd Floor Arthur Dingman Building, USC Main Campus, P.del Rosario St., Cebu City</p>
                   

          
        </div>
        </div>
    )
}


export default Header
