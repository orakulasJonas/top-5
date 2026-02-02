/**
 * Configuration for all Call-to-Action (CTA) links used throughout the application
 * Centralized configuration allows easy updates across the entire site
 */

export const CTA_LINKS = {
  // Primary CTA - Swissker Anti-Fungal Stick
  SWISSKER_PRODUCT: 'https://swissker.com/afs-comparison-ecomm-prgr2/',
  
  // Secondary CTA - Fortifyx Oil of Oregano
  FORTIFYX_PRODUCT: 'https://lumivyx.com/fortifyxoiloforegano-comparison-ecomm-stv1/',
} as const;

// Type-safe access to CTA links
export type CTALinkKey = keyof typeof CTA_LINKS;
