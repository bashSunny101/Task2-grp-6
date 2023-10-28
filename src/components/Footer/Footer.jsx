import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-8">
            <div className='flex justify-evenly'>
                <div>
                <h2 className="mb-4 text-sm font-semibold text-white uppercase">Resources</h2>
                <ul className="text-gray-500 font-medium">
                    <li className="mb-2">
                        <Link to="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies" className="hover:underline">Movies</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-4 text-sm font-semibold text-white uppercase">Follow us</h2>
                <ul className="text-gray-500 font-medium">
                    <li className="mb-2">
                        <a
                            href="https://github.com/bashSunny101/Task2-grp-6"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >  Github</a>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline">Discord</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-4 text-sm font-semibold text-white uppercase">Legal</h2>
                <ul className="text-gray-500 font-medium">
                    <li className="mb-2">
                        <Link to="#" className="hover:underline">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                    </li>
                </ul>
                </div>
                </div>
            </div>
                    <p className="text-center text-sm text-gray-500 sm:text-center p-2 pb-4">
                        &copy; 2023 Movie Recommendation website. All Rights Reserved.
                    </p>
        </footer>
  );
}

export default Footer;