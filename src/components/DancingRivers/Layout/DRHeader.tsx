import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import DRMenu from "./DRMenu";
import ImageText from "@/components/Base/ImageText/ImageText";

interface DRHeaderProps {
  language: string;
}

export const DRHeader: FC<DRHeaderProps> = ({ language }) => {
  return (
    <div className="fbc px-12 py-6 absolute top-0 left-0 right-0 z-50">
      {/****** Logo ******/}
      <Link href={`/${language}/`} className="fsc">
        <ImageText
          src="/images/DR_Logo_Blanco.svg"
          imageWidth={443}
          imageWidthPercentage={60}
          priority
        ></ImageText>
      </Link>
      {/****** Language + Menu ******/}
      <div className="fcc gap-10 cursor-pointer">
        <LanguageToggle
          language={language}
          imageClassName="w-6 h-6"
        ></LanguageToggle>
        <DRMenu></DRMenu>
      </div>
    </div>
  );
};

export default DRHeader;
