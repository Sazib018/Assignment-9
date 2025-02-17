import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50 ">
      <div className="text-2xl font-bold text-blue-600">
        <NavLink to="/">WinterDonate</NavLink>
      </div>
      
      <ul className="hidden md:flex space-x-6 text-lg">
        <li><NavLink to="/" className="hover:text-blue-600">Home</NavLink></li>
        <li><NavLink to="/donationcampain" className="hover:text-blue-600">Donation Campaigns</NavLink></li>
        <li><NavLink to="/howtohelp" className="hover:text-blue-600">How to Help</NavLink></li>
        <li><NavLink to="/dashboard" className="hover:text-blue-600">Dashboard</NavLink></li>
      </ul>
      
      <div>
        {user ? (
          <div className="flex items-center space-x-4">
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
          </div>
        ) : (
          <NavLink to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Login
          </NavLink>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
