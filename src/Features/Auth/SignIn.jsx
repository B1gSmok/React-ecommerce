import { useState } from "react";
import { Link } from "react-router-dom";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    console.log("Signing in with:", { email, password });
    alert("Signed in (mock)");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
      >
        ← Back to Home
      </Link>

      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In to Your Account</h2>

        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="text-indigo-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
