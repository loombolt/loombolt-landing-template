"use client"

import Link from "next/link";
import { siteConfig } from "@/constant/site";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-20 px-4 py-10">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* COMPANY_INFO: Replace with your business information */}
          <div className="space-y-3">
            <h3 className="text-base font-medium">{siteConfig.businessName}</h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.footer.description}
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.footer.licenseInfo.split('|').map((line, index) => (
                <span key={index}>{line.trim()}{index === 0 && <br />}</span>
              ))}
            </p>
          </div>
          
          {/* SERVICES_LIST: Replace with your services */}
          <div className="space-y-3">
            <h3 className="text-base font-medium">Our Services</h3>
            <ul className="space-y-2">
              {siteConfig.footer.serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CONTACT_INFO: Replace with your contact information */}
          <div className="space-y-3">
            <h3 className="text-base font-medium">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.location.address}
            </p>
            <p className="text-sm text-muted-foreground">
              Phone: {siteConfig.phone}<br />
              Email: {siteConfig.email}
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.location.hours.split(',').map((line, index) => (
                <span key={index}>{line.trim()}{index === 0 && <br />}</span>
              ))}
            </p>
          </div>
          
          {/* LEGAL_LINKS: Standard legal links */}
          <div className="space-y-3">
            <h3 className="text-base font-medium">Legal</h3>
            <ul className="space-y-2">
              {siteConfig.footer.legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {siteConfig.footer.socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
