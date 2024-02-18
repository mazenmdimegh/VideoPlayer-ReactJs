import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Content from '../components/Content'
import { getAllVideos } from '../services/ApiServices'
import store from '../hooks/store'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const Home = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAllVideos()
    }, [])
    const unsubscribe = store.subscribe(() =>{
        setData(store.getState().videos)
        setLoading(store.getState().loading)
    }
    )

    return (
        <div>
            <Segment className='p-0 min-vh-100'>
            <Header />
            <div className='d-flex'>
                <SideBar />
                {data && <Content data={data} />}
            </div>
                <Dimmer active={loading}>
                    <Loader size='big'>Loading</Loader>
                </Dimmer>
            </Segment>
        </div>
    )
}

export default Home