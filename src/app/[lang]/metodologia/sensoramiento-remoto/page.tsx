import React, { FC } from "react";
import { pageProps } from "../../page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import ImageText from "@/components/Base/ImageText/ImageText";
import DRAlignedText from "@/components/DancingRivers/AlignedText/DRAlignedText";
import ContainerPY from "@/components/Base/Container/Padding/ContainerPY";
import DRParameters from "@/components/DancingRivers/Extensions/DRParameters";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";

interface SensoramientoRemotoProps extends pageProps {}

export const SensoramientoRemoto: FC<SensoramientoRemotoProps> = ({
  params,
}) => {
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/metodologia.png"
        imageContainerClassName="h-screen w-screen"
        alt="hero image ciencia"
        title="Metodología"
        subtitle="Sensoramiento Remoto"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="flex flex-col gap-28 relative">
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Análisis"
            gradientText="Multitemporal"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="El análisis multitemporal es una etapa de suma importancia para el monitoreo de los ríos, siendo el primer paso a realizar en cualquier estudio técnico. Mediante la técnica de sensoramiento remoto, es posible procesar imágenes satelitales para obtener información espacial de un momento específico."
            className="w-[43.5%]"
          ></DRTextLabel>
          <DRTextLabel
            text="Aplicando el análisis multitemporal, se accede a información espacial y temporal de los cambios en la forma y estructura de los ríos, generando data cualitativa y cuantitativa de estas dinámicas en el tiempo. Este análisis genera un conocimiento más amplio sobre la historia y cambios en la geomorfología de los ríos, con la cual es posible tomar decisiones más acertadas respecto a cómo intervenir en el ecosistema o a delimitar puntos de mediciones para un estudio."
            className="w-[43%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/sensoramiento_remoto/metodologia_sensoramiento_remoto_image_1.png"
          imageWidth={1188}
          imageWidthPercentage={100}
          text="Río Amazonas del 1987 al 2017"
        ></ImageText>
        <BaseContainer className="fcce gap-12">
          <DRHeadingLabel
            text="Criterios de"
            gradientText="Análisis"
            className="w-[35%] text-right"
          ></DRHeadingLabel>
          <DRAlignedText
            alignment="right"
            text="Para el análisis multitemporal de ríos amazónicos se deben de tener en cuenta ciertos criterios que garanticen que el análisis sea el más idóneo, acorde a los objetivos de la investigación, iniciativa o proyecto. Esto implica identificar el alcance espacial (delimitar el área de interés, identificar el tipo de río a analizar y ubicarlo dentro de la cuenca) y temporal (determinar el intervalo de estudio y considerar el ciclo hidrológico) del estudio, así como las actividades antrópicas que se desarrollan en la zona (deforestación, minería, entre otras)."
            textWidth={48}
          ></DRAlignedText>
        </BaseContainer>
        {/****** Parameters Section ******/}
        <ContainerPY className="fccc gap-24">
          <BaseContainer className="fccc gap-14">
            <DRHeadingLabel gradientText="Parámetros" text=""></DRHeadingLabel>
            <DRTextLabel
              text="Los parámetros de análisis son elegidos de acuerdo al tipo de río, meándrico o multicanal, en la cuenca baja o alta. Algunos parámetros serán compartidos por ambos tipos de ríos, mientras que otros serán específicos para un solo tipo, variando el procesamiento y análisis que se vaya a realizar."
              className="w-[52.5%] text-center"
            ></DRTextLabel>
          </BaseContainer>
          <DRParameters></DRParameters>
        </ContainerPY>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/metodologia/mediciones-de-campo/`}
        linkText="Mediciones de campo"
      ></BottomLink>
    </>
  );
};

export default SensoramientoRemoto;
