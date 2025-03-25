import { useInView } from "react-intersection-observer";
import React, { Suspense } from "react";

const CanvasLoader = () => (
    <div className="canvas-loader-container">
      <span className="canvas-loader"></span>
    </div>
  );

export default function LazySection({ children, ...props }) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "200px" });
   return (
    <section ref={ref} {...props}>
      {inView && (
        <Suspense fallback={<CanvasLoader />}>
          {children}
        </Suspense>
      )}
    </section>
  );
}
