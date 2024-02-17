import React from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { UserLogout } from '../services/ApiServices';

const Header = () => {
    
    function Logout() {
        UserLogout()
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <HiOutlineBars3 style={{ fontSize: 25 + "px" }} />
                <div class="input-group w-50 rounded-left ">
                    <input type="text" class="form-control rounded-left" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary rounded-right" type="button"><IoIosSearch style={{ fontSize: 25 + "px" }} /></button>
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