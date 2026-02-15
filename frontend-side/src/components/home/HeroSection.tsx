import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-linear-to-br from-accent-light-yellow via-white to-primary-cream">
      {/* Decorative Blobs */}
      <div className="shape-blob w-96 h-96 bg-primary-yellow top-20 -left-48 animate-bounce-subtle" />
      <div className="shape-blob w-80 h-80 bg-primary-green top-40 right-0 animate-bounce-subtle" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neutral-dark">
                #1 Trusted Pet Food Brand
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-hero-mobile md:text-hero font-heading font-bold text-neutral-dark mb-6 leading-tight">
              Slow-Cooked Pet Food for{' '}
              <span className="text-gradient-yellow">Optimal Nutrition</span>{' '}
              & Taste
            </h1>

            {/* Subheading */}
            <p className="text-body-lg text-neutral-gray mb-8 max-w-xl mx-auto lg:mx-0">
              Give your furry friend the nutrition they deserve with our 
              human-grade, slow-cooked recipes made from real ingredients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" href="#products">
                Shop Now
                <svg 
                  className="w-5 h-5 ml-2 inline-block" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Button>
              
              <Button variant="outline" size="lg" href="#about">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 flex-wrap">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-yellow fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-neutral-dark">
                  4.9/5 Rating
                </span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-neutral-dark">
                  100% Natural
                </span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="text-sm font-medium text-neutral-dark">
                  Free Shipping
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative z-10">
              {/* Main Image Placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-linear-to-br from-primary-cream to-accent-light-yellow flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl mb-4">🐕</div>
                    <p className="text-neutral-gray font-medium">
                      Your hero image here
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-card animate-bounce-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center text-2xl">
                    🥩
                  </div>
                  <div>
                    <p className="text-xs text-neutral-gray">Real Meat</p>
                    <p className="font-semibold text-neutral-dark">100%</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-card animate-bounce-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-2xl">
                    ❤️
                  </div>
                  <div>
                    <p className="text-xs text-neutral-gray">Happy Pets</p>
                    <p className="font-semibold text-neutral-dark">1.5M+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-neutral-gray hover:text-primary-yellow transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;