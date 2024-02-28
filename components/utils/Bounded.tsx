import { cn } from "@/lib/utils";

type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  type?: "default" | "small" | "xsmall" | "large" | "extralarge";
  as?: "section" | "div" | "span";
} & React.ComponentPropsWithRef<"div">;

/**
 * Bounded component
 * @param {React.ReactNode} children - The content of the component
 * @param {string} className - additional classes for the component
 * @param {string} type - The type of the component (default, narrow, wide, full)
 * @param {string} as - The element type of the component (default: div, optional : section, span)
 * @returns {React.ReactNode} The Bounded component
 */
export const Bounded = ({
  children,
  className,
  type = "default",
  as = "div",
  ...props
}: BoundedProps) => {
  const Element = as;

  return (
    <Element
      className={cn(
        "mx-auto px-4 sm:px-6",
        type === "default" && "max-w-screen-2xl",
        type === "xsmall" && "max-w-[320px]",
        type === "small" && "max-w-screen-md",
        type === "large" && "max-w-screen-lg",
        type === "extralarge" && "max-w-screen",
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
};
