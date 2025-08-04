"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/constant/site";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-36 bg-gradient-to-b from-background to-muted/20">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {siteConfig.hero.headline}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {siteConfig.hero.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button size="lg" className="gap-2">
                {siteConfig.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                {siteConfig.hero.ctaSecondary}
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border/40">
              {siteConfig.hero.usp.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-muted">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">{item.text.split(' ')[0]}</p>
                    <p className="text-muted-foreground">{item.text.substring(item.text.indexOf(' ') + 1)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* HERO_IMAGE: Replace with your business image */}
            <div className="relative mx-auto w-full max-w-md lg:order-last">
              <Image
                src={siteConfig.hero.image.src}
                alt={siteConfig.hero.image.alt}
                width={600}
                height={600}
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg z-20">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2 overflow-hidden">
                    {siteConfig.testimonials.items.slice(0, 3).map((testimonial, index) => (
                      <div key={index} className="h-8 w-8 rounded-full ring-2 ring-background bg-primary/20 flex items-center justify-center text-xs font-medium">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                      <span className="ml-1 font-medium">5.0/5</span>
                    </div>
                    <p className="text-muted-foreground text-xs">Based on {siteConfig.testimonials.items.length} reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
