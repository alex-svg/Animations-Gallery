import React from "react";
import { useSpring, animated } from "react-spring";

import CardTemplate from "../CardTemplate/CardTemplate";

const Card1 = () => {
  const animate = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });
  return (
    <div>
      <div className=" w-64 h-64 shadow-xl">
        <animated.div
          className=" text-pink-300 text-center py-16 font-bold text-2xl"
          style={animate}
        >
          REFRESH TO SEE ME FAIDING
        </animated.div>
      </div>
      <CardTemplate link="/card1" transition="Auto Fading" />
    </div>
  );
};

export default Card1;
