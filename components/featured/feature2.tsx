import Link from "next/link";

type Feature2Props = {
  introTitle?: string | React.ReactNode;
  title?: string | React.ReactNode;
  subtitle?: string;
  content?: {
    title: string;
    description: string;
    icon: React.ReactNode;
    cta?: {
      href: string;
      text: string;
    };
  }[];
};

export const Feature2 = ({
  introTitle,
  title,
  subtitle,
  content,
}: Feature2Props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            {introTitle}
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
          </span>
          {title}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">{subtitle}</p>
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2 place-content-center">
        {content?.map((item, index) => (
          <div key={index} className="max-w-md grid place-content-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              {item.icon}
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">{item.title}</h6>
            <p className="mb-3 text-sm text-gray-900">{item.description}</p>
            {item.cta && (
              <Link
                href={item.cta.href}
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-800"
              >
                {item.cta.text}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
