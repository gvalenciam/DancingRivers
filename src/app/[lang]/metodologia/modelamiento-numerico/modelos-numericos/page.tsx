import { FC } from "react";
import { pageProps } from "@/app/[lang]/page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import DRAlignedText from "@/components/DancingRivers/AlignedText/DRAlignedText";
import ImageText from "@/components/Base/ImageText/ImageText";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";

interface ModelosNumericosProps extends pageProps {}

export const ModelosNumericos: FC<ModelosNumericosProps> = ({ params }) => {
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/modelamiento_numerico.png"
        imageContainerClassName="h-screen w-screen"
        alt="hero image tipos de modelos numéricos"
        title="Metodología"
        subtitle="Tipos de modelos numéricos"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="flex flex-col gap-28 relative">
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Tipos de"
            gradientText="modelos numéricos"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Una parte fundamental del modelamiento es la discretización. Los procesos físicos, como por ejemplo el flujo dentro de un cauce o la configuración del fondo, puede considerarse como un contínuo. Sin embargo, en el proceso de modelamiento no se resuelven los parámetros del fenómeno físico en el contínuo, sino que resuelven los parámetros del fenómeno físico asociados a un volúmen, área o segmento. Las discretizaciones empleadas son tridimensionales (3D) donde se emplean volúmenes para representar el contínuo, bidimensionales (2D) , o unidimensionales (1D)."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/modelamiento_numerico/modelos_numericos/metodologia_modelos_numericos_image_1.png"
          imageWidth={3347}
          imageWidthPercentage={32.5}
          text="Discretización de modelos numéricos"
        ></ImageText>
        <BaseContainer className="fcce gap-12">
          <DRHeadingLabel
            text=""
            gradientText="3D"
            className="w-[35%] text-right"
          ></DRHeadingLabel>
          <DRAlignedText
            alignment="right"
            text="El flujo de los ríos en un proceso tridimensional, por lo que estos modelos requieren de mayor capacidad de cómputo, ya que resuelven un sistema de ecuaciones diferenciales parciales no lineales que permiten describir el movimiento de un fluido (Ecuación de Navier Stokes). Es así, que se han desarrollado muchos esquemas numéricos para resolver con precisión fenómenos de flujo tridimensionales que necesitan datos experimentales tridimensionales para realizar calibraciones. Ejemplos: Procesos de mezcla en confluencias, vórtices y remolinos entre otros."
            textWidth={48}
          ></DRAlignedText>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/modelamiento_numerico/modelos_numericos/metodologia_modelos_numericos_image_2.png"
          imageWidth={1576}
          imageWidthPercentage={55}
          text="Modelo 3D de confluencia de los ríos Ucayali y Marañon"
        ></ImageText>
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text=""
            gradientText="2D"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Los modelos bidimensionales se utilizan cuando uno de los tres componentes de velocidad es significativamente menor que los otros dos. Además no requiere mayor detalle en esa componente y por ello se puede considerar como un flujo bidimensional. Se promedian sus valores en la dimensión despreciada. (Ecuación de Shallow Water Equation) Ejemplos: Inundaciones y flujo a través de una estructura multicanal."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/modelamiento_numerico/modelos_numericos/metodologia_modelos_numericos_image_3.png"
          imageWidth={633}
          imageWidthPercentage={100}
          text="Velocidades promedio para la temporada baja, media y alta de una estructura multicanal (C.E. frias, 2015)"
        ></ImageText>
        <BaseContainer className="fcce gap-12">
          <DRHeadingLabel
            text=""
            gradientText="1D"
            className="w-[35%] text-right"
          ></DRHeadingLabel>
          <DRAlignedText
            alignment="right"
            text="Los modelos unidimensionales se utilizan cuando una de las componenetes de velocidad es preponderante sobre los demás . Este es un caso típico de ríos, donde la velocidad en la dirección de la corriente es la más significativa. (Ec. Saint-Venant 1D). Este modelo se usa cuando se quiere conocer elevaciones de agua y velocidades medias. Ejemplo: Inundaciones."
            textWidth={48}
          ></DRAlignedText>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/modelamiento_numerico/modelos_numericos/metodologia_modelos_numericos_image_4.png"
          imageWidth={1448}
          imageWidthPercentage={60}
          text="Modelo 1D del río Huallaga: cambio de nivel cerca a Lagunas"
        ></ImageText>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/educacion/eventos`}
        linkText="Eventos"
      ></BottomLink>
    </>
  );
};

export default ModelosNumericos;
