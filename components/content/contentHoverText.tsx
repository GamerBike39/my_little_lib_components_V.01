type ContentHoverTextProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  content?: {
    number: string;
    title: string;
    description: string;
  }[];
};

export const ContentHoverText = ({
  title,
  subtitle,
  content,
  children,
}: ContentHoverTextProps) => {
  return (
    <div className="h-auto my-32 py-10 ">
      <div className="max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0 mx-auto w-full ">
        <div className="flex flex-wrap items-center gap-6">
          <h2 className="text-7xl font-bold xl:text-8xl">{title}</h2>
          <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider">
            {subtitle}
          </span>
        </div>
        <div className="mt-24">
          <div className="">
            <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
              {content?.map((item, index) => (
                <div key={index}>
                  <div className="group border-b border-black pb-8">
                    <div className="flex flex-col gap-4 divide-y divide-black/30">
                      <span className="inline-block text-muted-foreground">
                        {item.number}
                      </span>
                      <h3 className="pt-6 text-3xl">{item.title}</h3>
                    </div>
                    <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                      <p className="max-h-0 font-light text-muted-foreground transition-all duration-500 group-hover:max-h-96 md:text-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div>
                <div className="group border-b border-black pb-8">
                  <div className="flex flex-col gap-4 divide-y divide-black/30">
                    <span className="inline-block text-muted-foreground">
                      001
                    </span>
                    <h3 className="pt-6 text-3xl">Branding for Agencies</h3>
                  </div>
                  <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                    <p className="max-h-0 font-light text-muted-foreground transition-all duration-500 group-hover:max-h-96 md:text-xl">
                      Sapiente, rem debitis obcaecati facilis earum repudiandae
                      enim ratione nihil iusto ea. Officia sint perspiciatis ad
                      ducimus qui.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
