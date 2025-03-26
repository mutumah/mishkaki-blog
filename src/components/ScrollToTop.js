import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get current route

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null; 
};

export default ScrollToTop;
// This component listens for changes in the current route using the useLocation hook from react-router-dom. When the route changes, it calls window.scrollTo(0, 0) to scroll the window to the top of the page.