/* eslint-disable @next/next/no-img-element */ import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

type TextOnImageProps = {
  side?: "left" | "right";
  src?: string;
  alt?: string;
  classNameParent?: string;
  classNameImage?: string;
  classNameContent?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const TextOnImage = ({
  side = "left",
  src,
  alt,
  children,
  classNameParent,
  classNameImage,
  classNameContent,
  ...props
}: TextOnImageProps) => {
  return (
    //  container
    <div
      className={cn(
        "flex flex-col-reverse max-w-6xl mx-auto items-center justify-center py-20",
        side === "left" ? "xl:flex-row" : "xl:flex-row-reverse",
        classNameParent
      )}
      {...props}
    >
      {/* Text block */}
      <div
        className={cn(
          "px-5 -translate-y-28 xl:-translate-y-10",
          side === "left" ? "xl:translate-x-48" : "xl:-translate-x-48"
        )}
      >
        <Card className=" h-auto min-h-52 shadow-2xl">
          <CardContent className={cn("max-w-xl", classNameContent)}>
            {children}
          </CardContent>
        </Card>
      </div>
      {/* Image block */}
      <div>
        <img
          src={src}
          alt={alt}
          width={600}
          height={600}
          className={cn(
            "aspect-square object-cover rounded-lg",
            classNameImage
          )}
        />
      </div>
    </div>
  );
};
