import { FC } from "react";
import { pageProps } from "@/app/[lang]/page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import ImageText from "@/components/Base/ImageText/ImageText";
import DRAlignedText from "@/components/DancingRivers/AlignedText/DRAlignedText";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";

interface EscalaAnalisisProps extends pageProps {}

export const EscalaAnalisis: FC<EscalaAnalisisProps> = ({ params }) => {
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/modelamiento_numerico.png"
        imageContainerClassName="h-screen w-screen"
        alt="hero image modelamiento numérico"
        title="Metodología"
        subtitle="Escala de análisis de los procesos"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="flex flex-col gap-28 relative">
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text=""
            gradientText="Agua"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="En la escala más pequeña, tanto temporal como espacial, se encuentran las estructuras turbulentas en los ríos, pueden ser turbulencias o remolinos, se desarrollan en periodos de segundos, y usualmente tienen longitudes desde milímetros hasta metros, alcanzando valores desde 20 metros. Normalmente se usan modelos 3D para simular fenómenos con estas escalas, por medio de modelos de turbulencia. A escalas más grandes están la simulación del tránsito de avenidas e inundaciones, que pueden ser representados con modelos 2D y 1D."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <BaseContainer className="fcce gap-12">
          <DRHeadingLabel
            text=""
            gradientText="Sedimentos"
            className="w-[35%] text-right"
          ></DRHeadingLabel>
          <DRAlignedText
            alignment="right"
            text="En primer lugar, los sedimentos suspendidos son transportados en el flujo por medio del proceso de convección con las velocidades media y turbulenta del agua. Además, el proceso se desarrolla en intervalos de tiempo de segundos a minutos. Por otro lado, los sedimentos de fondo (el transporte del material no cohesivo como arenas) ocurre con las partículas de sedimento, que se deslizan, ruedan o dan pequeños saltos en distancias ya sea en milímetros o centímetros, en el transcurso de pocos segundos."
            textWidth={48}
          ></DRAlignedText>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/modelamiento_numerico/escala_analisis/metodologia_escala_analisis_image_1.png"
          imageWidth={1828}
          imageWidthPercentage={50}
          text="Proceso de transporte de los sedimentos"
        ></ImageText>
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text=""
            gradientText="Morfología"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="La morfología de fondo de ríos que se basa en formas de fondo (dunas, rizos y barras), las cuales migran constantemente de acuerdo con la dirección dominante del flujo. Los rizos pueden desplazarse algunos metros en escalas de tiempo de horas, mientras que las dunas con alturas de centímetros a metros, se desplazan algunos metros en intervalos de tiempo que pueden comprender días. Por otro lado, la morfología planimétrica está constituida por la hidrodinámica del flujo que está determinada en parte por la morfología de fondo y la forma en planta de los ríos, que dicta las zonas de erosión y sedimentación."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/modelamiento_numerico/escala_analisis/metodologia_escala_analisis_image_2.png"
          imageWidth={2135}
          imageWidthPercentage={42.5}
          text="Formas de fondo que están presentes en ríos y canales según el régimen de flujo"
        ></ImageText>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/metodologia/modelamiento-numerico/modelos-numericos`}
        linkText="Tipos de modelos numéricos"
      ></BottomLink>
    </>
  );
};

export default EscalaAnalisis;
