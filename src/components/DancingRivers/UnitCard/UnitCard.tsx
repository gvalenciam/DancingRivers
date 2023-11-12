import BaseContainer from "@/components/Base/Container/BaseContainer";
import { FC } from "react";
import DRHeadingLabel from "../Label/DRHeadingLabel";
import DRTextLabel from "../Label/DRTextLabel";
import DRButtonLink from "../Button/DRButtonLink";
import ImageText from "@/components/Base/ImageText/ImageText";
import ContainerPX from "@/components/Base/Container/Padding/ContainerPX";

type CardAlignment = "default" | "reverse";

export interface Unit {
  name: string;
  description: string;
  href: string;
  imageSrc: string;
  imageWidth: number;
  imageWidthPercentage: number;
  alignment: CardAlignment;
}

interface UnitCardProps {
  unit: Unit;
  locale: string;
}

export const UnitCard: FC<UnitCardProps> = ({ unit, locale }) => {
  return (
    <>
      <BaseContainer
        className={`fas gap-20 ${
          unit.alignment === "default" ? "" : "flex-row-reverse"
        }`}
        key={unit.name}
      >
        <BaseContainer
          className={`${
            unit.alignment === "default" ? "fccs" : "fcce"
          } gap-8 w-[42.5%]`}
        >
          {/****** Name ******/}
          <DRHeadingLabel
            text="Unidad"
            gradientText={unit.name}
            className={`${unit.alignment === "default" ? "" : "text-right"}`}
          ></DRHeadingLabel>
          {/****** Description ******/}
          <DRTextLabel
            text={unit.description}
            className={`${unit.alignment === "default" ? "" : "text-right"}`}
          ></DRTextLabel>
          {/****** Button ******/}
          <DRButtonLink
            text="Conoce más"
            href={`/${locale}/${unit.href}`}
          ></DRButtonLink>
        </BaseContainer>
        {/****** Image ******/}
        <BaseContainer className="fcc">
          <ImageText
            src={unit.imageSrc}
            imageWidth={unit.imageWidth}
            imageWidthPercentage={unit.imageWidthPercentage}
          ></ImageText>
        </BaseContainer>
      </BaseContainer>
    </>
  );
};

export default UnitCard;
