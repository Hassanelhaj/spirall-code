"use client";

import React, { useState } from "react";
import{HiHome, HiPhone} from 'react-icons/hi'
import {  FiMenu } from "react-icons/fi";
import {  BsPersonCircle } from "react-icons/bs";

import {FaBlog} from 'react-icons/fa'
// import { } from "react-icons/gi";

import {BsInfoCircleFill} from "react-icons/bs";
import Link from "next/link";

import Image from "next/image";
import logo from '../../public/imgs/logo.png'

// IoRestaurantSharp

const NavBar = () => {


  let [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <main className="px-6 text-purple-800 bg-white">
      <nav className="  max-w-screen-xl ">
        {/* mobile nav */}
        <div className="container mx-auto 
         lg:hidden flex justify-between items-center flex-wrap px-1  py-2">
          <Link
            href="/"
            className=" flex justify-center items-center gap-2 cursor-pointer"
          >
            <span>
            <Image src={logo} className="w-[64px] h-[64px]" />

            </span>
            <span className="text-xl -mt-1 font-bold ">Spiral code</span>
          </Link>
          <span onClick={handleToggle}>{<FiMenu className="text-3xl" />}</span>

          {toggle && (
            <div className="w-screen text-center mt-8 ">
              <ul className="flex flex-col items-center gap-2">
              <Link
              href="/"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <HiHome className="text-2xl " />
              </span>
              <span>Home </span>
            </Link>
                <Link
                  href="/blog"
                  className=" flex justify-center items-center gap-1 link"
                >
                  <span>
                    <FaBlog className="text-xl" />
                  </span>
                  <span>Blog</span>
                </Link>
                <Link
                  href="/"
                  className=" flex justify-center items-center gap-1 link"
                >
                  <span>
                    <BsPersonCircle className=" text-xl" />
                  </span>
                  <span>About US</span>
                </Link>
                {/*  */}
                <Link
                  href="/"
                  className=" flex justify-center items-center gap-1
           link"
                >
                  <span>
                    <HiPhone className="text-xl" />
                  </span>
                  <span>Contact Us</span>
                </Link>
              
            
              </ul>
            </div>
          )}
        </div>

        {/* desktop nav */}

        <div
          className=" hidden lg:flex 
     flex-row  py-2 justify-start items-center  lg:gap-40 xl:gap-80"
        >
          <Link
            href="/"
            className=" flex justify-center items-center gap-2 cursor-pointer text-purple-800"
          >
            <span>
              
              <Image src={logo} className="w-[64px] h-[64px]" />
            </span>
            <span className="text-2xl -mt-1 font-bold ">Spiral Code</span>
          </Link>
          <ul className="flex justify-center items-center  lg:gap-3 xl:gap-6 lg:ml-6 xl:ml-10">
          <Link
              href="/"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <HiHome className="text-2xl " />
              </span>
              <span>Home </span>
            </Link>
            <Link
              href="/blog"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <FaBlog className="text-xl" />
              </span>
              <span>Blog</span>
            </Link>
            {/*  */}
          
            <Link
              href="/about"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <BsInfoCircleFill className="text-xl" />
              </span>
              <span>About US </span>
            </Link>
            <Link
              href="/contact"
              className=" flex justify-center items-center gap-1 hover:opacity-70 text-purple-800"
            >
              <span>
                <HiPhone className="text-xl  " />
              </span>
              <span>Contact us</span>
            </Link>
          
          </ul>
        </div>
      </nav>
    </main>
  );
};


export default NavBar;
