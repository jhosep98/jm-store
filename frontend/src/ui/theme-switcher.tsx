"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Skeleton } from "@nextui-org/skeleton";

import { Button } from "@nextui-org/button";
import { EntypoLightUp, CircumDark } from "@/lib/icons-name";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="flex rounded-full w-6 h-6" />;

  return (
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
  );
};
