import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-2 border-r-4 bg-gray-100 p-2 relative ">
            <nav className=" space-y-4 nav sticky top-0 text-xs">
              <h1 className="font-bold text-xl underline mb-5 ">
                My little React Component Library
              </h1>
              <Card className="p-2">
                <p className="text-lg font-bold">Hero</p>
                <div className="flex flex-col">
                  <Link className="navigation" href="#curve">
                    Curve
                  </Link>
                  <Link className="navigation" href="#curve2">
                    Curve2
                  </Link>
                  <Link className="navigation" href="#curve3">
                    Curve3
                  </Link>
                </div>
              </Card>
              <Card className="p-2">
                <p className="text-lg font-bold">content</p>
                <div className="flex flex-col">
                  <Link className="navigation" href="#hovercontent">
                    Hover Content
                  </Link>
                  <Link className="navigation" href="#imagebottomtext">
                    Image Bottom Text
                  </Link>
                  <Link className="navigation" href="#imagehovertext">
                    Image Hover Text
                  </Link>
                  <Link className="navigation" href="#imagelist">
                    Image List
                  </Link>
                  <Link className="navigation" href="#multipleimage">
                    Image Multiple
                  </Link>
                </div>
              </Card>
              <Card className="p-2">
                <p className="text-lg font-bold">Featured</p>
                <div className="flex flex-col">
                  <Link className="navigation" href="#feature">
                    Feature
                  </Link>
                  <Link className="navigation" href="#feature2">
                    inline
                  </Link>
                  <Link className="navigation" href="#featurecolumn">
                    Column
                  </Link>
                  <Link className="navigation" href="#featuregrid">
                    Grid
                  </Link>
                </div>
              </Card>
              <Card className="p-2">
                <p className="text-lg font-bold">Section</p>
                <div className="flex flex-col">
                  <Link className="navigation" href="#sectioncurve">
                    Curve
                  </Link>
                  <Link className="navigation" href="#sectioncurvecta">
                    Curve CTA
                  </Link>
                  <Link className="navigation" href="#sectiontextonimage">
                    Text on image
                  </Link>
                  <Link className="navigation" href="#sectiontextwithimage">
                    Text with image
                  </Link>
                </div>
              </Card>
              <Card className="p-2">
                <p className="text-lg font-bold">Blog part</p>
                <div className="flex flex-col">
                  <Link className="navigation" href="#blogfeaturedarticle">
                    Featured Article
                  </Link>
                  <Link className="navigation" href="#bloglist">
                    BlogList
                  </Link>
                </div>
              </Card>
              <Card className="p-2">
                <p className="text-lg font-bold">text decoration</p>
                <div className="flex flex-col">
                  <Link className="navigation" href="#textdecosvg">
                    Decoration SVG
                  </Link>
                  <Link className="navigation" href="#textdecospan">
                    Decoration span
                  </Link>
                </div>
              </Card>
            </nav>
          </div>
          <div className="col-span-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
