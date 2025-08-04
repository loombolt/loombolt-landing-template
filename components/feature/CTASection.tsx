"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/constant/site";

export function CTASection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{siteConfig.cta.headline}</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground">
              {siteConfig.cta.description}
            </p>
          </div>
          
          {/* CONTACT_INFO: Replace with your business contact information */}
          <div className="flex flex-col items-center space-y-2 mb-4">
            <p className="font-medium">Call us now for immediate assistance</p>
            <p className="text-2xl font-bold text-primary">{siteConfig.phone}</p>
          </div>
          
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button size="lg">
              {siteConfig.cta.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              {siteConfig.cta.ctaSecondary}
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            {siteConfig.cta.serviceArea}
          </p>
        </div>
      </div>
    </section>
  );
}
