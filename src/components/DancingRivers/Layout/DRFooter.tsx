import { FC } from "react";
import Image from "next/image";
import DRImageCircleIcon from "../ImageCircleIcon/DRImageCircleIcon";
import IconText from "../../Base/IconText/IconText";
import DRTextLabel from "../Label/DRTextLabel";
import BaseContainer from "../../Base/Container/BaseContainer";
import Link from "next/link";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

interface DRFooterProps {
  language: string;
}

export const DRFooter: FC<DRFooterProps> = ({ language }) => {
  const year = new Date().getFullYear();
  return (
    <BaseContainer className="px-[160px] py-[100px] bg-black fbs">
      <div className="fccs gap-16 px-5">
        <Image
          src="/images/DR_Logo_Blanco.svg"
          width={0}
          height={0}
          style={{ width: "80%", height: "auto" }}
          alt="logo-blanco"
        ></Image>
        {/****** Contact Info ******/}
        <div className="fccs gap-9">
          <IconText
            src="/icons/location.svg"
            imageContainerClassName="p-2 bg-white rounded-full"
            imageClassName="w-7 h-7"
            text="Jr. Medrano Silva 165 Barranco"
            textClassName="text-textWhiteLight tt10"
            alt="Address icon"
          ></IconText>
          <IconText
            src="/icons/phone.svg"
            imageContainerClassName="p-2 bg-white rounded-full"
            imageClassName="w-7 h-7"
            text="(01) 2305020 Anexo 4295"
            textClassName="text-textWhiteLight tt10"
            alt="Address icon"
          ></IconText>
          <IconText
            src="/icons/web_black.svg"
            imageContainerClassName="p-2 bg-white rounded-full"
            imageClassName="w-7 h-7"
            text="cita.utec.edu.pe"
            textClassName="text-textWhiteLight tt10"
            alt="Address icon"
          ></IconText>
          <IconText
            src="/icons/mail.svg"
            imageContainerClassName="p-2 bg-white rounded-full"
            imageClassName="w-7 h-7"
            text="cita@utec.edu.pe"
            textClassName="text-textWhiteLight tt10"
            alt="Address icon"
          ></IconText>
        </div>
        {/****** Copyright ******/}
        <DRTextLabel text={`${year}`} className="text-textWhiteLight">
          &copy; Centro de Investigación y Tecnología del Agua - UTEC
        </DRTextLabel>
      </div>
      <div className="fcbe gap-12">
        {/****** Social ******/}
        <div className="fcc gap-8 py-9">
          <Link href="">
            <DRImageCircleIcon
              src="/icons/youtube.svg"
              backgroundColor="#FFFFFF"
              imageContainerClassName="p-2"
              imageClassName="h-7 w-7"
              alt="facebook link"
            ></DRImageCircleIcon>
          </Link>
          <Link href="">
            <DRImageCircleIcon
              src="/icons/linkedin.svg"
              backgroundColor="#FFFFFF"
              imageContainerClassName="p-2"
              imageClassName="h-7 w-7"
              alt="facebook link"
            ></DRImageCircleIcon>
          </Link>
          <Link href="">
            <DRImageCircleIcon
              src="/icons/instagram.svg"
              backgroundColor="#FFFFFF"
              imageContainerClassName="p-2"
              imageClassName="h-7 w-7"
              alt="facebook link"
            ></DRImageCircleIcon>
          </Link>
          <Link href="">
            <DRImageCircleIcon
              src="/icons/facebook.svg"
              backgroundColor="#FFFFFF"
              imageContainerClassName="p-2"
              imageClassName="h-7 w-7"
              alt="facebook link"
            ></DRImageCircleIcon>
          </Link>
          <Link href="">
            <DRImageCircleIcon
              src="/icons/twitter.svg"
              backgroundColor="#FFFFFF"
              imageContainerClassName="p-2"
              imageClassName="h-7 w-7"
              alt="facebook link"
            ></DRImageCircleIcon>
          </Link>
        </div>
        {/****** Language ******/}
        <div>
          <LanguageToggle
            language={language}
            imageClassName="w-9 h-9"
          ></LanguageToggle>
        </div>
      </div>
    </BaseContainer>
  );
};

export default DRFooter;
