import { useEffect } from "react";

function useDropDown(parentREF, childREF, open) {
  const scrollWindows = (e) => {
    if (open) {
      if (
        window.innerHeight - 10 <
          childREF.current.getBoundingClientRect().bottom &&
        childREF.current.style.top
      ) {
        childREF.current.style.removeProperty("top");
        childREF.current.style.bottom = "100%";
      } else if (
        10 >= childREF.current.getBoundingClientRect().top &&
        childREF.current.style.bottom
      ) {
        childREF.current.style.removeProperty("bottom");
        childREF.current.style.top = "100%";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindows);

    return () => window.removeEventListener("scroll", scrollWindows);
  }, [parentREF.current, childREF.current]);
}

export default useDropDown;
