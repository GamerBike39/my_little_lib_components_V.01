/* eslint-disable @next/next/no-img-element */

type FeatureGridProps = {
  title?: string | React.ReactNode;
  content?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  picture?: string;
  alt?: string;
};

export const FeatureGrid = ({
  title,
  content,
  picture,
  alt,
}: FeatureGridProps) => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">
          {title}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
          <img
            className="w-1/2 md:w-full mx-auto max-w-2xl"
            src={picture}
            alt={alt || ""}
            width={400}
            height={400}
          />
        </div>

        <div className="flex-1 flex flex-col lg:flex-row flex-wrap -mb-4 -mx-2">
          {content?.map((item, index) => (
            <div key={index} className="w-full lg:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
