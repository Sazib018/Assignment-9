import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="bg-slate-100 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Winter Donate
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
          <Link to="/campaigns" className="hover:text-blue-600 font-medium">Donation Campaigns</Link>
          <Link to="/how-to-help" className="hover:text-blue-600 font-medium">How to Help</Link>
          <Link to="/dashboard" className="hover:text-blue-600 font-medium">Dashboard</Link>
        </div>

        {/* User Profile or Login Button */}
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full border" />
              <button onClick={() => signOut(auth)} className="bg-red-500 text-white px-4 py-2 rounded-md">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
