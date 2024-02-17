import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Content from '../components/Content'
import { data } from '../dumpData'
import { getAllVideos } from '../services/ApiServices'

const Home = () => {
    const [data, setData] = useState()

    useEffect(() => {
        setData(getAllVideos())

    }, [])

    return (
        <div>
            <Header />
            <div className='d-flex'>
                <SideBar />
                {data && <Content data={data} />}
            </div>
        </div>
    )
}

export default Home