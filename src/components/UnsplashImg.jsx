export default function UnsplashImg({ photoUrl, photoId, keyword, gradient, alt, className }) {
  let src = photoUrl;
  if (!src && photoId) {
    src = `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1200&q=80`;
  }
  if (!src && keyword) {
    src = `https://source.unsplash.com/1200x800/?${keyword}`;
  }

  if (!src) {
    return (
      <div
        className={className}
        style={{ background: gradient || 'linear-gradient(135deg,#3B6D11,#97C459)' }}
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={(e) => {
        const target = e.currentTarget;
        target.style.display = 'none';
        if (target.parentNode) {
          target.parentNode.style.background = gradient || 'linear-gradient(135deg,#3B6D11,#97C459)';
        }
      }}
    />
  );
}
