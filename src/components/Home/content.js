import React from 'react'
import usc1 from '../Images/usc1.png'
import americanlogo from '../Images/use-philippines-seal.png'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './home.css'
import Item from './items'
import Carousel from "react-elastic-carousel"

const breakpoints = [

    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

const content = () => {
    return (
        <div>

            <Box display='flex' className='content'>
                <img className='Americanlogo' src={americanlogo} alt="Logo" />
                <img className='logo' src={usc1} alt="Logo" />
                <h1 className="americanSpacesText">American Spaces</h1>

            </Box>
            <div className="itemsWrapper">

                <div className='aboutBackground'>
                <div className="carouselContainer">
                    <Carousel breakPoints={breakpoints}>
                        <Item><img className="carouselImg"src='https://bit.ly/3jaPh5g'/></Item>
                        <Item><img className="carouselImg"src='https://bit.ly/3jaPh5g'/></Item>
                        <Item><img className="carouselImg"src='https://bit.ly/3jaPh5g'/></Item>
                        <Item><img className="carouselImg"src='https://bit.ly/3jaPh5g'/></Item>
                        <Item><img className="carouselImg"src='https://bit.ly/3jaPh5g'/></Item>
                        <Item><img className="carouselImg"src='https://bit.ly/3jaPh5g'/></Item>
                        <Item><img className="carouselImg"src='https://bit.ly/3jaPh5g'/></Item>
                        <Item><img className="carouselImg"src='https://bit.ly/3jaPh5g'/></Item>
                    </Carousel>
                </div>
                    <p className='aboutText'>About</p>
                    <hr className='Border' />
                    <p className='libraryDescription'>The American Corner (AC) in the University Of San Carlos(USC) is
                    the first of its kind in Cebu and the fourteenth in the entire Philippines. The American Corner is a joint partnership
                    project of the USC and the US Embassy. AC aims to promote cooperation and understanding between the U.S and the Philippines
                    by providing free access to the local community its current and factual information about the United States, its peoples
                    and its policies. Information is provided in a variety of formats which include books, journal, magazines and multimedia resources
                    including digital video conferencing facility.
                 </p>
                    <Link ><p className='Link'>Go to American Corner</p></Link>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default content
