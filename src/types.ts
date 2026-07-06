/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'it' | 'en' | 'ar';

export type DeviceCategory = 'smartphone' | 'tablet' | 'computer' | 'wearable' | 'gaming' | 'common';

export interface ServiceDetail {
  id: string;
  slug: string;
  name: string;
  category: DeviceCategory;
  brand?: string;
  iconName: string;
  priceStart: number;
  deliveryTime: string; // e.g. "30-60 min", "24 ore"
  shortDesc: {
    it: string;
    en: string;
    ar: string;
  };
  longDesc: {
    it: string;
    en: string;
    ar: string;
  };
  commonIssues: {
    it: string[];
    en: string[];
    ar: string[];
  };
  seoKeyword: string; // keyword targeted for Milan, e.g., "riparazione iphone milano"
}

export interface BookingState {
  category: string;
  brand: string;
  model: string;
  repairType: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
  name: string;
  email: string;
  phone: string;
  agreedToTerms: boolean;
  uploadedPhoto: string | null;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: {
    it: string;
    en: string;
    ar: string;
  };
  excerpt: {
    it: string;
    en: string;
    ar: string;
  };
  content: {
    it: string;
    en: string;
    ar: string;
  };
  date: string;
  readTime: string;
  author: string;
  category: string;
  seoKeyword: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: {
    it: string;
    en: string;
    ar: string;
  };
  device: string;
  verified: boolean;
}
