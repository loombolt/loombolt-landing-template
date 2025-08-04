"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { siteConfig } from "@/constant/site";
import { Quote } from "lucide-react";

export function TestimonialsSection() {

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{siteConfig.testimonials.headline}</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground">
              {siteConfig.testimonials.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <Carousel className="w-full">
            <CarouselContent>
              {siteConfig.testimonials.items.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="h-full">
                      <CardContent className="flex flex-col justify-between p-6 h-full">
                        <div className="mb-4">
                          <Quote className="h-6 w-6 text-primary mb-2" />
                          <p className="text-lg">{testimonial.quote}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative" />
              <CarouselNext className="relative" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
