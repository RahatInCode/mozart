import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    cream: 'bg-primary-cream',
    green: 'bg-primary-green text-white',
  };

  return (
    <section
      id={id}
      className={`section ${backgroundClasses[background]} ${className}`}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default Section;