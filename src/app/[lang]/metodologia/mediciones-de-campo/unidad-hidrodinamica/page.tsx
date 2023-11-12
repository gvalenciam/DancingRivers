import { FC } from "react";
import { pageProps } from "@/app/[lang]/page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import ImageText from "@/components/Base/ImageText/ImageText";
import DRAlignedText from "@/components/DancingRivers/AlignedText/DRAlignedText";
import BaseLink from "@/components/Base/Link/BaseLink";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";
import DREquipment, {
  EquipoMedicion,
} from "@/components/DancingRivers/Extensions/DREquipment";

import Equipos from "@@@/content/mediciones_de_campo/uhd/equipos.json";

interface UHDProps extends pageProps {}

export const UHD: FC<UHDProps> = ({ params }) => {
  let equipos = Equipos as EquipoMedicion[];
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/UHD.png"
        imageContainerClassName="h-screen w-screen"
        alt="hero image unidad hidrodinamica"
        title="UHD"
        subtitle="Unidad Hidrodinámica"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="flex flex-col gap-28 relative">
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Unidad"
            gradientText="Hidrodinámica"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Permite obtener la cantidad de agua (caudal) y distribución de velocidades que pasa en una sección transversal del río. De esta manera, se conocen las corrientes principales y secundarias del río, permitiendo visualizar la estructura coherente del flujo, y también estimar (basado en previa calibración) el transporte de suspensión de fondo. Además, ayuda a definir los puntos de muestreo de sedimentos suspendidos y de fondo en la sección transversal del río."
            className="w-[43.5%]"
          ></DRTextLabel>
          <DRTextLabel
            text="La unidad hidrodinámica es importante para el monitoreo de cuerpos de agua, ya que nos proporciona información in situ de algunos parámetros físicos que son usados para diversos fines de estudio e ingeniería."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/mediciones_de_campo/unidades/hidrodinamica/uhd_image_1.png"
          imageWidth={4096}
          imageWidthPercentage={27.5}
          text="Uso de equipo hidroacústico para conocer el comportamiento del flujo principal y secundario del río, medido a través de secciones transversales."
        ></ImageText>
        {/****** LSPIV Section ******/}
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Monitoreo de ríos:"
            gradientText="LSPIV"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Saber los parámetros de caudal, velocidad y nivel de agua durante un año hidrológico nos ayudan a conocer el comportamiento hidrodinámico del río. Sin embargo, las condiciones geográficas, de comunicación y transporte no permiten la toma datos periódicamente. Por esta razón, desarrollamos una metodología de monitoreo remoto no intrusiva basada en la toma de videos periódicos para la obtención de niveles y velocidades superficiales."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/mediciones_de_campo/unidades/hidrodinamica/uhd_image_2.png"
          imageWidth={758}
          imageWidthPercentage={100}
          text="Sistema de monitoreo LSPIV"
        ></ImageText>
        <DRAlignedText
          alignment="right"
          text="El registro de video se realiza mediante una estación fija LSPIV (Large Scale Particle Image Velocity) , que permite la grabación de un video y su subida al internet para su posterior análisis. El procesamiento de los videos se realiza utilizando el software PIVLab y RIVeR. Sin embargo, debido a las condiciones naturales de cada río, los resultados deben ser calibrados con mediciones empleando equipos convenciones (correntómetros, ADV y ADCP)."
          textWidth={42.5}
        ></DRAlignedText>
        <ImageText
          src="/images/metodologia/mediciones_de_campo/unidades/hidrodinamica/uhd_gif_1.gif"
          imageWidth={810}
          imageWidthPercentage={100}
          text="Vectores de velocimetrìa procesados"
        ></ImageText>
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel text="Referencias" gradientText=""></DRHeadingLabel>
          {/****** Reference Section ******/}
          <BaseContainer className="fccs gap-2">
            <li>
              <BaseLink
                text="PIVlab - particle image velocimetry (PIV) tool with GUI"
                href="https://github.com/Shrediquette/PIVlab#pivlab---particle-image-velocimetry-piv-tool-with-gui"
                navigation="external"
              ></BaseLink>
            </li>
            <li>
              <BaseLink
                text="Rectification of Image Velocity Results (RIVeR)"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0098300417307045"
                navigation="external"
              ></BaseLink>
            </li>
          </BaseContainer>
        </BaseContainer>
        <DREquipment equipos={equipos}></DREquipment>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/metodologia/mediciones-de-campo/unidad-hidrogeomorfologica`}
        linkText="Unidad Hidrogeomorfológica"
      ></BottomLink>
    </>
  );
};

export default UHD;
