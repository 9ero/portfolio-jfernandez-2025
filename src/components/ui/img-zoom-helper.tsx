import { useState } from "react";
export const ImgZoomHelper = ({ src, alt }: { src: string; alt: string }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };
  return (
      <img src={src} alt={alt} height={500} width={500} onClick={handleZoom}
      className={`${isZoomed ? 'max-h-screen max-w-screen h-full object-contain w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200] hover:cursor-zoom-out' : 'h-20 w-full  object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:cursor-zoom-in hover:scale-105 transition-all duration-300'}`}
      />
  );
};