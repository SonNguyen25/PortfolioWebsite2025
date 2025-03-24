import React from 'react';

const AboutHeading = ({
  heading,
  subHeading,
  fromDate,
  toDate,
  description,
}) => (
  <div className="about-heading">
    <div className="about-main-heading">
      <div className="heading-bullet"></div>
      <span>{heading}</span>
      {fromDate && toDate && (
        <div className="heading-date">
          {fromDate} - {toDate}
        </div>
      )}
    </div>
    {subHeading && <div className="about-sub-heading">{subHeading}</div>}
    {description && <div className="about-heading-description">{description}</div>}
  </div>
);

const AboutSection = ({ children }) => (
  <div className="about-screen-container">{children}</div>
);

export { AboutHeading, AboutSection };
