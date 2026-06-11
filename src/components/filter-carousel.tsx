"use client"

import { Badge } from "./ui/badge";
import { Carousel,CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface FilterCarouselProps{
    value?: string | null;
    isLoading?: boolean;
    onSelect?: (value: string | null) => void;
    data: {
        value: string;
        label: string;
    }[];
}

export const FilterCarousel = ({value, isLoading, onSelect, data}: FilterCarouselProps) =>{
    return(
        <div className="relatiive w-full">
            <Carousel
            opts={{
                align: "start",
                dragFree: true,
            }}
            className="w-full px-12">
                <CarouselContent className="-ml-3">
                    <CarouselItem>
                        <Badge variant={value == null ? "default" :"secondary"} className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm">
                            All
                        </Badge>
                    </CarouselItem>
                    {!isLoading && data.map( (item) =>(
                        <CarouselItem key={item.value} className="pl-3 basic-auto">
                            <Badge variant={value == item.value ? "default" : "secondary"}>
                                {item.label}
                            </Badge>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
        </div>
    )
}