import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.pageYOffset;

      if (currentY >= 10) setActive(true);
      else setActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { text: "Insights", page: "get-cozy" },
    { text: " Industries", page: "about-us" },
    { text: "Services", page: "our-work" },
    { text: "News", page: "blog" },
    { text: "About us", page: "say-hi" },
  ];
  return (
    <div className="w-full relative">
      <div className="h-screen bg-fixed w-full">
        <video
          className="absolute top-0 left-0 z-[-1] object-cover w-full h-screen"
          autoPlay
          loop
          muted
        >
          <source
            src="https://prod.ucwe.capgemini.com/wp-content/uploads/2023/01/DAVOS_23_KEY_VISUAL_v8a_compressed.mp4"
            type="video/mp4"
          />
        </video>
        <div className="group">
          <div
            className={`${
              active ? "hidden" : " "
            } text-white group-hover:bg-white group-hover:text-black  animate-word gap-6 px-12 pt-2 flex justify-end list-none`}
          >
            <li>Contact us</li>
            <li>Investors</li>
            <li>Global {"|"} EN </li>
          </div>
          <nav
            className={`${
              active && "bg-white duration-500 py-8 "
            } w-full group fixed pt-6 pb-4 top-0 left-0 z-30 group-hover:bg-white  flex gap-8 px-12 justify-between items-center`}
          >
            <div className="flex gap-8 group-hover:text-black text-white list-none">
              <div className="pr-10 ">
                <img
                  className={`${active && "hidden"} group-hover:hidden`}
                  src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"
                  alt="logo"
                />
                <img
                  className={` ${
                    active ? "block" : "hidden"
                  } group-hover:block`}
                  src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                  alt="name"
                />
              </div>
              {navLinks.map((link, index) => (
                <Link href={`/${link.page}`}>
                  <div
                    className={` ${
                      active ? "text-black" : "text-white"
                    } text-lg hover:underline group-hover:bg-white group-hover:text-black `}
                    onMouseOver={toggleVisibility}
                    onMouseOut={toggleVisibility}
                    key={index}
                  >
                    {link.text}
                  </div>
                </Link>
              ))}
              {isVisible && (
                <div className="absolute top-16 text-white left-0 flex w-full">
                  <div className="bg-[#0070AD] flex flex-col space-y-6 p-8 max-w-[320px]">
                    <h3 className="text-lg font-medium">Insights</h3>
                    <p className="space-y-8">
                      Explore our latest thought leadership, ideas, and insights
                      on the issues that are shaping the future of business and
                      society.s
                    </p>
                    <button className="border-white flex gap-1 border items-center rounded-full max-w-[180px] px-4 py-2">
                      Learn More
                      <BsArrowRight />
                    </button>
                  </div>
                  <div className="bg-[#F8F9F0] flex justify-between p-8  w-full ">
                    <div className="flex flex-col text-black space-y-4 list-none">
                      <li>Leading sustainability</li>
                      <li>Expert perspectives</li>
                      <li>The future of technology</li>
                      <li>Marketing for customer experience</li>
                      <li>Our research library</li>
                    </div>
                    <div>
                      <img className="max-w-sm" src="/assets/Capgemini.jpeg" />
                      <div className="bg-white max-w-[280px] flex justify-center">
                        <div className="p-5 text-black text-center">
                          <p>Capgemini Research Institute</p>
                          <p>Our number one ranked think-tank</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className={`${
                active ? "text-black" : "text-white"
              } flex items-center group-hover:text-black gap-1 list-none`}
            >
              <div>
                <p>Search</p>
              </div>
              <div
                className={` top-0 py-4 left-0 right-0  bg-white w-full ${
                  showSearch ? "fixed" : "hidden"
                }`}
              >
                <div className="px-12  search-container">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg text-black font-medium py-4">
                        Search
                      </p>
                    </div>
                    <div>
                      <GrClose onClick={handleSearchClick} />
                    </div>
                  </div>
                  <input
                    type="search"
                    className="bg-[#ECECEC] rounded-full py-4 px-4 w-full"
                    placeholder="Start typing..."
                  />
                  <ul className="flex gap-4 text-base items-center text-black pt-6">
                    <li>Most searched:</li>
                    <li className="underline underline-offset-2 font-medium">
                      Cloud
                    </li>
                    <li className="underline underline-offset-2 font-medium">
                      Management team
                    </li>
                    <li className="underline underline-offset-2 font-medium">
                      Artificial intelligence
                    </li>
                  </ul>
                </div>
              </div>

              <AiOutlineSearch
                onClick={handleSearchClick}
                className={`${
                  active ? "text-black" : "text-white"
                } group-hover:text-black w-5 h-5`}
              />
            </div>
          </nav>
        </div>
        <div className="bg-[#00669D] max-w-[672px] h-[300px] flex flex-col space-y-4 text-white p-8 mt-[252px] mx-12">
          <p className="text-xl pt-16">FUTURE {"|"} IMPACT</p>
          <span>Join us in Davos</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
