import React from 'react';
import { ASSETS } from '../config/assets';

interface ProConItem {
  text: string | React.ReactNode;
}

interface ProductSectionProps {
  rank?: number;
  title: string;
  imageUrl: string;
  effectiveness: string;
  safety: string;
  price: string;
  overall: string;
  starRating?: string;
  description: (string | React.ReactNode)[];
  quote?: {
    text: string;
    author: string;
  };
  pros: ProConItem[];
  cons: ProConItem[];
  ctaUrl?: string;
  ctaText?: string;
  showVisitWebsite?: boolean;
  additionalContent?: React.ReactNode;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  rank,
  title,
  imageUrl,
  effectiveness,
  safety,
  price,
  overall,
  starRating = '★★★★★',
  description,
  quote,
  pros,
  cons,
  ctaUrl,
  ctaText = 'VISIT WEBSITE',
  showVisitWebsite = true,
  additionalContent,
}) => {
  const renderStars = (rating: string) => {
    const goldStars = rating.match(/★/g)?.length || 0;
    const totalStars = 5;
    const whiteStars = totalStars - goldStars;
    
    return (
      <span className="star-gold">
        {'★'.repeat(goldStars)}
        {whiteStars > 0 && <span className="star-white">{'★'.repeat(whiteStars)}</span>}
      </span>
    );
  };

  return (
    <div className="text">
      {ctaUrl ? (
        <a href={ctaUrl}>
          <h2 className="heading_2">
            {rank && `${rank}. `}
            {title}
          </h2>
        </a>
      ) : (
        <h2 className="heading_2">
          {rank && `${rank}. `}
          {title}
        </h2>
      )}

      {ctaUrl ? (
        <a href={ctaUrl}>
          <img src={imageUrl} alt={title} className="center" />
        </a>
      ) : (
        <img src={imageUrl} alt={title} className="center" />
      )}

      <p>
        <b>Effectiveness:</b> {effectiveness}
      </p>
      <p>
        <b>Safety:</b> {safety}
      </p>
      <p>
        <b>Price:</b> {price}
      </p>
      <p>
        <b>Overall:</b> {overall} {renderStars(starRating)}
      </p>

      {description.map((paragraph, index) => (
        <React.Fragment key={index}>
          {typeof paragraph === 'string' ? <p>{paragraph}</p> : paragraph}
        </React.Fragment>
      ))}

      {quote && (
        <div className="quote">
          "{quote.text}" - <b>{quote.author}</b>
        </div>
      )}

      <div className="pros-box">
        <div className="inner-box green">
          <h1>Pros</h1>
          <ul>
            {pros.map((item, index) => (
              <li key={index}>
                <img
                  src={ASSETS.icons.checkmark}
                  className="check-logo"
                  alt=""
                />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="inner-box red">
          <h1>Cons</h1>
          <ul>
            {cons.map((item, index) => (
              <li key={index}>
                <img
                  src={ASSETS.icons.cross}
                  className="check-logo"
                  alt=""
                />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showVisitWebsite && ctaUrl && (
        <div className="save-box">
          <a href={ctaUrl}>{ctaText}</a>
        </div>
      )}

      {additionalContent}
    </div>
  );
};

export default ProductSection;
