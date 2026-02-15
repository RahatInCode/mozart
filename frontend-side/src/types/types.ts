// Navigation types
export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

// Hero Section types
export interface HeroContent {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  image: string;
  imageAlt: string;
}

// Product types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  imageAlt: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  category: string;
}

// Feature types
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Statistic types
export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

// Team Member types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// Blog Post types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

// Footer types
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterContent {
  logo: string;
  description: string;
  sections: FooterSection[];
  social: SocialLink[];
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
  };
  copyright: string;
}

// Newsletter types
export interface NewsletterFormData {
  email: string;
}

// Reusable component props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'cream' | 'green';
}

// Animation types
export interface AnimationConfig {
  initial: object;
  animate: object;
  transition: object;
}