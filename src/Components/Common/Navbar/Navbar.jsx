import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import auth from "../../../firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-100 shadow-md p-4 fixed w-full top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
          Winter Donate
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Donation Campaigns", "How to Help", "Dashboard"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-blue-600 font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* User Profile or Login Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <img src={user.photoURL || "https://i.ibb.co/2Y3fN7q/user.png"} alt="Profile"
                className="w-10 h-10 rounded-full border" />
              <button
                onClick={() => signOut(auth)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-md absolute top-16 left-0 w-full p-4 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        {["Home", "Donation Campaigns", "How to Help", "Dashboard"].map((item, index) => (
          <Link
            key={index}
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="block py-2 text-center hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}

        {/* User Profile or Login Button (Mobile) */}
        <div className="mt-4 text-center">
          {user ? (
            <div className="flex flex-col items-center">
              <img src={user.photoURL || "https://i.ibb.co/2Y3fN7q/user.png"} alt="Profile"
                className="w-10 h-10 rounded-full border" />
              <button
                onClick={() => {
                  signOut(auth);
                  setIsOpen(false);
                }}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md block text-center hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
