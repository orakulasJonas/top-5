/**
 * TypeScript type definitions for the application
 */

export interface Product {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  effectiveness: number;
  safety: number;
  price: string;
  rating: number;
  description: string[];
  pros: string[];
  cons: string[];
  ctaLink?: string;
  quote?: {
    text: string;
    author: string;
  };
}

export interface Testimonial {
  name: string;
  text: string;
  imageUrl: string;
}
