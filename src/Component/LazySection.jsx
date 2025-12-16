// LazySection.jsx
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

const LazySection = ({ id, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // ﺲﺑ ﺓﺪﺣﺍﻭ ﺓﺮﻣ ﻞﻤﺤﺘﻳ
    threshold: 0.1, // ﻞﻤﺤﺘﻳ ﻥﺎﺸﻋ ﺔﺷﺎﺸﻟﺍ ﻲﻓ ﺮﻬﻈﻳ ﺮﻴﻐﺻ ﺀﺰﺟ
  });

  return (
    <div
      id={id}
      ref={ref}
      className="max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
    >
      {inView && (
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <span className="loading loading-ring loading-xl text-center"></span>
            </div>
          }
        >
          {children}
        </Suspense>
      )}
    </div>
  );
};

export default LazySection;
