import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'cream' | 'green';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    cream: 'bg-[#FAF7F2]',
    green: 'bg-[#2D6F5E] text-white',
  };

  return (
    <section
      id={id}
      className={`section ${backgroundStyles[background]} ${className}`}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default Section;