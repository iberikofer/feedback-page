import React from 'react';
import type { FC, ReactNode } from 'react';
import css from './Section.module.css';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section: FC<SectionProps> = ({ title, children, className = '' }) => {
  const sectionId = `section-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return (
    <section
      className={`${css.section} ${className}`.trim()}
      aria-labelledby={sectionId}
    >
      <h2 id={sectionId} className={css.title}>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
