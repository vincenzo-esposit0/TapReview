export interface ProductOption {
  id: string;
  name: string;
  colorHex?: string;
  badge?: string;
}

export interface PricingTier {
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
  discountPercentage: number;
  isPopular?: boolean;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  category: 'espositore' | 'card' | 'bundle';
  description: string;
  features: string[];
  specs: Record<string, string>;
  targetAudience: string[];
  options: ProductOption[];
  pricingTiers: PricingTier[];
  basePrice: number;
  originalPrice: number;
  images: Record<string, string>;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  cartId: string;
  product: Product;
  selectedOption: ProductOption;
  quantityTier: PricingTier;
  businessName: string;
  googleLink: string;
  unitPrice: number;
  totalPrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  avatar: string;
  rating: number;
  text: string;
  beforeStats: string;
  afterStats: string;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
