import { useState } from "react";
import { Link } from "react-router-dom";

export default function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      alert("Email verified successfully!");
    } else {
      setError("Invalid OTP. Please try again.");
      setMessage("");
    }
  };

  const handleResendOtp = () => {
    // Simulate OTP resend (replace this with actual logic)
    setMessage("OTP sent again to your email.");
    setError("");
    alert("OTP has been resent (mock).");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
      >
        ← Back to Home
      </Link>

      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Verify Your Email</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          We’ve sent a 6-digit OTP to your email. Please enter it below to verify.
        </p>

        <form onSubmit={handleVerify} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="123456"
              required
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            {message && <p className="text-sm text-green-600 mt-1">{message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold transition"
          >
            Verify OTP
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={handleResendOtp}
            className="text-sm text-indigo-600 hover:underline font-medium"
          >
            Resend OTP
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Entered wrong email?{" "}
            <Link to="/auth/signup" className="text-indigo-600 hover:underline">
              Edit Email
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
