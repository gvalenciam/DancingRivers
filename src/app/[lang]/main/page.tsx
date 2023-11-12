import { FC } from "react";
import { pageProps } from "../page";
import Image from "next/image";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import BaseLabel from "@/components/Base/Label/BaseLabel";
import DRButtonLink from "@/components/DancingRivers/Button/DRButtonLink";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import StatisticCard from "@/components/DancingRivers/StatisticCard/StatisticCard";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ImageText from "@/components/Base/ImageText/ImageText";

interface MainPageProps extends pageProps {}

export const MainPage: FC<MainPageProps> = ({ params }) => {
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/home.jpeg"
        imageContainerClassName="h-screen w-screen"
        alt="hero image home"
        title="Ríos Danzantes en la Cuenca Amazónica"
        titleClassName="tm50 text-white opacity-90"
        subtitle="La ciencia detrás del movimiento de los ríos"
        subtitleClassName="text-[85px] leading-tight main-heading-font text-white font-black"
        textAlignment="leftC"
        textContainerAlignment="left"
        textContainerClassName="w-2/3"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="relative">
        <div className="absolute fes h-full w-full top-0 right-0 pointer-events-none">
          <Image
            src="/images/leaf.svg"
            width={0}
            height={0}
            style={{ width: "80%", height: "auto" }}
            alt="Leaf illustration"
            priority
          ></Image>
        </div>
        <BaseContainer className="fccs gap-14 w-1/2">
          <DRHeadingLabel
            text="Ríos Danzantes en la"
            gradientText="Cuenca Amazónica"
          ></DRHeadingLabel>
          <DRTextLabel text="Este portal recoge la">
            <span className="font-medium">
              {" "}
              investigación, análisis y metodología{" "}
            </span>
            <span>
              desarrollada para caracterizar la morfodinámica planimétrica
              (análisis espacial con sensoramiento remoto) y altimétrica
              (descripción de las formas del lecho del río y el transporte de
              sedimentos) de los principales ríos amazónicos:
            </span>
            <span className="font-medium">
              {" "}
              Marañón, Huallaga, Ucayali y Amazonas{" "}
            </span>
            <span>
              con el propósito de conocer y comprender mejor su dinámica física.
            </span>
          </DRTextLabel>
          <DRButtonLink
            text="Conoce la ciencia detrás de los ríos"
            href="/ciencia"
          ></DRButtonLink>
        </BaseContainer>
      </ContainerPadding>
      {/****** Visualizer Section ******/}
      <ContainerPadding className="fccc gap-14">
        <DRHeadingLabel text="Mapa de" gradientText="Datos"></DRHeadingLabel>
        <BaseLabel
          className="tt10 opacity-90 leading-10 text-center w-3/5"
          text="Ríos Danzantes es el"
          format="text"
        >
          <span className="font-medium"> primer portal web interactivo </span>
          <span>
            que reúne datos obtenidos en campo y resultados del análisis de
            imágenes de satélite sobre la
          </span>
          <span className="font-medium">
            {" "}
            dinámica hidrogeomorfológica de los ríos.
          </span>
        </BaseLabel>
        <ImageText
          src="/images/visualizer.svg"
          imageWidthPercentage={80}
        ></ImageText>
        <DRButtonLink
          text="Conoce el Mapa de Datos"
          href="/fonts"
        ></DRButtonLink>
      </ContainerPadding>
      {/****** Statistics Section ******/}
      <ContainerPadding className="fccc gap-48">
        <DRHeadingLabel
          text="Nuestras"
          gradientText="Estadísticas"
        ></DRHeadingLabel>
        <div className="fcc gap-36 pr-[175px]">
          <StatisticCard
            text="Inicio de mediciones de campo"
            numberText="2018"
            circleClassName="w-[135px] h-[135px] p-8 fill-black"
            imageBackgroundColor=""
          ></StatisticCard>
          <StatisticCard
            text="Kilómetros amazónicos estudiados"
            numberText="5000"
            circleClassName="w-[135px] h-[135px] p-8"
            imageBackgroundColor=""
          ></StatisticCard>
        </div>
        <div className="fcc gap-36 pl-[175px]">
          <StatisticCard
            text="Años de analisis multitemporal"
            numberText="30"
            circleClassName="w-[135px] h-[135px] p-8"
            imageBackgroundColor=""
          ></StatisticCard>
          <StatisticCard
            text="Charlas y talleres dictados"
            numberText="20+"
            circleClassName="w-[135px] h-[135px] p-8"
            imageBackgroundColor=""
          ></StatisticCard>
        </div>
      </ContainerPadding>
      {/****** Team Section ******/}
      <ContainerPadding className="fcce gap-14">
        <DRHeadingLabel text="Nuestro" gradientText="Equipo"></DRHeadingLabel>
        <DRTextLabel
          text="Este portal recoge la investigación, análisis y metodología desarrollada para caracterizar la morfodinámica planimétrica (análisis espacial con sensoramiento remoto)"
          className="text-right w-[55%]"
        ></DRTextLabel>
        <DRButtonLink text="Conócenos" href="/equipo"></DRButtonLink>
      </ContainerPadding>
    </>
  );
};

export default MainPage;
