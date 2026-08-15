import React, { useState,useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const { token, setToken,userData } = useContext(AppContext)
  const [showDropdown,setShowDropdown]=useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  const navLinkClass = ({ isActive }) =>
    `block py-2 transition-colors ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="w-full border-b border-[#E2E4EA] bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <img
        onClick={()=>navigate('/')}
          src="./src/assets/pulsecare.png"
          alt="logo"
          className="w-44 cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          <li className="ml-4">
            <NavLink to="/" className={navLinkClass}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" className={navLinkClass}>
              ALL DOCTORS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              ABOUT
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink to="/contact" className={navLinkClass}>
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          {token && userData ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img
                className="w-8 rounded-full"
                src={userData.image}
                alt="profile"
              />
              <img
                className="w-2.5"
                src="./src/assets/dropdown_icon.svg"
                alt=""
              />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={()=>navigate('my-appointments')} className="hover:text-black cursor-pointer">
                    My Appointments
                  </p>
                  <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 cursor-pointer"
            >
              Create Account
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t bg-white md:hidden">
          <ul className="flex flex-col px-5 py-4">
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                ALL DOCTORS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </NavLink>
            </li>
            {token && userData ?(
              <div className="relative">
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    className="w-8 rounded-full"
                    src={userData.image}
                    alt="profile"
                  />

                  <img
                    className={`w-2.5 transition-transform duration-300 ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                    src="./src/assets/dropdown_icon.svg"
                    alt=""
                  />
                </div>

                {showDropdown && (
                  <div className="absolute top-14 right-0 z-20 text-base font-medium text-gray-600">
                    <div className="min-w-48 rounded bg-stone-100 flex flex-col gap-4 p-4 shadow-lg">
                      <p onClick={()=>{navigate('my-profile')
                        setShowDropdown(!showDropdown)
                      }} className="cursor-pointer hover:text-black">
                        My Profile
                      </p>
                      <p onClick={()=>{navigate('my-appointments')
                        setShowDropdown(!showDropdown)
                      }} className="cursor-pointer hover:text-black">
                        My Appointments
                      </p>
                      <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="mt-4 rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 cursor-pointer"
              >
                Create Account
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
