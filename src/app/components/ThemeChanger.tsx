"use client";
import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const Themechanger = (props: any) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === "light";
  return (
    <button className="  dark:text-bg-yellow  text-bg-green w-6 h-6 rounded-full flex justify-center items-center">
      {light ? (
        <BsMoonStarsFill onClick={() => setTheme("dark")} size={27} />
      ) : (
        <BsFillSunFill onClick={() => setTheme("light")} size={27} />
      )}
    </button>
  );
};

export default Themechanger;
