import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LogIn() {
  const navigate = useNavigate()

  const eventHandler = () =>{
    fetch("http://127.0.0.1:8000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      })
    }).then(async res => {
      const a = await res.json()
      console.log(a)
      if (a.message == 'successful')
          navigate('home')
    })
  }

  return (
    <>
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Blog Generator</h1>
        </div>
        <div>
          <Link to="/sign-up">
            <a href="#" className="text-white hover:underline">
              Sign up
            </a>
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
          <form action="#" className="space-y-4">
            <h2 className="text-xl font-semibold">Log In</h2>
            <div>
              <label htmlFor="username" className="block mb-1 font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username..."
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password..."
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              onClick={() => {eventHandler()}}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
