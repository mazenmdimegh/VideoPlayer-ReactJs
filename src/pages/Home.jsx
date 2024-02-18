import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Content from '../components/Content'
import { getAllVideos } from '../services/ApiServices'
import { connect, useDispatch, useSelector } from 'react-redux'
import { selectData } from '..'
import store from '../hooks/store'
import { Dimmer, Image, Loader, Segment } from 'semantic-ui-react'

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
            <Segment>
            <Header />
            <div className='d-flex'>
                <SideBar />
                {data && <Content data={data} />}
            </div>
                <Dimmer active={loading}>
                    <Loader size='big'>Loading</Loader>
                </Dimmer>

                {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
            </Segment>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.dataReducer,
    }
}
const mapStateToDispatch = (state) => {
    return {
        setData: (data) => {
            // dispatch({
            //   type:"SET_DATA",
            //   payload: data
            // })
        }
    }
};

export default Home