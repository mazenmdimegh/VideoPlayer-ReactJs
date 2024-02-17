import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Content from '../components/Content'
import { data } from '../dumpData'

const Home = () => {

    return (
        <div>
            <Header />
            <div className='d-flex'>
                <SideBar />
                <Content data={data} />
            </div>
        </div>
    )
}

export default Home