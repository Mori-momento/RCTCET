import React, { useState } from "react";
import Our_Projects from "./Our_Projects";
import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  let [popUp, setPopUp] = useState("none");
  let popUpFunOpen = () => {
    setPopUp("");
  };
  let popUpFunClose = () => {
    setPopUp("none");
  };
  return (
    <div className="">
      <div className=" bg-white/50 max-sm:bg-white/80 md:bg-white/50 ">
        <div className=" flex justify-around">
          <div className="nav1ele mt-3 flex-initial">
            <img
              src="https://static.wixstatic.com/media/74d974_2a37c3fefb834d63b1dbc7b202ecb7ce~mv2.png/v1/fill/w_78,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/RCTCET%20LOGO.png"
              alt="rctcet logo"
              className="bg-white p-1 rounded-full shadow-2xl"
            />
          </div>
          <div className="nav1ele mt-3 flex-initial max-sm:hidden sm:hidden md:block">
            <img
              src="https://static.wixstatic.com/media/8f62ff_d1a38fed0bba45b08f7afaef2869cbd1~mv2.png/v1/crop/x_0,y_39,w_1000,h_172/fill/w_406,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp_Image_2022-08-14_at_10_53_19_PM-removebg-preview.png"
              alt="logo"
            />
          </div>
          <div className="nav1ele mt-3 flex-initial">
            <img
              src="https://static.wixstatic.com/media/8f62ff_6070c543eb474e8f811ca37ce8038b85~mv2.png/v1/fill/w_125,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ThemeLogo_webp.png"
              alt="logo"
            />
          </div>
          <div className="nav1ele text-black border-4 border-slate-100 bg-slate-100 mt-3 flex-initial max-sm:flex md:hidden  p-1  m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 object-fill"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className="nav1ele mt-3 flex-initial flex max-sm:flex md:hidden justify-center">
            <img
              src="https://static.wixstatic.com/media/8f62ff_d1a38fed0bba45b08f7afaef2869cbd1~mv2.png/v1/crop/x_0,y_39,w_1000,h_172/fill/w_406,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp_Image_2022-08-14_at_10_53_19_PM-removebg-preview.png"
              alt="logo"
              className=""
            />
          </div>
        </div>
        <div className="">
          <nav className=" max-sm:hidden sm:hidden md:flex justify-around p-0">
            <NavLink to='/' className="list-none  p-2 border-b-2 hover:border-black">
              Home
            </NavLink>
            <NavLink to='HBC' className="list-none border-b-2 hover:border-black p-2 ">
              Hobby Based Clubs
            </NavLink>
            <NavLink to='GI' className="list-none border-b-2 hover:border-black p-2">
              Get Involved
            </NavLink>
            <NavLink to='About' className="list-none border-b-2 hover:border-black p-2">
              About Us
            </NavLink>
            <NavLink to='Upcoming_events' className="list-none border-b-2 hover:border-black p-2">
              Upcoming Events
            </NavLink>
            <NavLink to='Our_projects_page'
              className="list-none border-b-2 hover:border-black p-2"
              // onMouseEnter={popUpFunOpen}
              // onMouseLeave={popUpFunClose}
            >
              Our Projects
            </NavLink>
            <NavLink to='Club_insight' className="list-none border-b-2 hover:border-black p-2">
              Club Insight
            </NavLink>
            <NavLink to='Contact' className="list-none border-b-2 hover:border-black p-2">
              Contact
            </NavLink>
            <NavLink to='Members' className="list-none border-b-2 hover:border-black p-2">
              Members
            </NavLink>
            <NavLink to='MTT' className="list-none border-b-2 hover:border-black p-2">
              Meet the Team
            </NavLink>
          </nav>
        </div>
      </div>
      <Our_Projects visibleCheck={popUp}></Our_Projects>
    </div>
  );
}

export default Navbar;
