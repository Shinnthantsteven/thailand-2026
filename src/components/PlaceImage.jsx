import { useState } from 'react';

function buildUrl(keyword, size) {
  // loremflickr.com: free, keyword-based, still works (source.unsplash.com was shut down 2023)
  const [w, h] = size.split('x');
  const terms = keyword.replace(/\+/g, ',');
  return `https://loremflickr.com/${w}/${h}/${terms}`;
}

export default function PlaceImage({ keyword, fallbackGradient, className = '', size = '400x300' }) {
  const [failed, setFailed] = useState(false);

  if (!keyword || failed) {
    return (
      <div
        className={className}
        style={{ background: fallbackGradient || 'linear-gradient(135deg, #3B6D11, #639922)' }}
      />
    );
  }

  return (
    <img
      src={buildUrl(keyword, size)}
      alt={keyword.replace(/\+/g, ' ')}
      className={`${className} object-cover`}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
