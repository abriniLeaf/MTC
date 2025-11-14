import React from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  size?: 'large' | 'medium' | 'small';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  backgroundImage,
  backgroundColor = '#8B9DC3',
  textColor = '#FFFFFF',
  size = 'large'
}) => {
  const sizeClasses = {
    large: 'service-card-large',
    medium: 'service-card-medium',
    small: 'service-card-small'
  };

  return (
    <div
      className={`service-card ${sizeClasses[size]}`}
      style={{
        backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        color: textColor
      }}
    >
      <div className="service-card-content">
        <h2 className="service-card-title" style={{ whiteSpace: 'pre-line' }}>{title}</h2>
      </div>
      {backgroundImage && <div className="service-card-overlay"></div>}
    </div>
  );
};

export default ServiceCard;
