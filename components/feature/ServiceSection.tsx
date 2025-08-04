"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/constant/site";

export function ServiceSection() {

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {siteConfig.services.headline}
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground">
              {siteConfig.services.description}
            </p>
          </div>
        </div>
        
        {/* Simple Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {siteConfig.services.items.map((service, index) => (
            <Card key={index} className="flex flex-col h-full hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
