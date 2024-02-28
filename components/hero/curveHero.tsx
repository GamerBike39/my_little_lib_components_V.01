"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

type CurveHeroProps = {
  link?: string;
  title: ReactNode;
  subTitle?: ReactNode;
  className?: string;
  className_svg?: string;
};

export const CurveHero = ({
  link,
  title,
  subTitle,
  className,
  className_svg,
}: CurveHeroProps) => {
  return (
    <section>
      <div
        className={cn(
          "relative grid w-full bg-indigo-500 h-96 lg:h-[32rem] place-items-center",
          className
        )}
      >
        <div className="flex flex-col items-center mx-auto text-center">
          <h1 className="text-4xl font-semibold text-white uppercase md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-5 text-white max-w-md px-5">
            {subTitle}
          </p>

          <Link
            href={link ? link : ""}
            className="mt-8 cursor-pointer animate-bounce"
          >
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27" cy="26" r="18" stroke="white" strokeWidth="2" />
              <path
                d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>

      <svg
        className={cn("fill-indigo-500", className_svg)}
        viewBox="0 0 1440 57"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
      </svg>
    </section>
  );
};
