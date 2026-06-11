"use client"

import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface FilterCarouselProps {
    value?: string | null;
    isLoading?: boolean;
    onSelect?: (value: string | null) => void;
    data: {
        value: string;
        label: string;
    }[];
}

export const FilterCarousel = ({ value, isLoading, onSelect, data }: FilterCarouselProps) => {
    return (
        <div className="relative w-full">
            <Carousel
                opts={{ align: "start", dragFree: true }}
                className="w-full px-12"
            >
                <CarouselContent className="-ml-3">
                    <CarouselItem className="pl-3 basis-auto">
                        <Badge
                            onClick={() => onSelect?.(null)}
                            variant={value == null ? "default" : "secondary"}
                            className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
                        >
                            All
                        </Badge>
                    </CarouselItem>
                    {!isLoading && data.map((item) => (
                        <CarouselItem key={item.value} className="pl-3 basis-auto">
                            <Badge
                                onClick={() => onSelect?.(item.value)}
                                variant={value === item.value ? "default" : "secondary"}
                                className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
                            >
                                {item.label}
                            </Badge>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 z-20" />
                <CarouselNext className="right-0 z-20" />
            </Carousel>
        </div>
    );
};
