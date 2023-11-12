import { FC } from "react";
import { pageProps } from "../../page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import ImageText from "@/components/Base/ImageText/ImageText";
import DRAlignedText from "@/components/DancingRivers/AlignedText/DRAlignedText";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";

interface PacayaSamiriaProps extends pageProps {}

export const PacayaSamiria: FC<PacayaSamiriaProps> = ({ params }) => {
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/ciencia.jpeg"
        imageContainerClassName="h-screen w-screen"
        alt="hero image ciencia"
        title="La Ciencia"
        subtitle="Biodiversidad: Pacaya Samiria"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="flex flex-col gap-28 relative ">
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Biodiversidad:"
            gradientText="Pacaya Samiria"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Los bosques inundables se encuentran entre los ecosistemas más biodiversos del planeta. Estos están formados por un mosaico de humedales, lagunas y pantanos que resultan de meandros abandonados, resultado de procesos de erosión y deposición de los sedimentos. Esta riqueza estructural de ecosistemas es la base de una gran diversidad a diferentes niveles, definidos por la geomorfología del valle, pulsos de inundación, procesos ecológicos (ciclo de nutrientes) y de una elevada cantidad de especies, hábitats y ecosistemas."
            className="w-[48%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/ciencia/pacaya_samiria/la_ciencia_pacaya_samiria_image_1.png"
          imageWidth={1920}
          imageWidthPercentage={70}
          text="Mapa de los ríos de estudio: Amazonas, Huallaga, Marañon y Ucayali"
        ></ImageText>
        <DRAlignedText
          alignment="right"
          text="Los peces son las especies que dominan los ríos amazónicos y el éxito de su elevada diversidad y abundancia radica en su capacidad para aprovechar gran variedad de fuentes de energía como semillas y frutos, depredación sobre otros animales (insectos, cangrejos, caracoles, otros peces), y materia orgánica (detrito) que queda depositada en el fondo entre los sedimentos. La presencia de sedimento en el canal y en el bosque inundable de los ríos amazónicos es clave para mantener la diversidad y riqueza de especies. Otros grupo importante de fauna asociada a los ríos amazónicos está representado por los mamíferos acuáticos como los delfines de río, la nutria gigante, las tortugas acuáticas, caimanes y lagartos, y aves asociadas a los humedales."
          textWidth={49}
        ></DRAlignedText>
        <ImageText
          src="/images/ciencia/pacaya_samiria/la_ciencia_pacaya_samiria_image_2.png"
          imageWidth={3000}
          imageWidthPercentage={70}
        ></ImageText>
        <DRAlignedText
          alignment="left"
          text="Los bosques inundables representan la conexión entre el bosque y el agua, siendo la Reserva Nacional Pacaya Samiria (RNPS) la mayor evidencia de esta relación. Ubicada en la confluencia de los ríos Ucayali y Marañón, la RNPS alberga los mayores paisajes inundables de la Amazonia peruana, incluye una riqueza cultural y alta diversidad en flora y fauna silvestre."
          textWidth={50}
        ></DRAlignedText>
        <ImageText
          src="/images/ciencia/pacaya_samiria/la_ciencia_pacaya_samiria_image_3.png"
          imageWidth={1920}
          imageWidthPercentage={70}
          text="Reserva Nacional Pacaya Samiria"
        ></ImageText>
        <DRAlignedText
          alignment="right"
          text="En la época de avenida, los ríos aportan en la recarga de sedimentos finos, transportando los nutrientes y sustratos necesarios para mantener la biodiversidad de la llanura inundable que comprende cerca del 80% del área total de la reserva. Los peces tienen un mayor flujo de movimiento, actuando como agentes dispersores de semillas, asegurando la riqueza vegetal. En la época de estiaje, los niveles de caudal de los ríos Pacaya y Samiria disminuyen, generando una dinámica diferente, dando lugar al ingreso de los ríos Marañón y Ucayali, los cuales aportan nutrientes y semillas provenientes de las partes altas de la cuenca, diversificando la riqueza de la reserva."
          textWidth={49}
        ></DRAlignedText>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/metodologia/sensoramiento-remoto`}
        linkText="Sensoramiento remoto"
      ></BottomLink>
    </>
  );
};

export default PacayaSamiria;
