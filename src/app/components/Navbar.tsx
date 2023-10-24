"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
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
import { Avatar } from "@nextui-org/Avatar";
import Themechanger from "../components/ThemeChanger";
import { UserAuth } from "../context/AuthContext";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const { user, googleSignIn, logOut } = UserAuth();

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

  console.log(user);

  return (
    <div className="mt-3 border-b-[1px] border-black dark:border-white border-opacity-20 dark:border-opacity-20">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <div className="flex w-[200px] justify-evenly">
            <Themechanger />
            {!user ? (
              <div className="flex">
                <NavbarItem className="flex mr-4">
                  <Link href="#" onClick={handleSignIn}>
                    <FcGoogle size={30} />
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Button as={Link} color="primary" href="#" variant="flat">
                    <BiLogInCircle size={30} />
                  </Button>
                </NavbarItem>
              </div>
            ) : (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <div className="flex items-center">
                    <div className="mr-2">{user.displayName}</div>
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
                  className="dark:bg-[#151515] bg-[#e0dfdf] p-2 rounded-xl"
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
          </div>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
