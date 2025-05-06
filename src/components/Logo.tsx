"use client";
import { Image } from "nextra/components";
import { useTheme } from "nextra-theme-docs";
export default function Logo() {
  const theme = useTheme().resolvedTheme;
  console.log(theme);
  return (
    <Image
      src={theme === "light" ? "/logo-light-mode.svg" : "/logo-dark-mode.svg"} // Corrected the path for dark mode
      alt="irc-logo"
      className="h-[20px] xs:h-[30px]"
    />
  );
}
