export default function UnsplashImg({ photoUrl, gradient, alt, className }) {
  if (!photoUrl) {
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
      src={photoUrl}
      alt={alt || ''}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.target.style.display = 'none';
        if (e.target.parentNode) {
          e.target.parentNode.style.background = gradient || 'linear-gradient(135deg,#3B6D11,#97C459)';
        }
      }}
    />
  );
}
