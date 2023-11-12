"use client";

import { FC } from "react";
import { useState, useMemo } from "react";
import ImageCircleIcon from "@/components/Base/ImageCircleIcon/ImageCircleIcon";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import ImageText from "@/components/Base/ImageText/ImageText";
import DRTextLabel from "../Label/DRTextLabel";
import ContainerPX from "@/components/Base/Container/Padding/ContainerPX";

interface DRParametersProps {}

type RiverType = "multicanal" | "meandrico";

interface Parameter {
  iconDefault: string;
  iconSelected: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  type: RiverType[];
}

const parameters: Parameter[] = [
  {
    iconDefault: "/icons/buttonArrowBlack.svg",
    iconSelected: "/icons/buttonArrow.svg",
    title: "Ancho promedio",
    description:
      "Las islas son barras transversales o longitudinales que sobresalen de la superficie del río y que, luego de su formación, se mantienen relativamente estables en comparación de ciertas barras que desaparecen entre un período y otro. ",
    image:
      "/images/metodologia/sensoramiento_remoto/parametros/ancho_promedio.png",
    imageWidth: 780,
    type: ["meandrico", "multicanal"],
  },
  {
    iconDefault: "/icons/buttonArrowBlack.svg",
    iconSelected: "/icons/buttonArrow.svg",
    title: "Migración",
    description:
      "Indica la variación de la ubicación de la línea central del río, respecto a su dirección y distancia, de un periodo de tiempo respecto a otro. Muestra la actividad del río, proporcionando información para temas de planificación territorial de centros poblados y áreas productivas.",
    image: "/images/metodologia/sensoramiento_remoto/parametros/migracion.png",
    imageWidth: 780,
    type: ["meandrico", "multicanal"],
  },
  {
    iconDefault: "/icons/buttonArrowBlack.svg",
    iconSelected: "/icons/buttonArrow.svg",
    title: "Ancho promedio 3",
    description:
      "Las islas son barras transversales o longitudinales que sobresalen de la superficie del río y que, luego de su formación, se mantienen relativamente estables en comparación de ciertas barras que desaparecen entre un período y otro. ",
    image: "/images/metodologia/sensoramiento_remoto/parametros/migracion.png",
    imageWidth: 780,
    type: ["meandrico", "multicanal"],
  },
  {
    iconDefault: "/icons/buttonArrowBlack.svg",
    iconSelected: "/icons/buttonArrow.svg",
    title: "Ancho promedio 4",
    description:
      "Las islas son barras transversales o longitudinales que sobresalen de la superficie del río y que, luego de su formación, se mantienen relativamente estables en comparación de ciertas barras que desaparecen entre un período y otro. ",
    image:
      "/images/metodologia/sensoramiento_remoto/parametros/ancho_promedio.png",
    imageWidth: 780,
    type: ["meandrico", "multicanal"],
  },
  {
    iconDefault: "/icons/buttonArrowBlack.svg",
    iconSelected: "/icons/buttonArrow.svg",
    title: "Ancho promedio 5",
    description:
      "Las islas son barras transversales o longitudinales que sobresalen de la superficie del río y que, luego de su formación, se mantienen relativamente estables en comparación de ciertas barras que desaparecen entre un período y otro. ",
    image:
      "/images/metodologia/sensoramiento_remoto/parametros/ancho_promedio.png",
    imageWidth: 780,
    type: ["meandrico", "multicanal"],
  },
  {
    iconDefault: "/icons/buttonArrowBlack.svg",
    iconSelected: "/icons/buttonArrow.svg",
    title: "Ancho promedio 6",
    description:
      "Las islas son barras transversales o longitudinales que sobresalen de la superficie del río y que, luego de su formación, se mantienen relativamente estables en comparación de ciertas barras que desaparecen entre un período y otro. ",
    image:
      "/images/metodologia/sensoramiento_remoto/parametros/ancho_promedio.png",
    imageWidth: 780,
    type: ["meandrico", "multicanal"],
  },
  {
    iconDefault: "/icons/buttonArrowBlack.svg",
    iconSelected: "/icons/buttonArrow.svg",
    title: "Ancho promedio 7",
    description:
      "Las islas son barras transversales o longitudinales que sobresalen de la superficie del río y que, luego de su formación, se mantienen relativamente estables en comparación de ciertas barras que desaparecen entre un período y otro. ",
    image:
      "/images/metodologia/sensoramiento_remoto/parametros/ancho_promedio.png",
    imageWidth: 780,
    type: ["meandrico", "multicanal"],
  },
];

const renderParametersButtons = (
  parameters: Parameter[],
  selectedIndex: number,
  onClick: (index: number) => void
): React.ReactElement => {
  let buttons = parameters.map((parameter, index) => {
    let selected = index === selectedIndex;
    return (
      <ImageCircleIcon
        src={selected ? parameter.iconSelected : parameter.iconDefault}
        imageContainerClassName="w-20 h-20 p-5"
        backgroundColor={`${selected ? "" : "white"}`}
        key={parameter.title}
        alt={parameter.title}
        onClick={() => onClick(index)}
      ></ImageCircleIcon>
    );
  });
  return (
    <BaseContainer className="flex justify-evenly gap-5 w-full">
      {buttons}
    </BaseContainer>
  );
};

const renderParameterContent = (
  parameters: Parameter[],
  selectedIndex: number
): React.ReactElement | null => {
  let parameter = parameters.find((_, index) => index === selectedIndex);
  if (parameter) {
    return (
      <BaseContainer className="fcs gap-20">
        <ImageText
          src={parameter.image}
          imageWidth={parameter.imageWidth}
          imageWidthPercentage={80}
          minWidthPX={parameter.imageWidth}
        ></ImageText>
        <BaseContainer className="fcss gap-6">
          <DRTextLabel text={parameter.title} className="tb50"></DRTextLabel>
          <DRTextLabel text={parameter.description}></DRTextLabel>
        </BaseContainer>
      </BaseContainer>
    );
  } else {
    return null;
  }
};

export const DRParameters: FC<DRParametersProps> = ({}) => {
  const [selectedParameter, setSelectedParameter] = useState(0);

  const content = useMemo(
    () => renderParameterContent(parameters, selectedParameter),
    [selectedParameter]
  );
  const buttons = useMemo(
    () =>
      renderParametersButtons(
        parameters,
        selectedParameter,
        setSelectedParameter
      ),
    [selectedParameter]
  );
  return (
    <>
      <ContainerPX className="fccc gap-24">
        {buttons}
        {content ? content : null}
      </ContainerPX>
    </>
  );
};

export default DRParameters;
