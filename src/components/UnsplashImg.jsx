export default function UnsplashImg({ keyword, gradient, alt, className }) {
  const src = `https://source.unsplash.com/featured/800x500/?${keyword}`;
  return (
    <img
      src={src}
      alt={alt || keyword.replace(/\+/g, ' ')}
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
