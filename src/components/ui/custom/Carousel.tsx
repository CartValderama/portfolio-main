import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IconBaseProps } from "react-icons";

type CarouselItemProps = {
  title: string;
  icon?: React.FunctionComponentElement<IconBaseProps>;
  imgUrl?: string;
  desc?: string;
};

type CustomCarouselProps = {
  data: CarouselItemProps[];
  delay: number;
};

export function CustomCarousel({ data, delay }: CustomCarouselProps) {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const plugin = React.useRef(
    Autoplay({ delay: delay, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      className="flex items-start"
    >
      <CarouselContent>
        {data.map(({ title, icon, imgUrl, desc }, index) => (
          <CarouselItem key={index}>
            <div
              className={`flex flex-col ${
                !imgUrl && "items-center"
              } select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <i className="text-2xl">{icon}</i>
              {imgUrl && (
                <img src={imgUrl} className="rounded w-60 h-56 mt-2" />
              )}
              <h2 className={`${imgUrl ? "text-2xl my-2" : "text-base"}  `}>
                {title}
              </h2>
              {imgUrl && <p className="text-sm">{desc}</p>}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
