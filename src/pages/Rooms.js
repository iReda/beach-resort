import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'
const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms" subtitle="">
                <Link to="/" className="btn-primary">
                    Return to Home Page
                </Link>
            </Banner>
        </Hero>
        <RoomsContainer></RoomsContainer>
        </>
    )
}

export default Rooms
