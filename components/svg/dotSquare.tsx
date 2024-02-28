import { cn } from "@/lib/utils";

export const DotSquare = () => {
  return (
    <svg
      width="93"
      height="93"
      viewBox="0 0 93 93"
      fill="#3056D3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.5" cy="2.5" r="2.5"></circle>
      <circle cx="2.5" cy="24.5" r="2.5"></circle>
      <circle cx="2.5" cy="46.5" r="2.5"></circle>
      <circle cx="2.5" cy="68.5" r="2.5"></circle>
      <circle cx="2.5" cy="90.5" r="2.5"></circle>
      <circle cx="24.5" cy="2.5" r="2.5"></circle>
      <circle cx="24.5" cy="24.5" r="2.5"></circle>
      <circle cx="24.5" cy="46.5" r="2.5"></circle>
      <circle cx="24.5" cy="68.5" r="2.5"></circle>
      <circle cx="24.5" cy="90.5" r="2.5"></circle>
      <circle cx="46.5" cy="2.5" r="2.5"></circle>
      <circle cx="46.5" cy="24.5" r="2.5"></circle>
      <circle cx="46.5" cy="46.5" r="2.5"></circle>
      <circle cx="46.5" cy="68.5" r="2.5"></circle>
      <circle cx="46.5" cy="90.5" r="2.5"></circle>
      <circle cx="68.5" cy="2.5" r="2.5"></circle>
      <circle cx="68.5" cy="24.5" r="2.5"></circle>
      <circle cx="68.5" cy="46.5" r="2.5"></circle>
      <circle cx="68.5" cy="68.5" r="2.5"></circle>
      <circle cx="68.5" cy="90.5" r="2.5"></circle>
      <circle cx="90.5" cy="2.5" r="2.5"></circle>
      <circle cx="90.5" cy="24.5" r="2.5"></circle>
      <circle cx="90.5" cy="46.5" r="2.5"></circle>
      <circle cx="90.5" cy="68.5" r="2.5"></circle>
      <circle cx="90.5" cy="90.5" r="2.5"></circle>
    </svg>
  );
};

export const DotRect = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 52 24"
      fill="black"
      className={cn("w-32 text-blue-800", className)}
    >
      <defs>
        <pattern id="pattern" x="0" y="0" width=".135" height=".30">
          <circle cx="1" cy="1" r=".7" />
        </pattern>
      </defs>
      <rect fill="url(#pattern)" width="52" height="24" />
    </svg>
  );
};
