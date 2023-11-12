import { FC } from "react";
import { pageProps } from "@/app/[lang]/page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import ImageText from "@/components/Base/ImageText/ImageText";
import DREquipment, {
  EquipoMedicion,
} from "@/components/DancingRivers/Extensions/DREquipment";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";

import Equipos from "@@@/content/mediciones_de_campo/uhs/equipos.json";

interface UHSProps extends pageProps {}

export const UHS: FC<UHSProps> = ({ params }) => {
  let equipos = Equipos as EquipoMedicion[];
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/UHS.png"
        imageContainerClassName="h-screen w-screen"
        alt="hero image unidad hidrosedimentologica"
        title="UHS"
        subtitle="Unidad Hidrosedimentológica"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="flex flex-col gap-28 relative">
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Unidad"
            gradientText="Hidrosedimentológica"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Esta unidad consiste en obtener el transporte del sedimento suspendido en una sección transversal, para lo cual, se realiza una caracterización espacial y temporal de la concentración y distribución del tamaño de grano para el material fino (arcillas y limos) y grueso (arenas) en cinco verticales a lo largo de la sección. Esta caracterización se da a diferentes profundidades (en la vertical, en los márgenes y en el centro de las secciones hidrodinámicas o hidrogeomorfológicas)."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/mediciones_de_campo/unidades/hidrosedimentologica/uhs_image_1.png"
          imageWidth={4096}
          imageWidthPercentage={27.5}
          text="Equipo de lastre hidrodinámico y sistema de filtrado de material cohesivo y no cohesivo, para caracterizar sedimentos suspendidos en los ríos."
        ></ImageText>
        <DREquipment equipos={equipos}></DREquipment>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/metodologia/modelamiento-numerico`}
        linkText="Modelamiento Numérico"
      ></BottomLink>
    </>
  );
};

export default UHS;
