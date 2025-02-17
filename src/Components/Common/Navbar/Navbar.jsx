import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Menu, X } from "lucide-react";
import auth from "../../../firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-2xl font-bold text-blue-600">
          <NavLink to="/">WinterDonate</NavLink>
        </div>

        <ul className="hidden md:flex space-x-6 text-lg">
          <li><NavLink to="/" className="hover:text-blue-600">Home</NavLink></li>
          <li><NavLink to="/donationcampain" className="hover:text-blue-600">Donation Campaigns</NavLink></li>
          <li><NavLink to="/howtohelp" className="hover:text-blue-600">How to Help</NavLink></li>
          {user && <li><NavLink to="/dashboard" className="hover:text-blue-600">Dashboard</NavLink></li>}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
              <button
                onClick={() => signOut(auth)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Login
            </NavLink>
          )}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-md absolute w-full left-0 top-[64px] space-y-4 py-4">
          <li><NavLink to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/donationcampain" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Donation Campaigns</NavLink></li>
          <li><NavLink to="/howtohelp" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>How to Help</NavLink></li>
          {user && <li><NavLink to="/dashboard" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Dashboard</NavLink></li>}

          {user ? (
            <div className="flex flex-col items-center space-y-4">
              <img src={user.photoURL} alt="Profile" className="w-12 h-12 rounded-full border" />
              <button
                onClick={() => {
                  signOut(auth);
                  setIsOpen(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
