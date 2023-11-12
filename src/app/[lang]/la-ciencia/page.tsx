import { FC } from "react";
import { pageProps } from "../page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import ImageText from "@/components/Base/ImageText/ImageText";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";
import ContainerPX from "@/components/Base/Container/Padding/ContainerPX";

interface CienciaProps extends pageProps {}

export const Ciencia: FC<CienciaProps> = ({ params }) => {
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/ciencia.jpeg"
        imageContainerClassName="h-screen w-screen"
        alt="hero image ciencia"
        title="La Ciencia"
        subtitle="Conectividad Andes-Atlántico"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="relative ">
        <BaseContainer className="fccs gap-14 w-1/2">
          <DRHeadingLabel
            text="Conectividad"
            gradientText="Andes-Atlántico"
            className="w-2/3"
          ></DRHeadingLabel>
          <DRTextLabel text="Los ríos amazónicos conectan los Andes con el Océano Atlántico. A lo largo de su recorrido por varios miles de kilómetros, el río tiene diferentes características geomorfológicas. En la parte alta y media, el río fluye en un valle confinado, caracterizado por tener un fondo compuesto por grandes rocas y/o cantos rodados, y atraviesa una topografía con mayores pendientes, lo cual se evidencia por las fuertes velocidades del río. La presencia de sedimentos suspendidos es escasa en este recorrido, manteniendo estas características hasta que alcanzan los pongos (sección del cauce angosta y profunda), para luego ingresar a la llanura amazónica."></DRTextLabel>
        </BaseContainer>
      </ContainerPadding>
      {/****** Image Section ******/}
      <BaseContainer className="fcc">
        <ImageText
          src="/images/ciencia/la_ciencia_image_1.png"
          imageWidth={1704}
          imageWidthPercentage={50}
        ></ImageText>
      </BaseContainer>
      {/****** Description Section ******/}
      <ContainerPadding className="relative">
        <BaseContainer className="fcce">
          <BaseContainer className="w-1/2">
            <DRTextLabel text="En ella, el río fluye en medio de un vasto valle con baja pendiente sin mayor confinamiento, moviéndose libremente e inundando estacionalmente cada año el bosque. En esta parte el río tiene menores velocidades, su cauce está formado por arenas y transporta sedimentos en suspensión que le dan un color marrón al agua. Este recorrido termina en el Océano Atlántico, en donde el río Amazonas descarga toda el agua y sedimento que ha ido recogiendo desde los Andes, los cuales son depositados al norte de Brasil, y permite la formación de los bosques de manglares que caracterizan a esta región."></DRTextLabel>
          </BaseContainer>
        </BaseContainer>
      </ContainerPadding>
      {/****** Image Section ******/}
      <ContainerPX>
        <ImageText
          src="/images/ciencia/la_ciencia_image_2.png"
          imageWidth={4096}
          imageWidthPercentage={100}
        ></ImageText>
      </ContainerPX>
      {/****** Description Section ******/}
      <ContainerPadding>
        <BaseContainer className="w-1/2">
          <DRTextLabel text="Los ríos conectan hábitats y ecosistemas, lo que permite que flora y fauna acuática completen su ciclo de vida. Una de las mayores evidencias se da en los peces migratorios. Esta conectividad facilita a los peces adultos acceso a hábitats críticos, como zonas de reproducción, alimentación y crecimiento. Algunos peces deben recorrer miles de kilómetros río arriba hasta las cabeceras para reproducirse en el piedemonte andino. Otras especies que habitan cochas y tributarios del bosque inundable, migran menores distancias hacia las confluencias con los grandes ríos."></DRTextLabel>
          <br></br>
          <br></br>
          <DRTextLabel text="Los ríos amazónicos controlan muchos procesos biológicos y ecológicos. El no tener en cuenta esta característica de conexión al momento del desarrollo de infraestructura, impide identificar los impactos a gran escala que se pueden estar desarrollando."></DRTextLabel>
        </BaseContainer>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/la-ciencia/sedimentos/`}
        linkText="Sedimentos"
      ></BottomLink>
    </>
  );
};

export default Ciencia;
