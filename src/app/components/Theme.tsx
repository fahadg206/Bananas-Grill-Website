"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const [context, setContext] = useState({});
  const [selectedLeagueContext, setSelectedLeagueContext] = useState({});
  const [seasonContext, setSeasonContext] = useState(null);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
