import { useEffect } from "react";

interface DisableScroolbarProps {
  isSidebarOpen: boolean;
}

export const disableScroolbar = ({ isSidebarOpen }: DisableScroolbarProps) => {
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);
};
