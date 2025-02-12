
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm" >
        <div className="navbar-start" >
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl ml-4">L0C41H057</a>
        </div>
        <div style={{ width:'400%'}} className="navbar-start hidden lg:flex" >
            <ul className="menu menu-horizontal px-1">
            <li><a>Code Snippets</a></li>
            <li><a>Upload Snippet</a></li>
            <li><a>Practice</a></li>
            <li><a>Community</a></li>
            {/* <li>
                <details>
                <summary>Theme</summary>
                <ul className="p-2">
                    <li><a>dark</a></li>
                    <li><a>light</a></li>
                </ul>
                </details>
            </li> */}
            </ul>
        </div>



{/* //left side container */}
        <div className="navbar-end">


    {/* //theme button */}

                <div className="dropdown dropdown-end mr-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <button className="btn btn-ghost btn-circle">Theme</button>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                        <li><a className="text-lg">light</a></li>
                        <li><a className="text-lg">dark</a></li>
                    </ul>
                </div>

{/* // notification icon */}
                <div className="dropdown dropdown-end mr-5" >
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                            <span className="badge badge-xs badge-primary indicator-item">3</span>
                            </div>
                        </button>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-72 p-2 shadow">
                        <li>
                        <a className="justify-between text-sm">
                            firedragon just uploaded a snippet
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a className="text-sm">new challange</a></li>
                        {/* <li><a>new challange</a></li> */}
                    </ul>
                </div>


    {/* // profile pic */}
            <div className="dropdown dropdown-end mr-6" >
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            src="https://i.pinimg.com/550x/3b/a2/12/3ba2128f134242817a0b9e189bb0801a.jpg" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-2 shadow">
                    <li>
                    <a className="justify-between text-lg">
                        Profile
                        {/* <span className="badge">New</span> */}
                    </a>
                    </li>
                    <li><a className="text-lg">Settings</a></li>
                    <li><a className="text-lg">Logout</a></li>
                </ul>
            </div>
        </div>



    </div>
  )
}

export default Navbar