import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.config";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // Query parameter থেকে email সেট করা
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const savedEmail = params.get("email") || "";
    setEmail(savedEmail);
  }, [location]);

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent! Check your email.");
      
    
      setTimeout(() => {
        window.location.href = "https://mail.google.com/";
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Reset Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
