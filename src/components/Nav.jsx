import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png'

function Nav() {

    const navLinks = (
        <>           
            <li className="inter-regular text-base"><NavLink className={({ isActive, isPending }) => isActive ? "text-[#632EE3] border-b-1" : isPending ? "pending" : "" } to='/'>Home</NavLink></li>
            <li className="inter-regular text-base"><NavLink className={({ isActive, isPending }) => isActive ? "text-[#632EE3] border-b-1" : isPending ? "pending" : "" } to='/list'>Apps</NavLink></li>
            <li className="inter-regular text-base"><NavLink className={({ isActive, isPending }) => isActive ? "text-[#632EE3] border-b-1" : isPending ? "pending" : "" } to='/installed'>Installation</NavLink></li>
            {/* <li className="inter-regular text-base"><Link to='/'>Home</Link></li> */}
        </>
    )

    return(

        <nav className=" bg-base-100 shadow-sm">
            <div className="navbar w-10/12 mx-auto">
                 {/* mobile devices  */}

                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                    </div>
                    {/* <img src={logo} className="w-10" alt="logo" /> */}
                    <Link to='/' className="btn btn-ghost text-base inter-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><img src={logo} className="w-10" alt="logo" /> HERO IO</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    <Link to='https://github.com/Senpaioka' className="btn bg-green-500 text-white magic-color"><FaGithub className="text-xl" /> Contribute</Link>
                </div>
            </div>
        </nav>
    )
}


export default Nav;