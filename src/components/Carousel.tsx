import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IconBaseProps } from "react-icons";

type CarouselItemProps = {
  name: string;
  icon: React.FunctionComponentElement<IconBaseProps>;
};

type CarouselPluginProps = {
  data: CarouselItemProps[];
};

export function CarouselPlugin({ data }: CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      className="w-full h-full flex items-center max-w-[10rem]"
    >
      <CarouselContent>
        {data.map(({ name, icon }, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex flex-col gap-1 items-center justify-center select-none">
              <i className="text-2xl">{icon}</i>
              <span>{name}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
