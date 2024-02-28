import * as React from "react";
import Image from "next/image";
import { Bounded } from "../utils/Bounded";
import { cn } from "@/lib/utils";

// Composant parent qui utilise les composants enfants
type TextWithImageProps = {
  reverse?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<"div">;
const TextWithImage = ({
  reverse = false,
  className,
  children,
  ...props
}: TextWithImageProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center lg:flex-row gap-y-5",
        className,
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Composant enfant pour le contenu textuel
type TextWithImageContentProps = {
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<"div">;
const TextWithImageContent = ({
  className,
  children,
  ...props
}: TextWithImageContentProps) => (
  <Bounded
    as="div"
    type="small"
    className={cn("w-full lg:w-1/2", className)}
    {...props}
  >
    {children}
  </Bounded>
);

// Composant enfant pour l'image
type TextWithImageImageProps = {
  src: string;
  alt: string;
  className?: string;
} & React.ComponentPropsWithRef<"div">;
const TextWithImageImage = ({
  src,
  alt,
  className,
  ...props
}: TextWithImageImageProps) => (
  <div
    className="relative aspect-video w-full lg:w-1/2 mx-auto max-w-5xl max-h-96"
    {...props}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className={cn("w-auto h-auto object-cover", className)}
    />
  </div>
);

export { TextWithImage, TextWithImageContent, TextWithImageImage };
