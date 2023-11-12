import { FC } from "react";
import { pageProps } from "@/app/[lang]/page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import ImageText from "@/components/Base/ImageText/ImageText";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";
import DREquipment, {
  EquipoMedicion,
} from "@/components/DancingRivers/Extensions/DREquipment";

import Equipos from "@@@/content/mediciones_de_campo/uhg/equipos.json";

interface UHGProps extends pageProps {}

export const UHG: FC<UHGProps> = ({ params }) => {
  let equipos = Equipos as EquipoMedicion[];
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/UHG.png"
        imageContainerClassName="h-screen w-screen"
        alt="hero image unidad hidrogeomorfologica"
        title="UHG"
        subtitle="Unidad Hidrogeomorfológica"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="flex flex-col gap-28 relative">
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Unidad"
            gradientText="Hidrogeomorfológica"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Esta unidad consiste en obtener el transporte del sedimento suspendido en una sección transversal, para lo cual, se realiza una caracterización espacial y temporal de la concentración y distribución del tamaño de grano para el material fino (arcillas y limos) y grueso (arenas) en cinco verticales a lo largo de la sección. Esta caracterización se da a diferentes profundidades (en la vertical, en los márgenes y en el centro de las secciones hidrodinámicas o hidrogeomorfológicas)."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/mediciones_de_campo/unidades/hidrogeomorfologica/uhg_image_1.png"
          imageWidth={2787}
          imageWidthPercentage={27.5}
          text="La ecosonda monohaz permite conocer el perfil del fondo del río a través de mediciones puntuales. Nuestro equipo tiene una frecuencia de 200 KHz."
        ></ImageText>
        <ImageText
          src="/images/metodologia/mediciones_de_campo/unidades/hidrogeomorfologica/uhg_image_2.png"
          imageWidth={2782}
          imageWidthPercentage={27.5}
          text="La ecosonda multihaz permite conocer el perfil del fondo del río a través de mediciones por sectores. Nuestro equipo tiene una frecuencia de 600 KHz."
        ></ImageText>
        <DREquipment equipos={equipos}></DREquipment>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/metodologia/mediciones-de-campo/unidad-hidrosedimentologica`}
        linkText="Unidad Hidrosedimentológica"
      ></BottomLink>
    </>
  );
};

export default UHG;
