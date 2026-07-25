import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">
          Forgot Password
        </h2>

        <p className="text-center">
          Enter your email to receive a password reset link.
        </p>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
        />

        <button className="btn btn-primary w-100">
          Reset Password
        </button>

        <div className="text-center mt-3">
          <Link
            to="/login"
            className="text-decoration-none"
          >
            Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;