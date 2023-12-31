import { useEffect } from "react";

interface DisableScroolbarProps {
  condition?: boolean;
}

export const disableScroolbar = ({ condition }: DisableScroolbarProps) => {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [condition]);
};
