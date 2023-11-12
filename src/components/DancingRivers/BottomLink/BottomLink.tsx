import { FC } from "react";
import Link from "next/link";
import ContainerPX from "@/components/Base/Container/Padding/ContainerPX";
import Divider from "@/components/Base/Divider/Divider";
import DRTextLabel from "../Label/DRTextLabel";
import IconText from "@/components/Base/IconText/IconText";
import ContainerMY from "@/components/Base/Container/Margin/ContainerMY";

interface BottomLinkProps {
  href: string;
  linkText: string;
  imageClassName?: string;
}

export const BottomLink: FC<BottomLinkProps> = ({
  href,
  linkText,
  imageClassName,
}) => {
  return (
    <div>
      <ContainerPX>
        <Divider></Divider>
        <div className="fec my-24">
          <div className="fccs">
            <DRTextLabel text="Siguiente" className="opacity-60"></DRTextLabel>
            <Link href={href}>
              <IconText
                src="/icons/buttonArrowBlack.svg"
                text={linkText}
                textClassName="tr40"
                imageContainerClassName="bg-white"
                imageClassName={imageClassName}
                className="flex-row-reverse py-5"
                alt={linkText}
              ></IconText>
            </Link>
          </div>
        </div>
      </ContainerPX>
    </div>
  );
};

export default BottomLink;
