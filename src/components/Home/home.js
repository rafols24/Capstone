import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Content from './content'
import Container from '@material-ui/core/Container';

const home = () => {
    return (
        <div>
            <Header />
           <Navbar/>
           <Content/>
           
        </div>
    )
}

export default home
