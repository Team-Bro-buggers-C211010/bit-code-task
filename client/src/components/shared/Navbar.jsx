import { Link, NavLink } from "react-router-dom";
import { FaMap, FaPlus, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../../features/Auth/authThunk";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const isAdmin = true;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    setIsOpen(false);
  }

  const navLinks = <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-yellow-500 font-semibold flex items-center gap-1"
          : "text-slate-900 hover:text-yellow-400 flex items-center gap-1"
      }
    >
      <FaMap />
      Roadmaps
    </NavLink>

    {isAdmin && (
      <NavLink
        to="/create-roadmap"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 font-semibold flex items-center gap-1"
            : "text-slate-900 hover:text-yellow-400 flex items-center gap-1"
        }
      >
        <FaPlus />
        Create
      </NavLink>
    )}

    {!isAuthenticated ? (
      <>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-semibold flex items-center gap-1"
              : "text-slate-900 hover:text-yellow-400 flex items-center gap-1"
          }
        >
          <FaSignInAlt />
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-semibold flex items-center gap-1"
              : "text-slate-900 hover:text-yellow-400 flex items-center gap-1"
          }
        >
          <FaUserPlus />
          Register
        </NavLink>
      </>
    ) : <button
      type="button"
      onClick={handleLogout}
      className="text-slate-900 hover:text-yellow-500 hover:cursor-pointer flex items-center gap-1"
    >
      <FiLogOut />
      Logout
    </button>
    }
  </>

  const mobileNavLinks = <>
    <NavLink
      to="/"
      onClick={() => setIsOpen(!isOpen)}
      className={({ isActive }) =>
        isActive
          ? "text-yellow-500 font-semibold flex items-center gap-2"
          : "text-slate-900 hover:text-yellow-400 flex items-center gap-2"
      }
    >
      <FaMap /> Roadmaps
    </NavLink>

    {isAdmin && (
      <NavLink
        to="/create-roadmap"
        onClick={() => setIsOpen(!isOpen)}
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 font-semibold flex items-center gap-2"
            : "text-slate-900 hover:text-yellow-400 flex items-center gap-2"
        }
      >
        <FaPlus /> Create
      </NavLink>
    )}

    {!isAuthenticated ? (
      <>
        <NavLink
          to="/login"
          onClick={() => setIsOpen(!isOpen)}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-semibold flex items-center gap-1"
              : "text-slate-900 hover:text-yellow-400 flex items-center gap-1"
          }
        >
          <FaSignInAlt />
          Login
        </NavLink>

        <NavLink
          to="/register"
          onClick={() => setIsOpen(!isOpen)}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-semibold flex items-center gap-1"
              : "text-slate-900 hover:text-yellow-400 flex items-center gap-1"
          }
        >
          <FaUserPlus />
          Register
        </NavLink>
      </>
    ) : <button
      type="button"
      onClick={handleLogout}
      className="text-slate-900 hover:text-yellow-500 hover:cursor-pointer flex items-center gap-1"
    >
      <FiLogOut />
      Logout
    </button>
    }
  </>

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center text-yellow-400 font-bold text-xl md:text-2xl">
            <img className="w-10 h-10" src="/bit-code-round-logo.png" alt="" />
            <span className="inline-block">BitCode <span className="text-slate-900">Roadmap</span></span>
          </Link>

          <button className="sm:hidden text-xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiOutlineX /> : <GiHamburgerMenu />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-6 items-center text-sm md:text-base">
            {navLinks}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col gap-4 mt-4 pb-4 border-t pt-4">
            {mobileNavLinks}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
