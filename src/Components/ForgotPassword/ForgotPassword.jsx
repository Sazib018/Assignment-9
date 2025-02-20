import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialEmail = params.get("email") || "";
  const [email, setEmail] = useState(initialEmail);

  const handleResetPassword = () => {
    window.location.href = "https://mail.google.com";
  };

  useEffect(() => {
    setEmail(initialEmail);
  }, [initialEmail]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-3 w-64"
      />
      <button
        onClick={handleResetPassword}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Reset Password
      </button>
    </div>
  );
};

export default ForgotPassword;
