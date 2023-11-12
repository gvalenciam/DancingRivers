import { FC } from "react";
import { pageProps } from "../../page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import ImageText from "@/components/Base/ImageText/ImageText";
import DRAlignedText from "@/components/DancingRivers/AlignedText/DRAlignedText";
import UnitCard, { Unit } from "@/components/DancingRivers/UnitCard/UnitCard";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";
import ContainerPB from "@/components/Base/Container/Padding/ContainerPB";

import Unidades from "@@@/content/mediciones_de_campo/unidades.json";

interface MedicionesCampoProps extends pageProps {}

const renderUnits = (units: Unit[], locale: string): React.ReactElement[] => {
  return units.map((unit) => {
    return <UnitCard unit={unit} locale={locale} key={unit.name}></UnitCard>;
  });
};

export const MedicionesCampo: FC<MedicionesCampoProps> = ({ params }) => {
  let unidades = Unidades as Unit[];
  let unitCards = renderUnits(unidades, params.lang);
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/mediciones_de_campo.png"
        imageContainerClassName="h-screen w-screen"
        alt="hero image mediciones de campo"
        title="Metodología"
        subtitle="Mediciones de campo"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="flex flex-col gap-28 relative">
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Mediciones de"
            gradientText="campo"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Las mediciones de campo son uno de los procesos más importantes para obtener información de primera mano, del cual, con una adecuada planificación se logrará medir los parámetros más importantes que determinan y caracterizan a los ríos amazónicos. Todas las técnicas y metodologías aplicadas están respaldadas por estudios y trabajos relacionados con los ríos, y se dividen en tres unidades: unidad hidrodinámica, hidrogeomorfológica e hidrosedimentológica."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/mediciones_de_campo/metodologia_mediciones_de_campo_image_1.png"
          imageWidth={1560}
          imageWidthPercentage={75}
          text="Unidades de medición"
        ></ImageText>
        <BaseContainer className="fcce gap-12">
          <DRHeadingLabel
            text="Unidades de"
            gradientText="Análisis"
            className="w-[35%] text-right"
          ></DRHeadingLabel>
          <DRAlignedText
            alignment="right"
            text="Dada la interacción que existe entre el agua y sedimentos las unidades buscan caracterizar y medir esta interacción. De esta manera, la unidad hidrodinámica permite conocer los parámetros hidrodinámicos del río y sobre todo el comportamiento de las velocidades principales y secundarias."
            textWidth={48}
          ></DRAlignedText>
          <DRAlignedText
            alignment="right"
            text="Estos resultados, en conjunto con las unidades hidrogeomorfológica e hidrosedimentológica, permiten obtener y analizar completamente el transporte de sedimentos, haciendo la división entre la carga de lavado, el transporte de sedimentos suspendidos de fondo y el transporte de fondo."
            textWidth={48}
          ></DRAlignedText>
        </BaseContainer>
      </ContainerPadding>
      {/****** Units Section ******/}
      <ContainerPadding>
        <ContainerPB className="fccc gap-72">{unitCards}</ContainerPB>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/metodologia/mediciones-de-campo/unidad-hidrodinamica`}
        linkText="Unidad Hidrodinámica"
      ></BottomLink>
    </>
  );
};

export default MedicionesCampo;
