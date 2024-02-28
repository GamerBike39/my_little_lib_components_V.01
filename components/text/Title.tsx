export const Title = () => {
  return (
    <div>
      <span className="hidden sm:inline-block">Easy to customize</span>{" "}
      <div className="mx-auto block w-max">
        <div className="relative block pb-2">
          <span className="absolute inset-0 z-[1] block bg-gradient-to-b from-blue-950 via-blue-950 to-transparent bg-clip-text text-transparent dark:from-white dark:via-white">
            Templates
          </span>
          <span className="absolute inset-0 block bg-gradient-to-l from-[#00FFF0] to-[#00A3FF] bg-clip-text text-transparent">
            Templates
          </span>
          <span className="block">Templates</span>
        </div>
        <div className="-mt-4 grow overflow-hidden">
          <svg
            className="w-60 sm:w-80"
            height="22"
            viewBox="0 0 283 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332"
              stroke="url(#paint0_linear_18_19)"
              stroke-width="4"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_18_19"
                x1="282"
                y1="5.49999"
                x2="40"
                y2="13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00FFF0"></stop>
                <stop offset="1" stop-color="#00A3FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
