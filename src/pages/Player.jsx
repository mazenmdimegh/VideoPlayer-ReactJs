import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { formatDate, secondsToMinutes } from '../helpers/helpers';
import { IoIosMusicalNote } from "react-icons/io";
import { getAllVideos, getById } from '../services/ApiServices';
import store from '../hooks/store';

const Player = () => {
  const [details, setDetails] = useState([])
  const [data, setData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    getById(id)
    if(store.getState().videos.length==0){
      getAllVideos()
    }
  }, [])

  const unsubscribe = store.subscribe(() => {
    setDetails(store.getState().selectVideo)
    setData(store.getState().videos)
    console.log(data);
  }
  )

  function handleClick(uri) {
    getById(uri.split("/")[2])
    navigate('/player?id=' + uri.split("/")[2])
  }
  return (
    <div>
      <Header />
      <div className='d-flex'>
        {details && details.length != 0 &&
          <div className='m-5'>
            <iframe width="1024" height="520" src={details["player_embed_url"]} title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            <h2 class="card-title mx-5 my-2">{details.name}</h2>
            <div className='d-flex mx-5'>
              <img class="card-img-top rounded-circle" src={details.pictures.base_link} alt="Card image cap" style={{ height: 2 + "rem", width: 2 + "rem", marginRight: 1 + "rem" }} />
              <h5 class="card-text my-2">{details.user.name} <IoIosMusicalNote /></h5>
            </div>
          </div>

        }
        <div className='my-4'>
          {data && data.length != 0 && data.map((video, key) =>
            <div class="card m-4 border-0 pe-default direction-row d-flex;" onClick={() => handleClick(video.uri)} >
              <img class="card-img-top rounded" src={video.pictures.base_link} alt="Card image cap" style={{ width: 12 + "rem", height: 8 + "rem" }} />
              <div class="card-body">
                {video.name.length >= 18 && <h5 class="card-title">{video.name.slice(0, 18)}...</h5>}
                {video.name.length < 18 && <h5 class="card-title">{video.name}</h5>}
                <p class="card-text m-0">{video.user.name} <IoIosMusicalNote /></p>
                <p class="card-text m-0">{secondsToMinutes(video.duration)} </p>
                <p class="card-text m-0">{formatDate(video.release_time)}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Player