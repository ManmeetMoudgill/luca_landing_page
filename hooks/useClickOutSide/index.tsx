"use client";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseClickOutsideProps<T extends HTMLElement> {
  callback?: () => void;
  ref?: React.MutableRefObject<T | null>;
  isCallbackEnabled?: boolean;
}

interface UseClickOutSideReturn {
  isClickedOutside: boolean;
}

const useClickOutside = <T extends HTMLElement>({
  callback,
  ref,
  isCallbackEnabled = false,
}: UseClickOutsideProps<T>): UseClickOutSideReturn => {
  const [isClickedOutside, setIsClickedOutside] = useState<boolean>(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        console.log("target element", event?.target as Node);
        if (isCallbackEnabled && callback) {
          console.log("inside the if statement");
          callback();
        }
        setIsClickedOutside(true);
      } else {
        setIsClickedOutside(false);
      }
    },
    [callback, isCallbackEnabled, ref, setIsClickedOutside]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    console.log("useClickOutside", isClickedOutside);
  }, [isClickedOutside]);

  return {
    isClickedOutside,
  };
};

export default useClickOutside;
