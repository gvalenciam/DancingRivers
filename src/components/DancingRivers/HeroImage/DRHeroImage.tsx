import Image from "next/image";
import React, { FC } from "react";
import BaseLabel from "@/components/Base/Label/BaseLabel";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";

type TextAlignment =
  | "left"
  | "center"
  | "right"
  | "leftC"
  | "centerC"
  | "rightC";

interface DRHeroImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  overlayClassName?: string;
  opacity?: number;
  title: string;
  titleClassName?: string;
  subtitle: string;
  subtitleClassName?: string;
  textAlignment?: TextAlignment;
  textContainerAlignment?: TextAlignment;
  textContainerClassName?: string;
}

const mapTextAlignmentToClass = (textAlignment: TextAlignment): string => {
  switch (textAlignment) {
    case "leftC":
      return "fccs";
    case "centerC":
      return "fccc";
    case "rightC":
      return "fcce";
    case "left":
      return "fsc";
    case "center":
      return "fcc";
    case "right":
      return "fec";
  }
};

export const DRHeroImage: FC<DRHeroImageProps> = ({
  src,
  alt,
  imageContainerClassName,
  imageClassName,
  overlayClassName,
  opacity,
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  textAlignment,
  textContainerAlignment,
  textContainerClassName,
  children,
}) => {
  const alignmentClass = mapTextAlignmentToClass(textAlignment ?? "center");
  const alignmentClassColumn = mapTextAlignmentToClass(
    textAlignment ?? "centerC"
  );
  return (
    <div className={`relative max-w-screen ${imageContainerClassName}`}>
      {/****** Hero Image ******/}
      <Image
        src={src}
        className={imageClassName}
        fill
        alt={alt}
        style={{ objectFit: "cover" }}
      ></Image>
      {/****** Opacity overlay ******/}
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 bg-black z-30 ${overlayClassName}`}
        style={{ opacity: `${opacity ? opacity : 35}%` }}
      ></div>
      {/****** Title + Subtitle ******/}
      <ContainerPadding
        className={`absolute top-0 right-0 bottom-0 left-0 z-40 ${textContainerClassName} ${alignmentClass}`}
      >
        <div className={`gap-6 ${alignmentClassColumn}`}>
          {/****** Title ******/}
          <BaseLabel
            text={title}
            format="heading1Clean"
            className={`${
              titleClassName
                ? titleClassName
                : "main-heading-font font-black text-white text-9xl"
            }`}
          ></BaseLabel>
          {/****** Subtitle ******/}
          <BaseLabel
            text={subtitle}
            format="textClean"
            className={` ${
              subtitleClassName
                ? subtitleClassName
                : "main-text-font font-bold text-white text-4xl"
            }`}
          ></BaseLabel>
          {children}
        </div>
      </ContainerPadding>
    </div>
  );
};

export default DRHeroImage;
