import { FC } from "react";
import BaseContainer from "@/components/Base/Container/BaseContainer";
import DRTextLabel from "../Label/DRTextLabel";

export type TextAlignment = "left" | "center" | "right";

interface DRAlignedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  textWidth?: number;
  alignment?: TextAlignment;
  outerContainerClassName?: string;
  innerContainerClassName?: string;
}

const getContainerAligmentClass = (alignment: TextAlignment): string => {
  switch (alignment) {
    case "left":
      return "fccs";
    case "center":
      return "fccc";
    case "right":
      return "fcce";
  }
};

export const DRAlignedText: FC<DRAlignedTextProps> = ({
  text,
  textWidth,
  alignment,
  outerContainerClassName,
  innerContainerClassName,
}) => {
  const alignmenClass = getContainerAligmentClass(
    alignment ? alignment : "center"
  );
  return (
    <>
      <BaseContainer className={`${outerContainerClassName} ${alignmenClass}`}>
        <BaseContainer
          className={`${
            innerContainerClassName ? innerContainerClassName : ""
          } ${alignment === "right" ? "text-end" : ""}`}
          style={{ width: `${textWidth ? textWidth : 100}%` }}
        >
          <DRTextLabel text={text}></DRTextLabel>
        </BaseContainer>
      </BaseContainer>
    </>
  );
};

export default DRAlignedText;
