"use client";
import { useEffect } from "react";
import styles from "./themeSwitchStyles.module.css";

export default function ThemeSwitch() {
  // const isDarkMode = JSON.parse(
  //   localStorage.getItem("theme") || "{}"
  // )?.isDarkMode;
  const isDarkMode = false;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;
    localStorage.setItem("theme", JSON.stringify({ isDarkMode: checked }));
    document.querySelector("html")?.classList.toggle("dark");
  };

  useEffect(() => {
    if (isDarkMode) document.querySelector("html")?.classList.add("dark");
  }, [isDarkMode]);
  return (
    <input
      defaultChecked={isDarkMode || false}
      onChange={handleChange}
      className={styles["theme-checkbox"]}
      type="checkbox"
    />
  );
}
