import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Login(){
    return(
        <div className="flex container">
            <div className='  w-full h-screen bg-contain bg-no-repeat '
            style={{backgroundImage: `url('https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif')`}}>
            </div>

            <div className=' w-full h-screen flex justify-center items-center'>
            <div className="container w-full m-20 ">
            <div className="w-full border border-gray-60 rounded-lg p-5 h-auto ">
            <form className="p-4 pt-0 flex flex-col justify-center">

                <div className="flex flex-col mt-2">
                    <label for="email" className="hidden">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white/5 border-b border-b-black text-white font-semibold focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col mt-2">
                    <label for="pass" className="hidden">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white/5 border-b border-b-black text-white font-semibold focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="md:w-auto bg-blue-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-600 transition ease-in-out duration-300 "
                >
                    Login 
                </button>

                <div className="flex text-sm">
                <p className='m-2'>Don't have an account? </p>
                <NavLink to='/signup' className=' hover:underline mt-2' >Sign up</NavLink>
                </div>

                <p className='text-center text-blue-400 text-md'>-OR-</p>

                <button className='w-100 mt-2 py-3 px-3 rounded-lg bg-white/5 border-b border-b-black text-white/50 font-semibold focus:border-blue-500 focus:outline-none flex justify-center gap-1'>
                <img src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" alt="Google" className='h-5 m-1 rounded '/>
                 Login with Google
                </button>

            </form>
            </div>
            </div>
            </div>
       </div>
    )
}