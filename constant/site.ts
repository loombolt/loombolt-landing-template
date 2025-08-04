import { Wrench, Droplet, Hammer, Settings, ShieldCheck, Zap, Truck, Clock } from 'lucide-react';

// SITE_CONFIG: This file contains all the configurable data for the landing page.
// You can edit the content directly here, and it will be reflected across the site.

export const siteConfig = {
  // GENERAL_INFO: Basic business details
  businessName: "Your Business Name",
  phone: "(415) 555-1234",
  email: "info@yourbusiness.com",

  // NAVIGATION: Links for the navbar
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],

  // HERO_SECTION: Content for the hero section
  hero: {
    headline: "Your Business Services",
    description: "Licensed, insured, and experienced professionals ready to solve your problems with quality service and guaranteed satisfaction.",
    ctaPrimary: "Book Service Now",
    ctaSecondary: "Get a Free Quote",
    image: {
      src: "https://gecogcwqthplfhptoccl.supabase.co/storage/v1/object/public/public-images/previews/general-img-landscape.png",
      alt: "Professional plumber at work"
    },
    usp: [
      { icon: Truck, text: "24/7 Emergency Service" },
      { icon: ShieldCheck, text: "Licensed & Insured" },
      { icon: Clock, text: "On-Time Guarantee" },
    ]
  },

  // SERVICES_SECTION: Content for the services/features section
  services: {
    headline: "Our Services",
    description: "We offer a wide range of plumbing services to meet your needs. Our team is equipped to handle everything from minor repairs to major installations.",
    items: [
      { icon: Wrench, title: "Emergency Repairs", description: "24/7 availability for urgent plumbing issues like burst pipes and severe leaks." },
      { icon: Droplet, title: "Leak Detection & Repair", description: "Advanced techniques to find and fix leaks in your plumbing system, saving you money and preventing water damage." },
      { icon: Hammer, title: "Fixture Installation", description: "Professional installation of faucets, sinks, toilets, and other plumbing fixtures." },
      { icon: Settings, title: "Water Heater Services", description: "Repair, replacement, and maintenance for all types of water heaters, including tankless models." },
      { icon: Zap, title: "Drain Cleaning", description: "Effective solutions for clogged drains, ensuring your plumbing runs smoothly." },
      { icon: ShieldCheck, title: "Pipe Repair & Replacement", description: "Comprehensive services for damaged or aging pipes to ensure the integrity of your plumbing system." },
    ]
  },

  // TESTIMONIALS_SECTION: Customer testimonials
  testimonials: {
    headline: "What Our Customers Say",
    description: "Hear from our satisfied clients who trust us with their plumbing needs.",
    items: [
      { quote: "They were professional, on-time, and fixed my leaky faucet in no time. Highly recommend!", author: "Sarah J.", title: "Homeowner, San Francisco" },
      { quote: "The team handled a major pipe replacement for our business. The work was clean, efficient, and caused minimal disruption.", author: "David L.", title: "Local Business Owner" },
      { quote: "I've used their maintenance plan for two years now. It's saved me from two potential emergencies. Worth every penny!", author: "Maria G.", title: "Property Manager" },
      { quote: "Fast, friendly, and fair pricing. I called them for an emergency and they arrived within the hour.", author: "Mike R.", title: "Resident, Oakland" },
    ]
  },

  // LOCATION_SECTION: Business location and contact details
  location: {
    headline: "Our Location",
    description: "Serving San Francisco and the Bay Area with professional, reliable service.",
    address: "123 Market Street, San Francisco, CA 94105",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-4pm",
    serviceAreas: "San Francisco, Oakland, Berkeley, Daly City, South San Francisco, San Mateo",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95397618613!2d-122.43913233725309!3d37.77398232001156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085a4c1b30b%3A0x70b22d8d17d30ea3!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1690998765432!5m2!1sen!2sus",
  },

  // CTA_SECTION: Call-to-action content
  cta: {
    headline: "Need Professional Service Today?",
    description: "Our expert technicians are ready to help with all your plumbing needs. Emergency services available 24/7.",
    ctaPrimary: "Schedule Service",
    ctaSecondary: "Get Free Estimate",
    serviceArea: "Proudly serving the greater Metro area and surrounding communities",
  },

  // FOOTER: Footer content and links
  footer: {
    description: "Professional plumbing services with 20+ years of experience serving residential and commercial clients.",
    licenseInfo: "License #: PL-12345 | Fully insured and bonded",
    serviceLinks: [
      { label: "Emergency Repairs", href: "#services" },
      { label: "Leak Detection", href: "#services" },
      { label: "Fixture Installation", href: "#services" },
      { label: "Water Heater Services", href: "#services" },
    ],
    legalLinks: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Service Warranty", href: "/warranty" },
    ],
    socialLinks: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Yelp", href: "#" },
    ],
  },
};
