// import gsap, { Power3 } from "gsap";

// export const stagger = (target, fromvVars, toVars) => {
//   return gsap.fromTo(
//     target,
//     { opacity: 0, ...fromvVars },
//     { opacity: 1, ...toVars, stagger: 0.2, ease: Power3.easeOut }
//   );
// };
import { useEffect } from 'react';

const useBackgroundAnimation = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const interBubble = document.querySelector('.interactive');
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
          move();
        });
      }

      window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });

      move();
    })
  }, []);
};

export default useBackgroundAnimation;
