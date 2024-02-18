import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/ApiServices'

const SideBar = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        setCategories(getCategories())

    }, [])
    return (
        <div className='w-25'>
            <div className="offcanvas-body px-0">
                {categories &&
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start px-5 py-2" id="menu">
                        {categories.map((cat, key) =>
                            <button key={key} type="button" className="btn btn-light text-nowrap text-left  my-1 w-100">{cat}</button>
                        )}
                    </ul>
                }
            </div>
        </div>
    )
}

export default SideBar