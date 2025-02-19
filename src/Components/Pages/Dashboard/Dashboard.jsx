import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user} = useContext(AuthContext);

  return (
    <div className="p-4 mt-24">
      {user ? (
        <div className="text-center">
          <img src={user.photoURL} alt="User" className="w-16 h-16 rounded-full mx-auto" />
          <h2 className="text-xl font-bold">{user.displayName}</h2>
         <Link to={"/"}> <button className="px-4 py-2 bg-red-500 text-white rounded-md mt-2">
            Go To Home
          </button></Link>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
