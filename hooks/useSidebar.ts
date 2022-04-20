import { useRef } from "react";

const isOpen = useRef(false)

export function useSidebar() {
  return {
    isOpen
  };
}
