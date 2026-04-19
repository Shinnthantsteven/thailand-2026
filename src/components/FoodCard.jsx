import PlaceImage from './PlaceImage';

const tagStyles = {
  'must-try': 'bg-amber-mid text-neutral-ink',
  'safe': 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  'halal-check': 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
};

const tagLabels = {
  'must-try': '⭐ Must try',
  'safe': '✅ Always safe',
  'halal-check': '☪️ Ask "mai sai moo"',
};

export default function FoodCard({ food }) {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-36">
        <PlaceImage
          keyword={food.photoKeyword}
          fallbackGradient="linear-gradient(135deg, #BA7517, #FAC775)"
          className="w-full h-36"
          size="400x300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className={`absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-medium ${tagStyles[food.tag]}`}>
          {tagLabels[food.tag]}
        </span>
        <span className="absolute bottom-2 left-2 bg-white/90 dark:bg-gray-900/90 text-xs px-2 py-0.5 rounded-full text-neutral-muted dark:text-gray-400 font-medium">
          {food.region}
        </span>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-serif text-base font-bold text-neutral-ink dark:text-gray-100">{food.name}</h3>
          <span className="text-sm font-semibold text-forest-dark dark:text-forest-mid shrink-0 ml-2">{food.price}</span>
        </div>
        <p className="text-xs text-neutral-muted dark:text-gray-400 leading-relaxed mb-1.5">{food.description}</p>
        <p className="text-xs font-medium text-forest-dark dark:text-forest-mid">📍 {food.where}</p>
        {food.notes && (
          <p className="text-xs text-neutral-muted dark:text-gray-500 mt-1 italic">{food.notes}</p>
        )}
      </div>
    </div>
  );
}
