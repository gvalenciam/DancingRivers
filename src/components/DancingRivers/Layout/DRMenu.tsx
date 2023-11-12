"use client";

import { FC } from "react";
import { useState } from "react";
import anime from "animejs";
import IconText from "@/components/Base/IconText/IconText";
import BaseContainer from "@/components/Base/Container/BaseContainer";

interface DRMenuProps {}

const startAnimation = () => {
  const animation = anime.timeline({
    autoplay: false,
    easing: "easeOutCubic",
  });
  animation.add({
    targets: "#menuContainer",
    translateX: [0, 1920],
    duration: 1500,
  });
  animation.play();
};

const closeAnimation = () => {
  const animation = anime.timeline({
    autoplay: false,
    easing: "easeOutCubic",
  });
  animation.add({
    targets: "#menuContainer",
    translateX: [1920, 3840],
    duration: 3000,
  });
  animation.complete = (anime) => {
    document.body.setAttribute(
      "style",
      "position: absolute; top: 0; left: 0; right: 0; bottom: 0"
    );
  };
  animation.play();
};

export const DRMenu: FC<DRMenuProps> = ({}) => {
  const [hidden, setHidden] = useState(true);

  return (
    <BaseContainer id="menu">
      <IconText
        src="/icons/menu.png"
        className="bg-white rounded-full px-6 py-4"
        imageContainerClassName=""
        imageClassName="w-4 h-4"
        text="Menu"
        textClassName="font-medium"
        alt="menu"
        containerOnClick={() => {
          document.body.setAttribute(
            "style",
            "position: fixed; top: 0; left: 0; right: 0"
          );
          setHidden(false);
          startAnimation();
        }}
      ></IconText>
      <BaseContainer
        id="menuContainer"
        className={`bg-black w-screen h-screen absolute top-0 -left-full bottom-0 right-0`}
        onClick={() => {
          setHidden(true);
          closeAnimation();
        }}
      ></BaseContainer>
    </BaseContainer>
  );
};

export default DRMenu;
