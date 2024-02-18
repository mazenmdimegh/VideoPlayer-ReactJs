import React, { useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { UserLogout, searchVideo } from '../services/ApiServices';
import player from "../assets/imgs/player.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [keyword, setKeyword] = useState()
    const navigate = useNavigate();
  
    function handleChange(event) {
        setKeyword(event.target.value);
      }

    function Search() {
        searchVideo(keyword)
        console.log(keyword);
    }
    function Logout() {
        UserLogout()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <div className='d-flex align-items-center pe-default' onClick={()=>navigate('/')}>
                    <HiOutlineBars3 style={{ fontSize: 25 + "px" }} />
                    <img className="card-img-top " src={player} alt="Player" style={{ height: 2 + "rem", width: 4 + "rem", marginLeft: 1 + "rem" }} />
                    <h3 className='m-0'>Player</h3>
                </div>
                <div className="input-group w-50 rounded-left ">
                    <input type="text" className="form-control rounded-left" placeholder="Search" value={keyword} onChange={(event)=>handleChange(event)} ></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary rounded-right" type="button" onClick={Search}><IoIosSearch style={{ fontSize: 25 + "px" }} /></button>
                    </div>
                </div>
                <div className='pe-default' onClick={Logout}>
                    LogOut <FaCircleUser style={{ fontSize: 35 + "px" }} />
                </div>
            </div>
        </nav>
    )
}

export default Header