import { useEffect, useState } from "react";
import { postCategories } from "../APIRequest/APIRequest";
import { Link, NavLink } from "react-router-dom";


const Layout = ({ children }) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async () => {
            let res = await postCategories()
            setCategories(res)
        })()
    },[])

    return (
        <div>
            <div className="navbar fixed top-0 z-50 shadow-lg bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to="/">হোম</NavLink></li>
                        {
                            categories.map((category, id) => {
                                return <li key={id.toString()}><NavLink to={"/byCatgory/"+category["id"]}>{category['name']}</NavLink></li>
                            })
                        }
                    </ul>
                    </div>

                    <a className="btn btn-ghost normal-case text-xl"><Link to={'/'}>Bloggy</Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">হোম</NavLink></li>
                        {
                            categories.map((category, id) => {
                                return <li key={id.toString()}><NavLink to={"/byCatgory/"+category["id"]}>{category['name']}</NavLink></li>
                            })
                        }
                    </ul>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Layout;