import PlaceImage from './PlaceImage';

const tagStyles = {
  free: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  paid: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  transport: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  food: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
  admin: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  warning: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
};

const tagLabels = {
  free: 'Free',
  paid: 'Paid',
  transport: 'Transport',
  food: 'Food',
  admin: 'Admin',
  warning: '⚠️ Must do',
};

export default function ActivityRow({ activity }) {
  const { time, name, note, cost, tag, photoKeyword } = activity;

  return (
    <div className="flex gap-3 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
      {/* Time */}
      <div className="w-16 shrink-0 text-xs text-neutral-muted dark:text-gray-500 pt-0.5 font-medium">
        {time}
      </div>

      {/* Thumbnail */}
      {photoKeyword ? (
        <div className="w-14 h-14 shrink-0 rounded-lg overflow-hidden">
          <PlaceImage
            keyword={photoKeyword}
            fallbackGradient="linear-gradient(135deg, #3B6D11, #97C459)"
            className="w-14 h-14"
            size="200x200"
          />
        </div>
      ) : (
        <div className="w-14 shrink-0" />
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="font-medium text-sm text-neutral-ink dark:text-gray-100 leading-snug">{name}</p>
          {cost && (
            <span className="text-xs font-semibold text-forest-dark dark:text-forest-mid whitespace-nowrap shrink-0">{cost}</span>
          )}
        </div>
        <p className="text-xs text-neutral-muted dark:text-gray-400 mt-0.5 leading-relaxed">{note}</p>
        <span className={`inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full font-medium ${tagStyles[tag] || tagStyles.admin}`}>
          {tagLabels[tag] || tag}
        </span>
      </div>
    </div>
  );
}
