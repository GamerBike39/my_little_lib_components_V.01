"use client";
// hero
import { CurveHero } from "@/components/hero/curveHero";
// section
import {
  TextWithImage,
  TextWithImageContent,
  TextWithImageImage,
} from "@/components/section/textWithImage";
import { TextOnImage } from "@/components/section/TextOnImage";
import { CurveSectionCta } from "@/components/section/curveSectionCta";
import { CurveSection } from "@/components/section/curveSection";
// content
import { ContentHoverText } from "@/components/content/contentHoverText";
import { ContentImageHoverText } from "@/components/content/contentImageHoverText";
import { ContentMultipleImage } from "@/components/content/contentMultipleImage";
import { ContentImageBottomText } from "@/components/content/contentImageBottomText";
import { ContentListMultipleImage } from "@/components/content/contentListMultipleImage";
// text Decoration
import { Title } from "@/components/text/Title";
import {
  TextDecoration,
  TextDecoration2,
  TextDecoration3,
} from "@/components/text/TextDecoration";
// featured
import { FeatureGrid } from "@/components/featured/featureGrid";
import { Feature } from "@/components/featured/feature";
import { Feature2 } from "@/components/featured/feature2";
import { FeatureInline } from "@/components/featured/featureInline";

// blog
import { BlogFeaturedArticle } from "@/components/blog/BlogFeaturedArticle";
import { BlogList } from "@/components/blog/BlogList";

// data
import {
  dataContentHover,
  dataContentImageBottomText,
  dataContentImageHoverText,
  dataContentListMultipleImage,
  dataContentMultipleImage,
  dataFeature,
  dataFeature2,
  dataFeatureColumn,
  dataFeatureGrid,
  dataCurveSectionCta,
} from "@/components/data/data";

import { Bounded } from "@/components/utils/Bounded";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FeatureColumn } from "@/components/featured/featureColumn";

