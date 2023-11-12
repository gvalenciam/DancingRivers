import { FC } from "react";
import { pageProps } from "../../page";
import DRHeroImage from "@/components/DancingRivers/HeroImage/DRHeroImage";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import DRTextLabel from "@/components/DancingRivers/Label/DRTextLabel";
import DRHeadingLabel from "@/components/DancingRivers/Label/DRHeadingLabel";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import ImageText from "@/components/Base/ImageText/ImageText";
import DRAlignedText from "@/components/DancingRivers/AlignedText/DRAlignedText";
import BottomLink from "@/components/DancingRivers/BottomLink/BottomLink";

interface SedimentosProps extends pageProps {}

export const Sedimentos: FC<SedimentosProps> = ({ params }) => {
  return (
    <div>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/ciencia.jpeg"
        imageContainerClassName="h-screen w-screen"
        alt="hero image ciencia"
        title="La Ciencia"
        subtitle="Sedimentos"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="fccc gap-28">
        <BaseContainer className="fccc gap-14">
          <DRHeadingLabel
            text="Los ríos transportan"
            gradientText="sedimentos"
            className="w-1/2 text-center"
          ></DRHeadingLabel>
          <DRTextLabel
            text="El río está constituido por varios componentes, siendo los más importantes los físicos, específicamente el agua y los sedimentos, ya que su interacción define la geomorfología del río."
            className="w-[57.5%] text-center"
          ></DRTextLabel>
          <ImageText
            src="/images/ciencia/sedimentos/la_ciencia_sedimentos_image_1.png"
            imageWidth={1920}
            imageWidthPercentage={50}
          ></ImageText>
        </BaseContainer>
        <BaseContainer className="fccc gap-24">
          <DRAlignedText
            text={
              'La cantidad de agua o caudal de un río depende de las precipitaciones que existen en toda el área de su cuenca, siendo posible diferenciar dos estaciones caracterizadas por meses secos y de lluvia. En el caso de los sedimentos, se dividen en grueso (grava y arena), el cual se encarga de conformar la "arquitectura natural" de la mayoría de los lechos de los ríos, y el fino (limo y arcilla), presente en los ríos de manera suspendida definiendo la química del cuerpo de agua.'
            }
            alignment="left"
            textWidth={52.5}
          ></DRAlignedText>
          <ImageText
            src="/images/ciencia/sedimentos/la_ciencia_sedimentos_image_2.png"
            imageWidth={1920}
            imageWidthPercentage={62.5}
            text="Diámetro de sedimentos de mayor (izquierda) a menor (derecha) altura"
          ></ImageText>
          <DRAlignedText
            text="De esta manera, el río no solamente transporta agua sino también sedimentos. Sin embargo, aunque exista una relación directa del transporte de agua y de sedimentos, es decir, a mayor cantidad de agua mayor cantidad de sedimentos, la manera de desplazarse es distinta. De manera figurativa, podríamos decir que el ritmo de la música es el mismo, pero la forma de bailar del agua y los sedimentos es distinto."
            alignment="right"
            textWidth={47.5}
          ></DRAlignedText>
        </BaseContainer>
        <BaseContainer className="fccc gap-28">
          <ImageText
            src="/images/ciencia/sedimentos/la_ciencia_sedimentos_image_3.jpg"
            imageWidth={1210}
            imageWidthPercentage={80}
            text="Fuente: Goulding, M. (2003). The Smithsonian Atlas of the Amazon. Washington: Smithsonian Books."
          ></ImageText>
          <DRAlignedText
            text="La importancia de estudiar esta relación y caracterización en nuestros ríos es fundamental para entender el comportamiento de los principales agentes de cambios naturales en su morfología. El desconectar el paso de sedimentos gruesos provoca una erosión del cauce, esto se observa en los puentes, reservorios y otras estructuras que bloquean o reducen el ancho natural del río. Los cambios en el lecho degradan la calidad del hábitat acuático, incluida la pérdida de gravas necesarias para el desove de los peces. Los sedimentos finos toman gran importancia en las llanuras de inundación y en los estuarios o lagunas, siendo los que definen la turbidez del agua, además, permiten el transporte de nutrientes y la calidad del agua. Es por ello necesario su medición y monitoreo sistemático, previo a desarrollar proyectos de infraestructura."
            alignment="left"
            textWidth={46}
          ></DRAlignedText>
        </BaseContainer>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/la-ciencia/diversidad-rios/`}
        linkText="Diversidad de Ríos"
      ></BottomLink>
    </div>
  );
};

export default Sedimentos;
