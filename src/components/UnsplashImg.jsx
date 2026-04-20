export default function UnsplashImg({ photoId, keyword, gradient, alt, className }) {
  const src = photoId
    ? `https://images.unsplash.com/photo-${photoId}?w=800&q=80&auto=format&fit=crop`
    : `https://source.unsplash.com/featured/800x500/?${keyword}`;

  return (
    <img
      src={src}
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
