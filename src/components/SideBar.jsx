import React, { useEffect, useState } from 'react'
import { getItems } from '../services/ApiServices'
import { GoHomeFill } from "react-icons/go";
import { CgSmartHomeHeat } from "react-icons/cg";
import { MdSubscriptions, MdOutlineHistory } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { RiPlayList2Line } from "react-icons/ri";
import { GoVideo, GoClock } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";

const SideBar = () => {
    const [items, setItems] = useState()

    useEffect(() => {
        setItems(getItems())

    }, [])
    return (
        <div className='w-25'>
            <div className="offcanvas-body px-0">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start px-5 py-2" id="menu">
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><GoHomeFill className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />Home</button>
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><CgSmartHomeHeat className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />Shorts</button>
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><MdSubscriptions className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />subscriptions</button>
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><LuUserSquare2 className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />Your channel</button>
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><MdOutlineHistory className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />History</button>
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><RiPlayList2Line className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />PLaylists</button>
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><GoVideo className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />Your videos</button>
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><GoClock className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />To watch later</button>
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><AiOutlineLike  className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />Like Videos</button>
                    <button type="button" className="btn btn-light text-nowrap text-left  my-2 w-100"><RiPlayList2Line className='mx-3 mb-2' style={{ fontSize: 24 + "px" }} />Type Beats</button>
                </ul>
            </div>
        </div>
    )
}

export default SideBar