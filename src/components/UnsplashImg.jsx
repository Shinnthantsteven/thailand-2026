export default function UnsplashImg({ photoId, keyword, gradient, alt, className }) {
  if (!photoId) {
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
      src={`https://images.unsplash.com/photo-${photoId}?w=800&q=80&auto=format&fit=crop`}
      alt={alt || (keyword ? keyword.replace(/\+/g, ' ') : '')}
      className={className}
      onError={(e) => {
        e.target.style.display = 'none';
        if (e.target.parentNode) {
          e.target.parentNode.style.background = gradient || 'linear-gradient(135deg,#3B6D11,#97C459)';
        }
      }}
    />
  );
}
