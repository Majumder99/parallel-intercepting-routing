const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <label htmlFor="email" className="block font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-500"
        />

        <label
          htmlFor="password"
          className="block font-medium text-gray-700 mt-4"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded w-full py-2 mt-4 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