export default function Home() {
  const [MobileFormat, setMobileFormat] = useState(false);
  const narrowWithClick = () => {
    setMobileFormat(!MobileFormat);
  };

  return (
    <div className="px-2 pb-20">
      {/* hero components */}
      {/* Curve */}
      <div>
        <h3 className="text-8xl font-bold">Hero</h3>
        <div id="curve" className=" pt-4 pb-10  border-4 border-black p-2">
          <div className="flex justify-between w-full my-2">
            <p>#1</p>

            <SmartPhone onClick={narrowWithClick} />
          </div>
          <div className={cn(!MobileFormat ? "w-full" : "w-[320px] mx-auto")}>
            <CurveHero
              title="The best way to create a website"
              subTitle="Build a website that grows with your business."
            />
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      {/* Content components */}
      <div>
        <h3 className="text-8xl font-bold">Content</h3>
        <div className="space-y-32">
          {/* content hover */}
          <div id="hovercontent" className="py-10 border-4 border-black p-2">
            <p onClick={narrowWithClick}>#1 Content Hover</p>
            <div>
              <ContentHoverText
                title="Our Services"
                subtitle="003 services"
                content={dataContentHover.content}
              />
            </div>
          </div>
          {/* image bottom text */}
          <div
            id="imagebottomtext"
            className="py-10  border-4 border-black p-2"
          >
            <p>#2 Image bottom text</p>
            <ContentImageBottomText
              title={dataContentImageBottomText.title}
              subtitle={dataContentImageBottomText.subtitle}
              content={dataContentImageBottomText.content}
            />
          </div>
          {/* image hover text */}
          <div id="imagehovertext" className="py-10  border-4 border-black p-2">
            <p>#3 Image Hover Text</p>
            <ContentImageHoverText
              title={dataContentImageHoverText.title}
              subtitle={dataContentImageHoverText.subtitle}
              content={dataContentImageHoverText.content}
            />
          </div>
          {/* image list */}
          <div id="imagelist" className="py-10  border-4 border-black p-2">
            <p>#4 Image & List</p>
            <ContentListMultipleImage
              title={dataContentListMultipleImage.title}
              introduceTitle={dataContentListMultipleImage.introduceTitle}
              subtitle={dataContentListMultipleImage.subtitle}
              content={dataContentListMultipleImage.content}
              pictures={dataContentListMultipleImage.pictures}
            />
          </div>
          {/* mansory */}
          <div id="multipleimage" className="py-10  border-4 border-black p-2">
            <p>#5 Image Hover Text</p>
            <ContentMultipleImage
              title={dataContentMultipleImage.title}
              icon={dataContentMultipleImage.icon}
              content={dataContentMultipleImage.content}
              cta={dataContentMultipleImage.cta}
              pictures={dataContentMultipleImage.pictures}
            />
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      {/* Featured components */}
      <div>
        {/* featured 1 */}
        <h3 className="text-8xl font-bold">Featured</h3>
        <div className="space-y-32">
          <div id="feature" className="py-10 border-4 border-black p-2">
            <p>#1 feature</p>
            <Feature
              title={dataFeature.title}
              introTitle={dataFeature.introTitle}
              subtitle={dataFeature.subtitle}
              content={dataFeature.content}
            />
          </div>
          {/* feature 2 */}
          <div id="feature2" className="py-10  border-4 border-black p-2">
            <p>#2 Feature2</p>
            <Feature2
              title={dataFeature2.title}
              introTitle={dataFeature2.introTitle}
              subtitle={dataFeature2.subtitle}
              content={dataFeature2.content}
            />
          </div>
          {/* feature column */}
          <div id="featurecolumn" className="py-10  border-4 border-black p-2">
            <p>#3 Feature column</p>
            <FeatureColumn
              title={dataFeatureColumn.title}
              introTitle={dataFeatureColumn.introTitle}
              subtitle={dataFeatureColumn.subtitle}
              contentLeft={dataFeatureColumn.contentLeft}
              contentRight={dataFeatureColumn.contentRight}
            />
          </div>
          {/* feature grid */}
          <div id="featuregrid" className="py-10  border-4 border-black p-2">
            <p>#4 feature grid</p>
            <FeatureGrid
              title={dataFeatureGrid.title}
              content={dataFeatureGrid.content}
              picture={dataFeatureGrid.picture}
            />
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      {/* Section components */}
      <div>
        <h3 className="text-8xl font-bold">Section</h3>
        <div className="space-y-32">
          <div id="sectioncurve" className="py-10 border-4 border-black p-2">
            <p>#1 curve</p>
            <CurveSection>
              <h2 className="w-full text-white font-bold text-8xl text-center">
                toto
              </h2>
              <p className="text-center text-white">you are verry funny</p>
            </CurveSection>
          </div>
          <div
            id="sectioncurvecta"
            className="py-10  border-4 border-black p-2"
          >
            <p>#2 Curve Cta</p>
            <CurveSectionCta
              title={dataCurveSectionCta.title}
              subtitle={dataCurveSectionCta.subtitle}
              cta={dataCurveSectionCta.cta}
              picture={dataCurveSectionCta.picture}
            />
          </div>
          <div
            id="sectiontextonimage"
            className="py-10  border-4 border-black p-2"
          >
            <p>#3 text on image</p>
            <TextOnImage src="/bg.webp" classNameContent="max-w-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                quibusdam officiis voluptatum totam mollitia sint obcaecati
                facilis itaque enim aspernatur tempora porro ex tempore, neque
                placeat. Maiores deleniti eum suscipit?
              </p>
            </TextOnImage>
          </div>
          <div
            id="sectiontextwithimage"
            className="py-10  border-4 border-black p-2"
          >
            <p>#4 text with image</p>
            <TextWithImage>
              <TextWithImageContent>
                <Bounded
                  type="small"
                  className="flex flex-col justify-center items-center"
                >
                  <p className="px-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    quibusdam officiis voluptatum totam mollitia sint obcaecati
                    facilis itaque enim aspernatur tempora porro ex tempore,
                    neque placeat.
                    <span className="text-purple-700 font-bold text-xl">
                      {" "}
                      Maiores deleniti eum suscipit?
                    </span>
                  </p>
                </Bounded>
              </TextWithImageContent>
              <TextWithImageImage src="/bg.webp" alt="" />
            </TextWithImage>
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      {/* Blog components */}
      <div>
        <h3 className="text-8xl font-bold">Blog</h3>
        <div className="space-y-32">
          <div
            id="blogfeaturedarticle"
            className="py-10 border-4 border-black p-2"
          >
            <p>#1 Featured Article</p>
            <BlogFeaturedArticle />
          </div>
          <div id="bloglist" className="py-10  border-4 border-black p-2">
            <p>#2 Blog List</p>
            <BlogList />
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      {/* Text decoration */}
      <div>
        <h3 className="text-8xl font-bold">Text decoration</h3>
        <div id="textdecoration" className="py-10 border-4 border-black p-2">
          <div className="flex flex-col justify-center">
            <p>#1 svg decoration</p>
            <div className="text-center">
              <TextDecoration />
            </div>
            <Separator className="my-10" />
            <p>#2 svg decoration 2</p>
            <TextDecoration2 />
            <Separator className="my-10" />
            <p>#3 svg decoration 3</p>
            <div className="text-center">
              <TextDecoration3 />
            </div>
            <Separator className="my-10" />
            <p>#3 svg decoration 3</p>
            <div className="text-8xl text-center">
              <Title />
            </div>
          </div>
        </div>
        <div id="textdecospan" className="py-10  border-4 border-black p-2">
          <p>#2 span decoration</p>
          <p className="text-xl font-bold">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

type SmartPhoneProps = {} & React.SVGProps<SVGSVGElement>;
const SmartPhone = ({ ...props }: SmartPhoneProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
};
