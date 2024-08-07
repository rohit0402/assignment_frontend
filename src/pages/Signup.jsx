import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
     <div className='flex justify-center items-center h-screen '>
     <form
    //   onSubmit={handleLogin}
        action=""
        className="bg-white rounded-lg p-5 shadow-2xl shadow-slate-500 flex flex-col gap-3 w-[60vw] lg:w-[20vw] text-sm"
      >
        <span className=" text-lg text-gray-600 -mb-1 text-center">Signup</span>

        <input
          type="email"
          name="email "
          id="email"
          className="outline-none border rounded-md px-3 py-2 focus:border-yellow-500 text-black "
          autoComplete="off"
          placeholder="enter email"
          required
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password "
          id="password"
          className="outline-none border rounded-md px-3 py-2 focus:border-yellow-500 text-black "
          autoComplete="off"
          placeholder="enter password"
          required
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className=" outline-none border rounded-md px-3 py-2 text-black bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
        >
          Signup
        </button>
        <p className="text-xs text-gray-600 flex -mt-1 gap-2">
          <span>Or</span>
          <Link
            to="/login"
            className=" text-black hover:underline hover:text-blue-700 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
     </div>
    </>
  )
}

export default Signup
