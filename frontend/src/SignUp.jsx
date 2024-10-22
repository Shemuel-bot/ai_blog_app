function SignUp() {
  return (
    <>
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Blog Generator</h1>
        </div>
        <div>
          <a href="#" className="text-white hover:underline">
            Log in
          </a>

          <a href="#" className="text-white hover:underline">
            Sign up
          </a>
        </div>
      </nav>

      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
          <form action="" className="space-y-4">
            <h2 className="text-xl font-semibold">Sign Up</h2>
            <div>
              <label
                htmlFor="username"
                className="block mb-1 font-medium"
              >Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username..."
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email..."
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1 font-medium"
              >Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password..."
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label
                htmlFor="repeatPassword"
                className="block mb-1 font-medium"
              >Repeat your password</label>
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                placeholder="Repeat your password..."
                className="w-full p-2 border rounded"
              />
            </div>


            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
