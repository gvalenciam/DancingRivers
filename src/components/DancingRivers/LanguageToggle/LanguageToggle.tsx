"use client";

import Image from "next/image";
import { FC } from "react";
import BaseLabel from "@/components/Base/Label/BaseLabel";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LanguageToggleProps {
  imageClassName?: string;
  language: string;
}

enum Locales {
  english = "en",
  spanish = "es",
}

const isLanguageEN = (language: string): boolean => {
  return language === Locales.english;
};

const rewritePathnameLocale = (pathname: string): string => {
  // Split pathname divided by "/" => e.g. /es/la-ciencia/ => ["", "es", "la-ciencia"]
  let split = pathname.split("/");
  // Remove locale element ["", "es", "la-ciencia"] => splice(1,1) => ["", "la-ciencia"]
  split.splice(1, 1);
  // Create string from previous array adding "/" as divider => ["", "la-ciencia"] => join => /la-ciencia
  return split.join("/");
};

export const LanguageToggle: FC<LanguageToggleProps> = ({
  language,
  imageClassName,
}) => {
  const pathname = usePathname();
  const isEnglish = isLanguageEN(language);
  const newPathname = rewritePathnameLocale(pathname);
  return (
    <div className="fcc gap-5">
      {/****** Globe Image ******/}
      <Image
        src="/icons/web.svg"
        width={0}
        height={0}
        style={{ height: "auto" }}
        className={imageClassName}
        alt="globe icon"
      ></Image>
      {/****** Language options ******/}
      <div className="fcc gap-2 text-[18px]">
        <Link href={`/${Locales.english}/${newPathname}/`}>
          <BaseLabel
            text="EN"
            className={`text-white ${isEnglish ? "font-bold" : "font-thin"}`}
            format="textClean"
          ></BaseLabel>
        </Link>
        <BaseLabel text="|" className="font-normal text-white"></BaseLabel>
        <Link href={`/${Locales.spanish}/${newPathname}/`}>
          <BaseLabel
            text="ES"
            className={`text-white ${isEnglish ? "font-thin" : "font-bold"}`}
            format="textClean"
          ></BaseLabel>
        </Link>
      </div>
    </div>
  );
};

export default LanguageToggle;
