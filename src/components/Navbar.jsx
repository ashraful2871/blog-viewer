"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { getUser, isAuthenticated, login, logout } = useKindeAuth();
  const user = getUser();

  const links = (
    <>
      <li className="text-xl font-semibold">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link href="/profile">Profile</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className=" text-xl font-bold text-blue-500">
          Blog Viewer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {isAuthenticated ? (
          <>
            <Link href="/api/auth/logout">
              {" "}
              <button className="btn btn-primary text-base font-bold bg-blue-500 hover:bg-blue-600 text-white">
                Sign Out
              </button>
            </Link>
          </>
        ) : (
          <Link href="/api/auth/login">
            {" "}
            <button className="btn btn-primary text-base font-bold bg-blue-500 hover:bg-blue-600 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
