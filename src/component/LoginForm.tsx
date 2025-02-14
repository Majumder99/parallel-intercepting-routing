const LoginForm = () => {
  return (
    <div>
      <form className="flex flex-col space-y-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 rounded"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white rounded py-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
