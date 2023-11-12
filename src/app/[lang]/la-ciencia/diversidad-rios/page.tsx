import { FC } from "react";
import { pageProps } from "../../page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import ImageText from "@/components/Base/ImageText/ImageText";
import DRAlignedText from "@/components/DancingRivers/AlignedText/DRAlignedText";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";

interface DiversidadRiosProps extends pageProps {}

export const DiversidadRios: FC<DiversidadRiosProps> = ({ params }) => {
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/ciencia.jpeg"
        imageContainerClassName="h-screen w-screen"
        alt="hero image ciencia"
        title="La Ciencia"
        subtitle="Diversidad de Ríos"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="fccc gap-24 relative">
        <BaseContainer className="fccs gap-14">
          <DRHeadingLabel
            text="Diversidad"
            gradientText="de Ríos"
          ></DRHeadingLabel>
          <DRTextLabel
            text="La amazonía puede dividirse en dos grandes áreas de estudio, la zona media-alta aguas arriba de los pongos, donde los ríos están confinados por la geología del valle; y la zona de la llanura amazónica donde los ríos tienen mayor libertad de movimiento lateral. Dentro de la llanura amazónica existen, principalmente, dos tipos de río: los meándricos, como el Huallaga y Ucayali, y los multicanales como el Marañón y Amazonas. El comportamiento de estos dos ríos es diferente en tasas de migración, sinuosidad y transporte de sedimentos de fondo, por lo cual se requiere un análisis particular para cada caso."
            className="w-[48%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/ciencia/diversidad/la_ciencia_diversidad_image_1.png"
          imageWidth={1920}
          imageWidthPercentage={70}
          text="Mapa de los ríos de estudio: Amazonas, Huallaga, Marañon y Ucayali"
        ></ImageText>
        {/****** TODO: Meandrico and Multicanal Section ******/}
        <DRAlignedText
          alignment="right"
          text="Con relación al transporte de sedimentos, los ríos meándricos transportan más sedimentos en suspensión que los ríos multicanal, no obstante, los multicanal presentan mayor transporte de fondo, esto se evidencia en la formación de islas. Es por ello, esencial, al momento de realizar estudios de línea base ambiental en ríos, identificar el tipo río a evaluar, su comportamiento y dinámica teniendo una visión integral de las condiciones e interacciones que estás comprenden."
          textWidth={42.5}
        ></DRAlignedText>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/la-ciencia/pacaya-samiria/`}
        linkText="Pacaya Samiria"
      ></BottomLink>
    </>
  );
};

export default DiversidadRios;
