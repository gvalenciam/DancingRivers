import { FC } from "react";
import ImageCircleIcon, {
  ImageCircleIconProps,
} from "@/components/Base/ImageCircleIcon/ImageCircleIcon";

interface DRImageCircleIconProps extends ImageCircleIconProps {}

export const DRImageCircleIcon: FC<DRImageCircleIconProps> = ({
  src,
  backgroundColor,
  alt,
  className,
  imageContainerClassName,
  imageClassName,
}) => {
  return (
    <ImageCircleIcon
      src={src}
      alt={alt}
      className={className}
      imageContainerClassName={imageContainerClassName}
      imageClassName={imageClassName}
      backgroundColor={backgroundColor}
    ></ImageCircleIcon>
  );
};

export default DRImageCircleIcon;
