import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll() {
  useEffect(() => {

    const scrollEl = document.querySelector(".App");

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      mobile: {
        smooth: false
    },
    tablet: {
        smooth: false
    }
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },

      pinType: scrollEl.style.transform ? "transform" : "fixed"
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);

    ScrollTrigger.refresh();


    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  });
}
