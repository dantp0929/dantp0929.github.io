import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 4);
  }, [pathname]);

  return null;
}