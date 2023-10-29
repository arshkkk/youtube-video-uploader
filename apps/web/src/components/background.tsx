"use client";

import { useEffect } from "react";

function useMouseMove(): void {
  useEffect(() => {
    function mouseMoveEvent(e: MouseEvent): void {
      const scale = window.visualViewport?.scale;
      // disable mouse movement on viewport zoom - causes page to slow down
      if (scale === 1) {
        const body = document.body;

        const targetX = e.clientX;
        const targetY = e.clientY;

        // TODO: make it move around cursor so you feal like its floating around it
        // the animation requires tranformX and transformY on the HTML Element
        body.style.setProperty("--x", `${targetX}px`);
        body.style.setProperty("--y", `${targetY}px`);
      }
    }

    document.addEventListener("mousemove", mouseMoveEvent);
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);
}

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  // --x and --y will be updated based on mouse position
  useMouseMove();
  return (
    <>
      <div className="fixed left-0 top-0 -z-50">
        <div className="sticky left-0 top-0 h-screen w-screen overflow-hidden">
          <div className="bg-muted-foreground/20 absolute inset-0 z-[-1]" />
          <div className="bg-gradient-radial from-muted-foreground/80 absolute left-[--x] top-[--y] z-[-1] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full from-0% to-transparent to-90% blur-md" />
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                height="16"
                id="dotted-pattern"
                patternUnits="userSpaceOnUse"
                width="16"
              >
                <circle cx="2" cy="2" fill="black" r="1" />
              </pattern>
              <mask id="dots-mask">
                <rect fill="white" height="100%" width="100%" />
                <rect fill="url(#dotted-pattern)" height="100%" width="100%" />
              </mask>
            </defs>
            <rect
              fill="hsl(var(--background))"
              height="100%"
              mask="url(#dots-mask)"
              width="100%"
            />
          </svg>
        </div>
      </div>

      {children}
    </>
  );
}
