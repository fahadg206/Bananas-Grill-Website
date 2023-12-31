"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import BgLogo from "../images/images.jpg";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/Dropdown";
import { FcGoogle } from "react-icons/fc";
import { BiLogInCircle } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import Themechanger from "../components/ThemeChanger";
import { UserAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FiMenu, FiArrowRight } from "react-icons/fi";

const FlipNavWrapper = () => {
  return (
    <div className="">
      <FlipNav />
      <div className="h-72" />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} isOpen={isOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const NavLeft = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden  text-2xl cursor-pointer"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        {!isOpen ? <FiMenu /> : <GrClose />}
      </motion.button>
      <Image
        src={BgLogo}
        alt="logo"
        width={55}
        height={55}
        className="rounded-full "
      />
      <NavLink text="Home" />
      <NavLink text="Menu" />
      <NavLink text="Catering" />
      <NavLink text="About Us" />
      <NavLink text="Contact Us" />
    </div>
  );
};

const NavLink = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="flex items-center justify-around w-[150px] md:w-[200px]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=" bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
      >
        <Navbar className="">
          <NavbarContent>
            {loading ? null : !user ? (
              <div className="flex">
                <NavbarItem className="ml-7">
                  <FcGoogle onClick={handleSignIn} size={30} />
                </NavbarItem>
              </div>
            ) : (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <div className="flex items-center">
                    <div className="mr-2 text-[12px]">
                      {`Hello, ${user.displayName.split(" ")[0]}`}
                    </div>
                    <Image
                      src={user.photoURL}
                      className="rounded-full cursor-pointer"
                      alt="user-image"
                      width={40}
                      height={40}
                    />
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Profile Actions"
                  variant="flat"
                  className="dark:bg-[#0c0c0c] bg-[#e0dfdf] p-2 rounded-xl"
                >
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{user.email}</p>
                  </DropdownItem>
                  <DropdownItem
                    className="dark:hover:bg-[#242424] hover:bg-[#c3c2c2] "
                    key="settings"
                  >
                    My Settings
                  </DropdownItem>
                  <DropdownItem
                    className="dark:hover:bg-[#242424] hover:bg-[#c3c2c2] cursor-pointer "
                    key="team_settings"
                  >
                    Team Settings
                  </DropdownItem>
                  <DropdownItem
                    className="dark:hover:bg-[#242424] hover:bg-[#c3c2c2] cursor-pointer "
                    key="analytics"
                  >
                    Analytics
                  </DropdownItem>
                  <DropdownItem
                    className="dark:hover:bg-[#242424] hover:bg-[#c3c2c2] cursor-pointer "
                    key="system"
                  >
                    System
                  </DropdownItem>
                  <DropdownItem
                    className="dark:hover:bg-[#242424] hover:bg-[#c3c2c2] cursor-pointer "
                    key="configurations"
                  >
                    Configurations
                  </DropdownItem>
                  <DropdownItem
                    className="dark:hover:bg-[#242424] hover:bg-[#c3c2c2] cursor-pointer "
                    key="help_and_feedback"
                  >
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    onClick={handleSignOut}
                    className="dark:hover:bg-[#242424] hover:bg-[#c3c2c2] cursor-pointer "
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </NavbarContent>
        </Navbar>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={
          !user
            ? `px-1 py-1 dark:bg-bg-yellow bg-bg-green  font-medium rounded-md whitespace-nowrap`
            : `hidden`
        }
      >
        <BiLogInCircle size={25} />
      </motion.button>
      <Themechanger />
    </div>
  );
};

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4  shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 h-screen dark:bg-dark-mode bg-light-mode"
    >
      <MenuLink text="Home" />
      <MenuLink text="Menu" />
      <MenuLink text="Catering" />
      <MenuLink text="About Us" />
      <MenuLink text="Contact Us" />
    </motion.div>
  );
};

const MenuLink = ({ text }: { text: string }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNavWrapper;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
