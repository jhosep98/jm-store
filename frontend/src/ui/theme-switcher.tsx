"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { EntypoLightUp, CircumDark } from "@/lib/icons-name";

export const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NavbarItem>
      <Button
        isIconOnly
        variant="light"
        aria-label="theme light/dark"
        className="rounded-full"
      >
        {theme === "light" ? (
          <CircumDark
            className="text-foreground"
            onClick={() => {
              setTheme("dark");
            }}
          />
        ) : (
          <EntypoLightUp
            className="text-foreground"
            onClick={() => {
              setTheme("light");
            }}
          />
        )}
      </Button>
    </NavbarItem>
  );
};
