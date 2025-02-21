import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  
  const [name, setName] = useState(auth.currentUser?.displayName || "");
  const [photoURL, setPhotoURL] = useState(auth.currentUser?.photoURL || "");

  const handleUpdate = async () => {
    if (!name || !photoURL) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      alert("Profile updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Update Error:", error);
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Update Profile</h2>
        
        <label className="block text-gray-700 mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label className="block text-gray-700 mb-2">Photo URL:</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <button
          onClick={handleUpdate}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
        >
          Update Information
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
