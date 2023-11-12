import { FC } from "react";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRHeadingLabel from "../Label/DRHeadingLabel";
import DRTextLabel from "../Label/DRTextLabel";

export interface EquipoMedicion {
  name: string;
}

interface DREquipmentProps {
  equipos: EquipoMedicion[];
}

const renderEquipos = (equipos: EquipoMedicion[]): React.ReactElement[] => {
  return equipos.map((equipo) => {
    return (
      <DRTextLabel
        text={equipo.name}
        className="text-center"
        key={equipo.name}
      ></DRTextLabel>
    );
  });
};

export const DREquipment: FC<DREquipmentProps> = ({ equipos }) => {
  const listaEquipos = renderEquipos(equipos);
  return (
    <>
      <BaseContainer className="fccc gap-12">
        <DRHeadingLabel
          text="Equipos de"
          gradientText="Medición"
        ></DRHeadingLabel>
        <BaseContainer className="fccc gap-1">{listaEquipos}</BaseContainer>
      </BaseContainer>
    </>
  );
};

export default DREquipment;
