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

interface ModelamientoNumericoProps extends pageProps {}

export const ModelamientoNumerico: FC<ModelamientoNumericoProps> = ({
  params,
}) => {
  return (
    <>
      {/****** Hero Section ******/}
      <DRHeroImage
        src="/images/hero/modelamiento_numerico.png"
        imageContainerClassName="h-screen w-screen"
        alt="hero image modelamiento numérico"
        title="Metodología"
        subtitle="Modelamiento Numérico"
      ></DRHeroImage>
      {/****** Description Section ******/}
      <ContainerPadding className="flex flex-col gap-28 relative">
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Modelamiento"
            gradientText="Numérico"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="El modelamiento hidrogeomorfológico es una técnica que nos permite representar la realidad de forma aproximada, con el cual podemos predecir desde el movimiento de las moléculas de agua y partículas de sedimentos suspendidos y de fondo hasta los cambios morfológicos del lecho y márgenes de los ríos. Este modelamiento se complementa a las mediciones de campo y otros procesos físicos más complejos de monitorear. Asimismo también llegan a predecir la dinámica futura de los ríos y los potenciales cambios que podrían producir el desarrollo de infraestructura fluvial en el territorio."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/modelamiento_numerico/metodologia_modelamiento_numerico_image_1.png"
          imageWidth={2048}
          imageWidthPercentage={42.5}
          text="Modelo 1D del Río Huallaga. Resultados de velocidades"
        ></ImageText>
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Criterios de"
            gradientText="modelamiento"
            className="w-[35%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Construir y modelar los procesos físicos (fenómenos hidromorfológicos) necesitan de algunas simplificaciones y suposiciones para expresar la comprensión del comportamiento del caso de estudio. Se conoce que los ríos transportan agua, sedimentos finos suspendidos y sedimentos gruesos, y formas de fondo."
            className="w-[43.5%]"
          ></DRTextLabel>
          <DRTextLabel
            text="Para poder representar estas condiciones en modelos numéricos se deben proporcionar correctamente las condiciones iniciales y de borde. Las condiciones iniciales y de borde, son parámetros de ingreso y limitaciones que se definen en el modelo previo a empezar la simulación. Esto dependerá según el proceso físico que se quiere modelar y el modelo numérico elegido."
            className="w-[43.5%]"
          ></DRTextLabel>
        </BaseContainer>
        <ImageText
          src="/images/metodologia/modelamiento_numerico/metodologia_modelamiento_numerico_image_2.png"
          imageWidth={1600}
          imageWidthPercentage={60}
          text="Modelo 1D del Río Huallaga. Resultados de velocidades"
        ></ImageText>
        <BaseContainer className="fcce gap-12">
          <DRHeadingLabel
            text="Calibración de"
            gradientText="modelos"
            className="w-[35%] text-right"
          ></DRHeadingLabel>
          <DRAlignedText
            alignment="right"
            text="La calibración del modelo numérico es muy importante ya que nos permite saber su exactitud para una aplicación concreta. Debido a la complejidad de los procesos físicos, su representación numérica requiere formulaciones que deben ser calibradas con datos experimentales o de campo para tener resultados confiables. De esta forma, es posible brindar soluciones optimizadas. Los datos requeridos para la validación dependen del tipo de modelo utilizado, que pueden ser modelos 1D, 2D o 3D."
            textWidth={48}
          ></DRAlignedText>
        </BaseContainer>
        <BaseContainer className="fccs gap-12">
          <DRHeadingLabel
            text="Representación de los"
            gradientText="procesos físicos"
            className="w-[40%]"
          ></DRHeadingLabel>
          <DRTextLabel
            text="Los procesos físicos que ocurren en el entorno de un río incluyen escalas temporales y espaciales que continuamente están interactuando entre ellas. Además estos procesos físicos están presentes en los entornos de agua, sedimentos y morfología. La importancia de identificar las escalas en los procesos físicos que se requiere representar nos ayudará a elegir el tipo de modelo (1D, 2D o 3D) así como el tiempo óptimo de simulación."
            className="w-[49%]"
          ></DRTextLabel>
        </BaseContainer>
      </ContainerPadding>
      {/****** Next Section ******/}
      <BottomLink
        href={`/${params.lang}/metodologia/modelamiento-numerico/escala-analisis`}
        linkText="Escala de análisis"
      ></BottomLink>
    </>
  );
};

export default ModelamientoNumerico;
