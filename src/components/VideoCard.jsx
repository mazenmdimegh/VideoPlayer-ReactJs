import React from 'react'
import { IoIosMusicalNote } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { formatDate, secondsToMinutes } from '../helpers/helpers';
import { getById } from '../services/ApiServices';

const VideoCard = (props) => {
    const { video } = props
    const navigate = useNavigate();

    
    function handleClick (){
        getById(video.uri.split("/")[2])
        navigate('/player?id='+video.uri.split("/")[2])
    }
    return (
        <div class="card m-4 border-0 pe-default" style={{ width: 18 + "rem" }} onClick={handleClick} >
            <img class="card-img-top rounded" src={video.pictures.base_link} alt="Card image cap" style={{ height: 10 + "rem" }} />
            <div class="card-body d-flex">
                <div>
                    <img class="card-img-top rounded-circle" src={video.pictures.base_link} alt="Card image cap" style={{ height: 2 + "rem", width: 2 + "rem", marginRight: 1 + "rem" }} />
                </div>
                <div>
                    {video.name.length >= 18 && <h5 class="card-title">{video.name.slice(0, 18)}...</h5>}
                    {video.name.length < 18 && <h5 class="card-title">{video.name}</h5>}
                    <p class="card-text m-0">{video.user.name} <IoIosMusicalNote /></p>
                    <p class="card-text m-0">{secondsToMinutes(video.duration)} </p>
                    <p class="card-text m-0">{formatDate(video.release_time)}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard