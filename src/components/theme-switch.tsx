import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const root = window.document.documentElement;

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState<boolean>(
    root.classList.contains("dark")
  );

  const handleClick = () => {
    setIsDark((isDark) => !isDark);
    root.classList.toggle("dark");
  };

  return (
    <Button size={"icon"} variant={"secondary"} onClick={handleClick}>
      {isDark ? (
        <Moon className="fill-foreground stroke-0 size-4 sm:size-5" />
      ) : (
        <Sun className="fill-foreground size-4 sm:size-5" />
      )}
    </Button>
  );
};
export default ThemeSwitch;
