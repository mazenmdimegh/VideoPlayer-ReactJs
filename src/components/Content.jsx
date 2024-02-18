import React, { useEffect } from 'react'
import VideoCard from './VideoCard';
import { category } from '../dumpData';

const Content = (props) => {
    const { data } = props;

    return (
        <div className='w-75'>
            <div className='d-flex overflow-hidden' style={{ width: 75 + "vw" }}>
                {category.map((cat, key) =>
                    <button key={key} type="button" className="btn btn-light text-nowrap m-2 my-3">{cat}</button>
                )}
            </div>

            <div className='d-flex flex-wrap'>
                {data && data.map((video, key) =>
                    <VideoCard key={key} video={video} />)}
            </div>
        </div>
    )
}

export default Content