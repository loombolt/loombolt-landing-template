"use client"

import { Card } from "@/components/ui/card"
import { siteConfig } from "@/constant/site"
import { MapPin } from "lucide-react"

export function GoogleMapSection() {
  return (
    <section id="location" className="w-full py-12 md:py-16">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{siteConfig.location.headline}</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground">
              {siteConfig.location.description}
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Location Info Card */}
          <Card className="p-6 flex flex-col space-y-4">
            <h3 className="text-xl font-medium">Contact Information</h3>
            
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <p className="text-sm">{siteConfig.location.address}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm">{siteConfig.phone}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm font-medium">Business Hours</p>
                <p className="text-sm">{siteConfig.location.hours}</p>
              </div>
            </div>
            
            <div className="space-y-1 mt-4">
              <p className="text-sm font-medium">Service Areas</p>
              <p className="text-sm">{siteConfig.location.serviceAreas}</p>
            </div>
          </Card>
          
          {/* Google Map Embed */}
          <div className="md:col-span-2 h-[400px] rounded-lg overflow-hidden border">
            <iframe 
              src={siteConfig.location.mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Business Location Map"
              aria-label="Map showing our business location in San Francisco"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
