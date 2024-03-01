import React from 'react'
import NavBar from '../NavBar/NavBar'
import { action,originals,trending,HorrorMovies,RomanceMovies } from '../../Urls'
import Banner from '../Banner/Banner'
import RowPost from '../RowPost/RowPost'


function Home() {
  return (
    <>
    <NavBar />
    <Banner url={trending}/>
    <RowPost url={originals} title="Netflix Originals"/>
    <RowPost url={action} title="Action"/>
    <RowPost url={HorrorMovies} title="Horror"/>
    <RowPost url={RomanceMovies} title="Romance"/>
    </>
  )
}

export default Home