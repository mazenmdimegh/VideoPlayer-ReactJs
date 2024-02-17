import React from 'react'
import VideoCard from './VideoCard';
import { category } from '../dumpData';

const Content = (props) => {
    const { data } = props;
    return (
        <div>
            <div className='d-flex overflow-hidden' style={{width:82+"vw"}}>
                {category.map((cat,key)=>
                <button key={key} type="button" class="btn btn-light text-nowrap m-2 my-3">{cat}</button>
                )}
            </div>

            <div className='d-flex flex-wrap'>
                {data.map((video,key) =>
                    <VideoCard key={key} video={video} />)}
            </div>
        </div>
    )
}

export default Content