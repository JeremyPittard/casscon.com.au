import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const helpers = {
  smoothScroll: function (e, destination, needsFocus) {
    e.preventDefault();
    gsap.to(window, { scrollTo: destination, duration: 0.3 });

    window.history.pushState(null, null, destination);
    const destinationElement = document.querySelector(destination);

    setTimeout(() => {
      
      destinationElement.setAttribute("tabIndex", "0");
      destinationElement.focus();
    }, 310);
  },
};

export default helpers;
